import { ColorCode } from '@/lib/types/ColorCode';
import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { ChanceOfRainIcon, ClearSkyIcon, PartlyCloudyIcon, RainIcon, SnowIcon, ThunderStormIcon } from './icons';

type WeatherIconCode =
  | '01d'
  | '01n'
  | '02d'
  | '02n'
  | '03d'
  | '03n'
  | '04d'
  | '04n'
  | '09d'
  | '09n'
  | '10d'
  | '10n'
  | '11d'
  | '11n'
  | '13d'
  | '13n'
  | '50d'
  | '50n';

type WeatherIconProps = {
  weatherIconCode: WeatherIconCode;
  size: number;
  colorCode?: ColorCode;
  strokeWidth?: number;
};

export type WeatherIconSvgProps = {
  color: string;
  strokeWidth: number;
  size: number;
  variant?: 'day' | 'night';
};

function getWeatherIconFromCode(weatherIconCode: string) {
  const weatherIconCodeMap: { [key: string]: Function } = {
    '01': ClearSkyIcon,
    '02': PartlyCloudyIcon,
    // TODO: Add cloudy icon
    '03': PartlyCloudyIcon,
    // TODO: Add cloudy icon
    '04': PartlyCloudyIcon,
    '09': RainIcon,
    '10': ChanceOfRainIcon,
    '11': ThunderStormIcon,
    '13': SnowIcon,
    // TODO: Add mist icon
    '50': SnowIcon,
  };

  return weatherIconCodeMap[weatherIconCode];
}

export function WeatherIcon({ weatherIconCode, colorCode = 'N300', strokeWidth = 2, size }: WeatherIconProps) {
  const color = getColorFromColorCode(colorCode);

  const Icon = getWeatherIconFromCode(weatherIconCode.substring(0, 2));
  const iconVariant = weatherIconCode.endsWith('n') ? 'night' : 'day';

  return <Icon variant={iconVariant} size={size} color={color} strokeWidth={strokeWidth} />;
}
