import axios from 'axios';

import type { OwmOneCallResponse } from '@/lib/api/types/openWeatherMap/OneCall';

const openWeatherMapAPIKey: string | undefined = process.env.OPEN_WEATHER_MAP_API_KEY;
const openWeatherMapAPIRootURI: string | undefined = process.env.OPEN_WEATHER_MAP_API_ROOT_URI;

export const getOneCallForecast = async (lat: number, lon: number) => {
  const { data }: { data: OwmOneCallResponse } = await axios.get(`${openWeatherMapAPIRootURI}/onecall`, {
    params: {
      lat,
      lon,
      exclude: 'minutely',
      units: 'imperial',
      appid: openWeatherMapAPIKey,
    },
  });

  return data;
};
