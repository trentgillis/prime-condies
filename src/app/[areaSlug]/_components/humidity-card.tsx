import weatherGridStyles from './weather-details-grid.module.css';

import React from 'react';

import Card from '@/components/card/card';
import { WeatherInfoIcon } from '@/components';
import CardHeader from '@/components/card/card-header';

function HumidityCard() {
  return (
    <Card className={`${weatherGridStyles.gridAreaHumidity} w-full`}>
      <CardHeader>
        <WeatherInfoIcon className="fill-zinc-400" icon="humidity" />
        Humidity
      </CardHeader>
    </Card>
  );
}

export default HumidityCard;
