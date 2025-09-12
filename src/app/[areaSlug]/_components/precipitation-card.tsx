import weatherGridStyles from './weather-details-grid.module.css';

import React from 'react';

import Card from '@/components/card/card';
import { WeatherInfoIcon } from '@/components';
import CardHeader from '@/components/card/card-header';

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
