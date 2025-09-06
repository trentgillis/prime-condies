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
    wind_speed_10m: string;
  };
  current: {
    time: number;
    interval: number;
    weather_code: number;
    is_day: number;
    temperature_2m: number;
    precipitation: number;
    wind_speed_10m: number;
  };
  hourly_units: {
    time: string;
    weather_code: string;
  };
  hourly: {
    time: number[];
    weather_code: number[];
  };
  daily_units: {
    time: string;
    sunrise: string;
    sunset: string;
    weather_code: string;
    relative_humidity_2m_mean: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  daily: {
    time: number[];
    sunrise: number[];
    sunset: number[];
    weather_code: number[];
    relative_humidity_2m_mean: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}
