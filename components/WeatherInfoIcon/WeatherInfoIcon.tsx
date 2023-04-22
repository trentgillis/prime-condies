import { ColorCode } from '@/lib/types/ColorCode';
import { getColorFromColorCode } from '@/lib/utils/colorUtils';

import { HumidityIcon, PrecipitationIcon, WindSpeedIcon } from './icons';

type WeatherInfoIconProps = {
  icon: 'humidity' | 'windSpeed' | 'precipitation';
  size: number;
  colorCode?: ColorCode;
};

export type WeatherInfoIconSvgProps = {
  color: string;
  size: number;
};

const infoIcons = {
  humidity: HumidityIcon,
  precipitation: PrecipitationIcon,
  windSpeed: WindSpeedIcon,
};

export function WeatherInfoIcon({ icon, colorCode = 'N300', size }: WeatherInfoIconProps) {
  const Icon = infoIcons[icon];

  return <Icon color={getColorFromColorCode(colorCode)} size={size} />;
}
