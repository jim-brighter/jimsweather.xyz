import { getWeather } from './weatherService.js';

const options = {
  enableHighAccuracy: false,
  maximumAge: 24 * 60 * 60 * 1000
}

export default function checkLocationAndGetWeather () {
  const storedLocation = JSON.parse(localStorage.getItem('location'))

  if (storedLocation && isLocationFresh(storedLocation)) {
    console.log('location is fresh')
    getWeather(storedLocation)
  } else {
    console.log('location is stale')
    navigator.geolocation.getCurrentPosition(geoHandler, errorHandler, options);
  }
}

const isLocationFresh = (location) => {
  const now = new Date()
  const then = new Date(location.time)

  // shelf life of 1 month
  return ((now - then) / 1000 / 60 / 60 / 24) < 30;
}

const geoHandler = (location) => {
  const locationData = {
      lat: location.coords.latitude,
      lon: location.coords.longitude,
      time: Date.now()
  };

  localStorage.setItem('location', JSON.stringify(locationOptions));

  getWeather(locationData);
}

const errorHandler = () => {
  const zip = prompt('Could not determine location. Enter zip code to get weather data:');
  const locationData = {
      zip,
      time: Date.now()
  };

  localStorage.setItem('location', JSON.stringify(locationOptions));

  getWeather(locationData);
}
