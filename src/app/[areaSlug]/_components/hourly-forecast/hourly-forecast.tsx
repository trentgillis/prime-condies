import { weatherGridStyles } from '../weather-details-grid';

import React from 'react';

import { Card, CardHeader, ScrollArea } from '@/components';
import { AreaWeather } from '@/lib/types';

import HourlyForecastItem from './hourly-forecast-item';
import { get24HourHourlyForeastData } from './hourly-forecast.util';

interface HourlyForecastProps {
  weather: AreaWeather;
}

function HourlyForecast({ weather }: HourlyForecastProps) {
  const hourlyWeather = get24HourHourlyForeastData(weather);

  return (
    <Card className={`${weatherGridStyles.gridAreaHourlyForecast} flex h-full w-full flex-col p-0`}>
      <CardHeader className="border-b border-zinc-700 p-3">Hourly Forecast</CardHeader>
      <ScrollArea className="h-full w-full" orientation="horizontal">
        <div className="flex h-30 items-center">
          {hourlyWeather.map((hour) => {
            return <HourlyForecastItem key={hour.time} hour={hour} />;
          })}
        </div>
      </ScrollArea>
    </Card>
  );
}

export default HourlyForecast;
