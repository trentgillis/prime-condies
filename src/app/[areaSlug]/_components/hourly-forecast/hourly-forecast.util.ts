import { AreaWeatherData } from '@/lib/types/AreaWeatherData';
import { findIndex } from '@/lib/utils/find-index';

/**
 * Interface representing the available hourly weather data
 */
export interface HourlyWeather {
  time: number;
  temperature: number;
  weatherCode: number;
  isDay: boolean;
  precipitationProbability: number;
  timezone: string;
}

/**
 * Returns whether or not the given hour is during the day based on the sunrise and
 * sunset of the current day and the next day.
 * @param hourTs unix seconds
 * @param todaySunriseTs unix seconds
 * @param todaySunsetTs unix seconds
 * @param tomorrowSunriseTs unix seconds
 * @param tomorrowSunsetTs unix seconds
 * @returns a boolean indicating if the input hourTs is during the day
 */
export function isHourDaytime(
  hourTs: number,
  todaySunriseTs: number,
  todaySunsetTs: number,
  tomorrowSunriseTs: number,
  tomorrowSunsetTs: number,
) {
  if (
    (hourTs >= tomorrowSunriseTs && hourTs <= tomorrowSunsetTs) ||
    (hourTs >= todaySunriseTs && hourTs <= todaySunsetTs)
  ) {
    return true;
  }

  return false;
}

/**
 * Returns 24 hours of weather data starting at the current forecast time
 * @param weather weather data for the area
 * @returns weather data for 24 hours from the current forecast time
 */
export function get24HourHourlyForeastData(weather: AreaWeatherData): HourlyWeather[] {
  const firstHourIndex = findIndex(weather.hourly.time, (item) => {
    return (item as number) >= weather.current.time;
  });

  return Array.from({ length: 24 }).map((_, i) => {
    return {
      time: weather.hourly.time[firstHourIndex + i],
      temperature: weather.hourly.temperature_2m[firstHourIndex + i],
      weatherCode: weather.hourly.weather_code[firstHourIndex + i],
      precipitationProbability: weather.hourly.precipitation_probability[firstHourIndex + i],
      isDay: isHourDaytime(
        weather.hourly.time[firstHourIndex + i],
        weather.daily.sunrise[0],
        weather.daily.sunset[0],
        weather.daily.sunrise[1],
        weather.daily.sunset[1],
      ),
      timezone: weather.timezone,
    };
  });
}
