import { weatherGridStyles } from '../weather-details-grid';

import React from 'react';

import { Card, CardHeader, ScrollArea } from '@/components';
import { AreaWeather } from '@/lib/types';

import { HourlyForecast } from '../hourly-forecast';
import { get24HourHourlyForeastData } from './hourly-forecast-card.utils';

interface HourlyForecastCardProps {
  weather: AreaWeather;
}

function HourlyForecastCard({ weather }: HourlyForecastCardProps) {
  const hourlyWeather = get24HourHourlyForeastData(weather);

  return (
    <Card className={`${weatherGridStyles.gridAreaHourlyForecast} flex h-full w-full flex-col p-0`}>
      <CardHeader className="border-b border-zinc-700 p-3">Hourly Forecast</CardHeader>
      <ScrollArea className="h-full w-full" orientation="horizontal">
        <HourlyForecast className="h-30" hourlyWeather={hourlyWeather} />
      </ScrollArea>
    </Card>
  );
}

export default HourlyForecastCard;
