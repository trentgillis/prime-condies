import React from 'react';

import PartlyCloudyIcon from './PartlyCloudyIcon';

export interface WeatherIconProps {
  size: number;
  strokeWidth?: number;
}

function WeatherIcon({ size, strokeWidth = 2 }: WeatherIconProps) {
  return <PartlyCloudyIcon size={size} strokeWidth={strokeWidth} />;
}

export default WeatherIcon;
