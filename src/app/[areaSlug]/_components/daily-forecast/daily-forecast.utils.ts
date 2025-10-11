import { AreaWeather } from '@/lib/types';
import { HourlyWeather } from '../hourly-forecast/hourly-forecast.utils';

/**
 * Interface representing the weather details for a given day
 */
export interface DailyWeather {
  time: number;
  timezone: string;
  weatherCode: number;
  maxTemperature: number;
  minTemperature: number;
  precipitationSum: number;
  precipitationProbability: number;
  humidity: number;
  dewPoint: number;
  windSpeed: number;
  gustSpeed: number;
  sunrise: number;
  sunset: number;
  hourly: HourlyWeather[];
}

function getDayHourlyWeather(startTime: number, weather: AreaWeather): HourlyWeather[] {
  const hourlyStartIdex = weather.hourly.time.findIndex((hour) => hour === startTime);
  return Array.from({ length: 24 }).map((_, i) => {
    return {
      time: weather.hourly.time[hourlyStartIdex + i],
      timezone: weather.timezone,
      temperature: weather.hourly.temperature_2m[hourlyStartIdex + i],
      weatherCode: weather.hourly.weather_code[hourlyStartIdex + i],
      precipitationProbability: weather.hourly.precipitation_probability[hourlyStartIdex + i],
      isDay: true,
    };
  });
}

export function get7DayForecastData(weather: AreaWeather): DailyWeather[] {
  return Array.from({ length: 7 }).map((_, i) => {
    return {
      time: weather.daily.time[i],
      timezone: weather.timezone,
      weatherCode: weather.daily.weather_code[i],
      maxTemperature: weather.daily.temperature_2m_max[i],
      minTemperature: weather.daily.temperature_2m_min[i],
      precipitationSum: weather.daily.precipitation_sum[i],
      precipitationProbability: weather.daily.precipitation_probability_mean[i],
      humidity: weather.daily.relative_humidity_2m_mean[i],
      dewPoint: weather.daily.dew_point_2m_mean[i],
      windSpeed: weather.daily.wind_speed_10m_max[i],
      gustSpeed: weather.daily.wind_gusts_10m_max[i],
      sunrise: weather.daily.sunrise[i],
      sunset: weather.daily.sunset[i],
      hourly: getDayHourlyWeather(weather.daily.time[i], weather),
    };
  });
}
