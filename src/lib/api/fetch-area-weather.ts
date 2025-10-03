import { AreaWeather } from '../types/AreaWeather';
import { getOpenMeteoMockData } from './open-meteo-mock';

const OPEN_METEO_API_URL = 'https://api.open-meteo.com/v1/forecast';

/**
 * The following represent the data that will be fetched for each category from
 * Open-Meteo. See their docs for the options available for return from the API.
 * https://open-meteo.com/en/docs
 */
const OPEN_METEO_BASE_DATA = ['weather_code'];
const OPEN_METEO_CURRENT_DATA = [
  ...OPEN_METEO_BASE_DATA,
  'is_day',
  'temperature_2m',
  'precipitation',
  'weather_code',
  'wind_speed_10m',
  'apparent_temperature',
  'wind_speed_10m',
  'wind_direction_10m',
  'wind_gusts_10m',
];
const OPEN_METEO_HOURLY_DATA = [
  ...OPEN_METEO_BASE_DATA,
  'temperature_2m',
  'precipitation_probability',
];
const OPEN_METEO_DAILY_DATA = [
  ...OPEN_METEO_BASE_DATA,
  'relative_humidity_2m_mean',
  'temperature_2m_max',
  'temperature_2m_min',
  'sunset',
  'sunrise',
  'precipitation_sum',
  'precipitation_probability_mean',
  'dew_point_2m_max',
  'dew_point_2m_mean',
  'relative_humidity_2m_mean',
  'wind_speed_10m_max',
  'wind_gusts_10m_max',
];

/**
 * builds the query parameter for fetching weather data from open-meteo
 * @param lat latitude corrdinate
 * @param lng longitude corrdinate
 * @returns Query param string for open-meteo API call
 */
function buildQueryParams(lat: number, lng: number) {
  return new URLSearchParams({
    latitude: lat.toString(),
    longitude: lng.toString(),
    timezone: 'auto',
    forecast_days: '7',
    temperature_unit: 'fahrenheit',
    wind_speed_unit: 'mph',
    precipitation_unit: 'inch',
    timeformat: 'unixtime',
    current: OPEN_METEO_CURRENT_DATA.join(),
    hourly: OPEN_METEO_HOURLY_DATA.join(),
    daily: OPEN_METEO_DAILY_DATA.join(),
  }).toString();
}

/**
 * Fetches weather data from open-meteo for a given climbing area's lat/lng coordinates
 * @param lat latitude corrdinate
 * @param lng longitude corrdinate
 * @returns Weather data for passed in coordinates
 */
export async function fetchAreaWeather(lat: number, lng: number): Promise<AreaWeather> {
  if (process.env.MOCK_WEAHTER_API === 'true') {
    return Promise.resolve(getOpenMeteoMockData());
  }

  const url = `${OPEN_METEO_API_URL}?${buildQueryParams(lat, lng)}`;
  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  return await res.json();
}
