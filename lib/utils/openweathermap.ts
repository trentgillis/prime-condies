import axios from 'axios';

import { WeatherResponse } from '@/lib/types/WeatherResponse';
import { getMockWeatherData } from '@/lib/utils/mockWeatherData';

export function getAreaWeather(lat: number, lon: number) {
  if (process.env.NODE_ENV === 'development') {
    return getMockWeatherData();
  }

  return axios.get<WeatherResponse>('https://api.openweathermap.org/data/3.0/onecall', {
    params: {
      lat,
      lon,
      exclude: 'minutely',
      units: 'imperial',
      appid: process.env.OPEN_WEATHER_MAP_API_KEY,
    },
  });
}
