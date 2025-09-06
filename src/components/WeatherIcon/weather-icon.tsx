import React from 'react';

import CloudyIcon from './icons/cloudy-icon';
import RainIcon from './icons/rain-icon';
import ThunderStormIcon from './icons/thunder-storm-icon';
import SnowIcon from './icons/snow-icon';
import MistIcon from './icons/mist-icon';
import ClearIcon from './icons/clear-icon';
import PartlyCloudyIcon from './icons/partly-cloudy-icon';

const WEATHER_ICONS: Record<number, (props: Partial<WeatherIconProps>) => React.JSX.Element> = {
  0: ClearIcon,
  1: PartlyCloudyIcon,
  2: PartlyCloudyIcon,
  3: CloudyIcon,
  45: MistIcon,
  48: MistIcon,
  51: RainIcon,
  53: RainIcon,
  55: RainIcon,
  56: RainIcon,
  57: RainIcon,
  61: RainIcon,
  63: RainIcon,
  65: RainIcon,
  66: RainIcon,
  67: RainIcon,
  71: SnowIcon,
  73: SnowIcon,
  75: SnowIcon,
  77: SnowIcon,
  80: RainIcon,
  81: RainIcon,
  82: RainIcon,
  85: SnowIcon,
  86: SnowIcon,
  95: ThunderStormIcon,
  96: ThunderStormIcon,
  99: ThunderStormIcon,
};

export type IconCode = keyof typeof WEATHER_ICONS;

export interface WeatherIconProps {
  iconCode: IconCode;
  isDay: boolean;
  size?: number;
  strokeWidth?: number;
}

function WeatherIcon({ iconCode, isDay, size = 24, strokeWidth = 2 }: WeatherIconProps) {
  const Icon = WEATHER_ICONS[iconCode];

  return Icon ? <Icon isDay={isDay} size={size} strokeWidth={strokeWidth} /> : null;
}

export default WeatherIcon;
