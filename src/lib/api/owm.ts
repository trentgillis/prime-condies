import { AreaSelect } from '@/db/types';
import { getOwmMockWeatherData } from './owmMock';
import { WeatherResponse } from '../types/WeatherResponse';

const OWM_API_URL = `https://api.openweathermap.org/data/3.0/onecall`;

export async function fetchOwmWeatherData(area: AreaSelect): Promise<WeatherResponse> {
  if (process.env.VERCEL_ENV === '') {
    return Promise.resolve(getOwmMockWeatherData());
  }

  const response = await fetch(
    `${OWM_API_URL}?` +
      new URLSearchParams({
        lat: area.lat.toString(),
        lon: area.lng.toString(),
        exclude: 'minutely',
        units: 'imperial',
        appid: process.env.OWM_API_KEY!,
      }).toString(),
    { next: { revalidate: 3600 } },
  );

  return await response.json();
}
