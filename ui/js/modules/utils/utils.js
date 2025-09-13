import { DAY_OF_WEEK_MAP, IMPERIAL, METRIC } from '../constants.js'

const toLocaleTimeString = (time) => new Date(time * 1000).toLocaleTimeString('en-us', { timeStyle: 'short' })

const toLocaleString = (time) => new Date(time).toLocaleString('en-us', {
  dateStyle: 'short',
  timeStyle: 'short'
})

const dayOfWeek = (time) => DAY_OF_WEEK_MAP[new Date(time * 1000).getDay()]

const getWindDirection = (degrees) => {
  const directions = [
    'N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
    'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'
  ]
  const index = Math.round(((degrees % 360) / 22.5))
  return directions[index]
}

const getMoonPhase = (phase) => {
  if (phase === 0 || phase === 1) return 'New moon'
  if (phase > 0 && phase < 0.25) return 'Waxing crescent'
  if (phase === 0.25) return 'First quarter moon'
  if (phase > 0.25 && phase < 0.5) return 'Waxing gibbous'
  if (phase === 0.5) return 'Full moon'
  if (phase > 0.5 && phase < 0.75) return 'Waning gibbous'
  if (phase === 0.75) return 'Last quarter moon'
  if (phase > 0.75 && phase < 1) return 'Waning crescent'
}

const getUnits = () => {
  return localStorage.getItem('units') || IMPERIAL
}

const setUnits = (units) => {
  localStorage.setItem('units', units)
}

const changeUnits = () => {
  const currentUnits = getUnits()

  if (currentUnits === IMPERIAL) {
    setUnits(METRIC)
  } else {
    setUnits(IMPERIAL)
  }

  location.reload()
}

export {
  toLocaleTimeString,
  toLocaleString,
  dayOfWeek,
  getWindDirection,
  getMoonPhase,
  getUnits,
  changeUnits
}
