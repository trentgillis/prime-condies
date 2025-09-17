import weatherGridStyles from '../weather-details-grid.module.css';

import React from 'react';

import { Card, CardHeader, ScrollArea } from '@/components';

function HourlyForecast() {
  return (
    <Card
      className={`${weatherGridStyles.gridAreaHourlyForecast} flex h-full w-full flex-col gap-2 p-0`}
    >
      <CardHeader className="border-b border-zinc-700 p-3">Hourly Forecast</CardHeader>
      <ScrollArea orientation="horizontal">
        <div className="flex">
          {Array.from({ length: 50 }).map((_, i) => (
            <div className="w-12" key={i}>
              {i}
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}

export default HourlyForecast;
