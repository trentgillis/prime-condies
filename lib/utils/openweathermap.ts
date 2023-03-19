import axios from 'axios';

// TODO: Switch to one call API once caching is setup
export function getAreaWeather(lat: number, lon: number) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
  );
}
