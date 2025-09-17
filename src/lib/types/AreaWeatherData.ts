export interface AreaWeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    weather_code: string;
    is_day: string;
    temperature_2m: string;
    precipitation: string;
    apparent_temperature: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
    wind_gusts_10m: string;
  };
  current: {
    time: number;
    interval: number;
    weather_code: number;
    is_day: number;
    apparent_temperature: number;
    temperature_2m: number;
    precipitation: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    wind_gusts_10m: number;
  };
  hourly_units: {
    time: string;
    weather_code: string;
    temperature_2m: string;
  };
  hourly: {
    time: number[];
    weather_code: number[];
    temperature_2m: number[];
  };
  daily_units: {
    time: string;
    weather_code: string;
    relative_humidity_2m_mean: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    sunset: string;
    sunrise: string;
    precipitation_probability_mean: string;
    dew_point_2m_max: string;
  };
  daily: {
    time: number[];
    weather_code: number[];
    relative_humidity_2m_mean: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunset: number[];
    sunrise: number[];
    precipitation_probability_mean: number[];
    dew_point_2m_max: number[];
  };
}
