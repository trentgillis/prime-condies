import axios from 'axios';

export async function getAreaWeather(lat: number, lon: number) {
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
