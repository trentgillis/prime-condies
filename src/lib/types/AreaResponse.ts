import { AreaSelect } from '@/db/types';

import { WeatherResponse } from './WeatherResponse';

export type AreaResponse = AreaSelect & {
  weatherData: WeatherResponse;
};
