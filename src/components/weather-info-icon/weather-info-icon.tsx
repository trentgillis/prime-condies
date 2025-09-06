import React from 'react';
import { twMerge } from 'tailwind-merge';

import PrecipitationIcon from './icons/precipitation-icon';
import HumidityIcon from './icons/humidity-icon';
import WindSpeedIcon from './icons/wind-speed-icon';
import SunriseIcon from './icons/sunrise-icon';
import SunsetIcon from './icons/sunset-icon';

const WEATHER_INFO_ICONS = {
  precipitation: PrecipitationIcon,
  humidity: HumidityIcon,
  windSpeed: WindSpeedIcon,
  sunrise: SunriseIcon,
  sunset: SunsetIcon,
};

export type WeatherInfoVarient = keyof typeof WEATHER_INFO_ICONS;

interface WeatherInfoIconProps {
  icon: WeatherInfoVarient;
  className?: string;
}

function WeatherInfoIcon({ icon, className }: WeatherInfoIconProps) {
  const Icon = WEATHER_INFO_ICONS[icon];

  return Icon ? <Icon className={twMerge('h-4 w-4 fill-zinc-50', className)} /> : null;
}

export default WeatherInfoIcon;
