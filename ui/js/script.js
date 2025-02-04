// Initialize Web Components
import './components/current-weather/current-weather.js'
import './components/hourly-weather/hourly-weather.js'
import './components/current-weather-details/current-weather-details.js'
import './components/minutely-weather/minutely-weather.js'
import './components/daily-weather/daily-weather.js'
import './components/aqi-weather/aqi-weather.js'
import './components/hour/hour.js'
import './components/day/day.js'

import { checkLocationAndGetWeather } from './modules/services/locationService.js'

checkLocationAndGetWeather()
