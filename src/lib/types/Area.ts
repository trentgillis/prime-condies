import { AreaSelect } from '@/db/types';

import { AreaWeatherData } from './AreaWeatherData';

export type Area = AreaSelect & {
  weather: AreaWeatherData;
};
