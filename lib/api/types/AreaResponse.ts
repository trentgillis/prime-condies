import { OwmOneCallData } from '@/lib/api/types/openWeatherMap/OneCall';

type AreaResponse = {
  areaId: string;
  name: string;
  place: string;
  country: string;
  location: { type: string; coordinates: number[] };
  current: OwmOneCallData;
  hourly: OwmOneCallData[];
  daily: OwmOneCallData[];
};

export default AreaResponse;
