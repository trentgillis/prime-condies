import { ColorCode } from '@/lib/types/ColorCode';
import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { ChanceOfRainIcon } from './icons';

type WeatherIconCode = '01' | '02' | '03' | '04' | '09' | '10' | '11' | '13' | '50';

type WeatherIconProps = {
  weatherIconCode: string;
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
  console.log(weatherIconCode);

  return ChanceOfRainIcon;
}

export function WeatherIcon({ weatherIconCode, colorCode = 'N300', strokeWidth = 2, size }: WeatherIconProps) {
  const color = getColorFromColorCode(colorCode);

  const Icon = getWeatherIconFromCode(weatherIconCode.substring(0, 2));
  const iconVariant = weatherIconCode.endsWith('n') ? 'night' : 'day';

  return <Icon variant={iconVariant} size={size} color={color} strokeWidth={strokeWidth} />;
}
