import React from 'react';

import PrecipitationIcon from './PrecipitationIcon';
import HumidityIcon from './HumidityIcon';
import WindSpeedIcon from './WindSpeedIcon';

const WEATHER_INFO_ICONS = {
  precipitation: PrecipitationIcon,
  humidity: HumidityIcon,
  windSpeed: WindSpeedIcon,
};

interface WeatherInfoIconProps {
  icon: keyof typeof WEATHER_INFO_ICONS;
}

function WeatherInfoIcon({ icon }: WeatherInfoIconProps) {
  const Icon = WEATHER_INFO_ICONS[icon];

  return Icon ? <Icon /> : null;
}

export default WeatherInfoIcon;
