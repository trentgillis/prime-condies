export type OwmOneCallDataWeatherInfo = {
  id: number;
  main?: string;
  description?: string;
  icon?: string;
};

export type OwmOneCallData = {
  dt: number;
  sunrise?: number;
  sunset?: number;
  moonrise?: number;
  moonset?: number;
  moon_phase?: string;
  temp:
    | number
    | {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
      };
  feels_like:
    | number
    | {
        day: number;
        night: number;
        eve: number;
        morn: number;
      };
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: OwmOneCallDataWeatherInfo[];
  rain?: number | { '1h': number };
  snow?: number | { '1h': number };
  pop?: number;
};

export type OwmOneCallResponse = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: string;
  current: OwmOneCallData;
  hourly: OwmOneCallData[];
  daily: OwmOneCallData[];
};
