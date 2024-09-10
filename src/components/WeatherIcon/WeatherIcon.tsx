import React from 'react';

import PartlyCloudyDayIcon from './PartlyCloudyDayIcon';

const WEATHER_ICONS = {
  '01d': null,
  '01n': null,
  '02d': PartlyCloudyDayIcon,
  '02n': null,
  '03d': PartlyCloudyDayIcon,
  '03n': null,
  '04d': null,
  '04n': null,
  '09d': null,
  '09n': null,
  '10d': null,
  '10n': null,
  '11d': null,
  '11n': null,
  '13d': null,
  '13n': null,
  '50d': null,
  '50n': null,
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
