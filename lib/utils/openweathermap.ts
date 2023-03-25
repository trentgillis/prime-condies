import axios from 'axios';
import { getMockWeatherData } from './mockWeatherData';

export function getAreaWeather(lat: number, lon: number) {
  if (process.env.NODE_ENV === 'development') {
    return getMockWeatherData();
  }

  return axios.get('https://api.openweathermap.org/data/3.0/onecall', {
    params: {
      lat,
      lon,
      exclude: 'minutely',
      units: 'imperial',
      appid: process.env.OPEN_WEATHER_MAP_API_KEY,
    },
  });
}
