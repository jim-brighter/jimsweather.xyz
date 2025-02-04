import {DAY_OF_WEEK_MAP, IMPERIAL, METRIC} from '../constants.js'

const toLocaleTimeString = (time) => new Date(time * 1000).toLocaleTimeString('en-us', {timeStyle: 'short'})

const toLocaleString = (time) => new Date(time).toLocaleString('en-us', {
  dateStyle: 'short',
  timeStyle: 'short'
})

const dayOfWeek = (time) => DAY_OF_WEEK_MAP[new Date(time * 1000).getDay()]

const getWindDirection = (degrees) => {
  // source http://snowfence.umn.edu/Components/winddirectionanddegrees.htm
  if (degrees > 348.75 || degrees <= 11.25) {
    return 'N'
  } else if (degrees > 11.25 && degrees <= 33.75) {
    return 'NNE'
  } else if (degrees > 33.75 && degrees <= 56.25) {
    return 'NE'
  } else if (degrees > 56.25 && degrees <= 78.75) {
    return 'ENE'
  } else if (degrees > 78.75 && degrees <= 101.25) {
    return 'E'
  } else if (degrees > 101.25 && degrees <= 123.75) {
    return 'ESE'
  } else if (degrees > 123.75 && degrees <= 146.25) {
    return 'SE'
  } else if (degrees > 146.25 && degrees <= 168.75) {
    return 'SSE'
  } else if (degrees > 168.75 && degrees <= 191.25) {
    return 'S'
  } else if (degrees > 191.25 && degrees <= 213.75) {
    return 'SSW'
  } else if (degrees > 213.75 && degrees <= 236.25) {
    return 'SW'
  } else if (degrees > 236.25 && degrees <= 258.75) {
    return 'WSW'
  } else if (degrees > 258.75 && degrees <= 281.25) {
    return 'W'
  } else if (degrees > 281.25 && degrees <= 303.75) {
    return 'WNW'
  } else if (degrees > 303.75 && degrees <= 326.25) {
    return 'NW'
  } else if (degrees > 326.25 && degrees <= 348.75) {
    return 'NNW'
  }
}

const getMoonPhase = (phase) => {
  if (phase === 0 || phase === 1) {
    return 'New moon'
  } else if (phase > 0 && phase < 0.25) {
    return 'Waxing crescent'
  } else if (phase === 0.25) {
    return 'First quarter moon'
  } else if (phase > 0.25 && phase < 0.5) {
    return 'Waxing gibous'
  } else if (phase === 0.5) {
    return 'Full moon'
  } else if (phase > 0.5 && phase < 0.75) {
    return 'Waning gibous'
  } else if (phase === 0.75) {
    return 'Last quarter moon'
  } else if (phase > 0.75 && phase < 1) {
    return 'Waning crescent'
  }
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
