import { AreaWeather } from '@/lib/types';

export interface DailyWeather {
  time: number;
  timezone: string;
  weatherCode: number;
  maxTemperature: number;
  minTemperature: number;
}

export function get7DayForecastData(weather: AreaWeather): DailyWeather[] {
  return Array.from({ length: 7 }).map((_, i) => {
    return {
      time: weather.daily.time[i],
      timezone: weather.timezone,
      weatherCode: weather.daily.weather_code[i],
      maxTemperature: weather.daily.temperature_2m_max[i],
      minTemperature: weather.daily.temperature_2m_min[i],
    };
  });
}
