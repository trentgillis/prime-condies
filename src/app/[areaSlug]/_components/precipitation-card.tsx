import weatherGridStyles from './weather-details-grid.module.css';

import React from 'react';

import { Card, CardHeader, WeatherInfoIcon } from '@/components';

function PrecipitationCard() {
  return (
    <Card className={`${weatherGridStyles.gridAreaPrecipitation} w-full`}>
      <CardHeader>
        <WeatherInfoIcon className="fill-zinc-400" icon="precipitation" />
        Precipitation
      </CardHeader>
    </Card>
  );
}

export default PrecipitationCard;
