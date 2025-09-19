import { AreaSelect } from '@/db/types';

import { AreaWeather } from './AreaWeather';

export type Area = AreaSelect & {
  weather: AreaWeather;
};
