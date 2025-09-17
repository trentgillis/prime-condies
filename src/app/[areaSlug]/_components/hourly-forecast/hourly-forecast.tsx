import weatherGridStyles from '../weather-details-grid.module.css';

import React from 'react';

import { Card, CardHeader, ScrollArea } from '@/components';
import HourlyForecastItem from './hourly-forecast-item';

function HourlyForecast() {
  return (
    <Card className={`${weatherGridStyles.gridAreaHourlyForecast} flex h-full w-full flex-col p-0`}>
      <CardHeader className="border-b border-zinc-700 p-3">Hourly Forecast</CardHeader>
      <ScrollArea className="h-full w-full" orientation="horizontal">
        <div className="flex h-30 items-center">
          {Array.from({ length: 25 }).map((_, i) => (
            <HourlyForecastItem key={i} />
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}

export default HourlyForecast;
