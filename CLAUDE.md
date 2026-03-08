# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A zero-framework weather site (jimsweather.xyz) built with vanilla JS Web Components, backed by AWS serverless infrastructure. The OpenWeatherMap API key is stored in AWS Secrets Manager and accessed only by the Lambda function — never exposed to the browser.

## Project Structure

Three independent packages with no shared dependencies:

- `ui/` — Vanilla JS frontend (no framework, no bundler), served via CloudFront
- `lambda/` — Node.js Lambda handler that proxies OpenWeatherMap API calls
- `cdk/` — AWS CDK (TypeScript) defining all infrastructure

## Commands

### UI
```bash
cd ui && npm start          # Starts mock API server (port 8080) + UI dev server (port 3000, opens browser)
cd ui && npm run start-prod # Serves dist/ build on port 3000
cd ui && npm run build      # Build to ui/dist/ with cache-busting timestamps and production API URL
```

### CDK (Infrastructure)
```bash
cd cdk && npm run build     # Compile TypeScript
cd cdk && npm test          # Run Jest tests
cd cdk && npm run synth     # Build UI + install lambda deps + cdk synth
cd cdk && npm run deploy    # Full deploy: build UI, install lambda deps, cdk deploy --all
cd cdk && npm run destroy   # Tear down all stacks
```

### Running a single CDK test
```bash
cd cdk && npx jest --testPathPattern=cdk.test
```

## Architecture

### Infrastructure (CDK)

Three CDK stacks deployed with cross-region references:

1. **`HostedZoneStack`** (`us-east-1`) — Route 53 hosted zone for `jimsweather.xyz`, shared across stacks
2. **`JimsWeatherStack`** (`us-east-1`) — Full stack: CloudFront + S3 UI, API Gateway + Lambda
3. **`JimsWeatherStackWest`** (`us-west-2`) — API only (no UI) for multi-region API failover

Both regional stacks extend `BaseWeatherStack` (`cdk/lib/BaseWeatherStack.ts`), which provides `createUI()` and `createAPI()` template methods. The west stack calls only `createAPI()`.

**API**: `api.jimsweather.xyz` → API Gateway → `WeatherLambda` (`GET /weather`). A `DefaultErrorLambda` handles all unmatched routes (returns 404). Rate limited to 5 req/s burst 3.

**Frontend**: `jimsweather.xyz` → CloudFront → S3. Cache TTL is 30–365 days, so the UI build uses timestamp-based filenames for cache-busting. `index.html` and `favicon.ico` are intentionally left unversioned.

### Lambda (`lambda/weather.js`)

On each invocation:
1. Fetches the OpenWeatherMap API key from Secrets Manager (`jimsweather/openweathermap-api-key`)
2. Resolves lat/lon (either from query params or by calling OpenWeather geocoding API if `zip` is provided)
3. Fans out to 4 OpenWeather endpoints in parallel: `onecall`, `air_pollution`, `air_pollution/forecast`, `reverse geocoding`
4. Returns all four responses merged into a single JSON object: `{ locality, air_pollution, air_pollution_forecast, onecall }`

### UI (`ui/`)

Entry point: `js/script.js` imports all Web Components and calls `locationService.checkLocationAndGetWeather()`.

**Module layout:**
- `js/components/` — Web Components (`current-weather`, `hourly-weather`, `daily-weather`, `minutely-weather`, `aqi-weather`, `current-weather-details`, `hour`, `day`). All extend `BaseWeatherElement`, which sets up a Shadow DOM and conditionally imports Windows-specific base styles.
- `js/modules/dao/weatherDao.js` — Fetches from `API_BASE/weather`. `API_BASE` is `http://localhost:8080` in source; rewritten to `https://api.jimsweather.xyz` by `build.js` in `dist/`.
- `js/modules/services/` — `locationService` (geolocation + localStorage caching), `weatherService`, `domService`, `errorService`
- `js/modules/utils/` — Shared utilities and selectors
- `js/modules/constants.js` — Unit maps, AQI/UVI color maps, day-of-week labels, `API_BASE`

Location is cached in `localStorage` for 30 days. If geolocation fails, the user is prompted for a zip code.

**Local dev mock server** (`ui/mock-server.js`): Native Node.js HTTP server on port 8080. Serves `GET /weather` by assembling the four JSON files under `ui/mock/` (`locality.json`, `air_pollution.json`, `air_pollution_forecast.json`, `onecall.json`). Started automatically by `npm start`.

**Build pipeline** (`ui/build.js`): Copies assets to `dist/` with timestamp-based filenames, rewrites all filename references, then substitutes `http://localhost:8080` → `https://api.jimsweather.xyz`. `build.js` and `mock-server.js` are excluded from the dist copy.
