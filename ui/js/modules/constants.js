const CELSIUS = '°C'
const FAHRENHEIT = '°F'

const USER_AGENT = 'jimsweather.xyz'
const APPLICATION_JSON = 'application/json'

const UVI_COLOR_MAP = {
  0: 'uvi-low',
  1: 'uvi-low',
  2: 'uvi-low',
  3: 'uvi-moderate',
  4: 'uvi-moderate',
  5: 'uvi-moderate',
  6: 'uvi-high',
  7: 'uvi-high',
  8: 'uvi-very-high',
  9: 'uvi-very-high',
  10: 'uvi-very-high'
}

const DAY_OF_WEEK_MAP = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

const AQI_COLOR_MAP = {
  1: 'aqi-good',
  2: 'aqi-fair',
  3: 'aqi-moderate',
  4: 'aqi-poor',
  5: 'aqi-very-poor'
}

const AQI_DESC_MAP = {
  1: 'Good',
  2: 'Fair',
  3: 'Moderate',
  4: 'Poor',
  5: 'Very Poor'
}

const UNITS_MAP = {
  imperial: {
    temperature: 'F',
    windSpeed: 'mph'
  },
  metric: {
    temperature: 'C',
    windSpeed: 'm/s'
  }
}

const IMPERIAL = 'imperial'
const METRIC = 'metric'

export {
  CELSIUS,
  FAHRENHEIT,
  USER_AGENT,
  APPLICATION_JSON,
  UVI_COLOR_MAP,
  DAY_OF_WEEK_MAP,
  AQI_COLOR_MAP,
  AQI_DESC_MAP,
  UNITS_MAP,
  IMPERIAL,
  METRIC
}
