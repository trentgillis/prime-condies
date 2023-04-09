import { ColorCodes } from '@/lib/types/ColorCodes';
import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { ChanceOfRainIcon } from './icons';

type WeatherIconProps = {
  // TODO: Create weather codes type
  weatherCode: any;
  size: number;
  // Rename to ColorCode
  colorCode?: ColorCodes;
  strokeWidth?: number;
};

export type WeatherIconSvgProps = {
  color: string;
  strokeWidth: number;
  size: number;
};

export function WeatherIcon({ colorCode = 'N300', strokeWidth = 2, size }: WeatherIconProps) {
  const color = getColorFromColorCode(colorCode);

  return <ChanceOfRainIcon size={size} color={color} strokeWidth={strokeWidth} />;
}
