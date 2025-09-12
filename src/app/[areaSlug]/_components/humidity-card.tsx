import weatherGridStyles from './weather-details-grid.module.css';

import React from 'react';

import { Card, CardHeader, WeatherInfoIcon } from '@/components';

interface HumidityCardProps {
  humidity: number;
  dewPoint: number;
}

function HumidityCard({ humidity, dewPoint }: HumidityCardProps) {
  return (
    <Card
      className={`${weatherGridStyles.gridAreaHumidity} flex aspect-square w-full flex-col gap-2`}
    >
      <CardHeader>
        <WeatherInfoIcon className="fill-zinc-400" icon="humidity" />
        Humidity
      </CardHeader>
      <div className="flex flex-1 flex-col justify-between">
        <div className="font-outfit text-2xl font-semibold text-zinc-50">{humidity}%</div>
        <div className="text-xs text-zinc-200">
          The dew point is{' '}
          <span className="font-semibold text-zinc-50">{Math.round(dewPoint)}&deg;</span>
        </div>
      </div>
    </Card>
  );
}

export default HumidityCard;
