#!/usr/bin/env bash
docker build -f Dockerfile -t jimsweather.xyz:latest .
docker run -d --rm --name jimsweather.xyz -p 9001:80 -v "$PWD/ui":/usr/share/nginx/html/ jimsweather.xyz:latest
