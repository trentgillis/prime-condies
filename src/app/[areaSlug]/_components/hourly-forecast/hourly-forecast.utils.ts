/**
 * Interface representing the available hourly weather data
 */
export interface HourlyWeather {
  time: number;
  timezone: string;
  temperature: number;
  weatherCode: number;
  isDay: boolean;
  precipitationProbability: number;
}
