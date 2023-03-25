import { WeatherData } from './WeatherData';

export type WeatherResponse = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: WeatherData;
  hourly: WeatherData[];
  daily: WeatherData[];
};
