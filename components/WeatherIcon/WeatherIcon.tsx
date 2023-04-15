import { ColorCode } from '@/lib/types/ColorCode';
import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { ChanceOfRainIcon } from './icons';

type WeatherIconProps = {
  weatherCode: number;
  size: number;
  colorCode?: ColorCode;
  strokeWidth?: number;
};

export type WeatherIconSvgProps = {
  color: string;
  strokeWidth: number;
  size: number;
};

function getWeatherIconFromCode(weatherCode: number) {
  return ChanceOfRainIcon;
}

export function WeatherIcon({ weatherCode, colorCode = 'N300', strokeWidth = 2, size }: WeatherIconProps) {
  const color = getColorFromColorCode(colorCode);

  const Icon = getWeatherIconFromCode(weatherCode);

  return <Icon size={size} color={color} strokeWidth={strokeWidth} />;
}
