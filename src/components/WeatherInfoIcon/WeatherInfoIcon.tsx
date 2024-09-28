import React from 'react';

import PrecipitationIcon from './PrecipitationIcon';
import HumidityIcon from './HumidityIcon';
import WindSpeedIcon from './WindSpeedIcon';
import SunriseIcon from './SunriseIcon';
import SunsetIcon from './SunsetIcon';

const WEATHER_INFO_ICONS = {
  precipitation: PrecipitationIcon,
  humidity: HumidityIcon,
  windSpeed: WindSpeedIcon,
  sunrise: SunriseIcon,
  sunset: SunsetIcon,
};

interface WeatherInfoIconProps {
  icon: keyof typeof WEATHER_INFO_ICONS;
}

function WeatherInfoIcon({ icon }: WeatherInfoIconProps) {
  const Icon = WEATHER_INFO_ICONS[icon];

  return Icon ? <Icon /> : null;
}

export default WeatherInfoIcon;
