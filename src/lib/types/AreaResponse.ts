import { AreaSelect } from '@/db/types';

import { WeatherResponse } from './WeatherResponse';
import { AreaWeatherData } from './AreaWeatherData';

export type AreaResponse = AreaSelect & {
  weatherData: WeatherResponse; // TODO: remove this once migrated to open-meteo
  weather: AreaWeatherData;
};
