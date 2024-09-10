import React from 'react';

import ClearDayIcon from './ClearDayIcon';
import ClearNightIcon from './ClearNightIcon';
import CloudyIcon from './CloudyIcon';
import PartlyCloudyDayIcon from './PartlyCloudyDayIcon';
import PartlyCloudyNightIcon from './PartlyCloudyNightIcon';
import RainIcon from './RainIcon';
import ThunderStormIcon from './ThunderStormIcon';
import SnowIcon from './SnowIcon';
import MistIcon from './MistIcon';

const WEATHER_ICONS = {
  '01d': ClearDayIcon,
  '01n': ClearNightIcon,
  '02d': PartlyCloudyDayIcon,
  '02n': PartlyCloudyNightIcon,
  '03d': PartlyCloudyDayIcon,
  '03n': PartlyCloudyNightIcon,
  '04d': CloudyIcon,
  '04n': CloudyIcon,
  '09d': RainIcon,
  '09n': RainIcon,
  '10d': RainIcon,
  '10n': RainIcon,
  '11d': ThunderStormIcon,
  '11n': ThunderStormIcon,
  '13d': SnowIcon,
  '13n': SnowIcon,
  '50d': MistIcon,
  '50n': MistIcon,
};

type IconCode = keyof typeof WEATHER_ICONS;

export interface WeatherIconProps {
  iconCode: IconCode;
  size: number;
  strokeWidth?: number;
}

function WeatherIcon({ iconCode, size, strokeWidth = 2 }: WeatherIconProps) {
  const Icon = WEATHER_ICONS[iconCode];

  return Icon ? <Icon size={size} strokeWidth={strokeWidth} /> : null;
}

export default WeatherIcon;
