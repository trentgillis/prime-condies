import React from 'react';

import { CardHeader, ScrollArea } from '@/components';

import { HourlyForecast, type HourlyWeather } from '../hourly-forecast';
import DailyDetail from './daily-detail';

interface DailyHourlyProps {
  className: string;
  hourlyWeather: HourlyWeather[];
}

function DailyHourly({ className, hourlyWeather }: DailyHourlyProps) {
  return (
    <DailyDetail className={`${className} border-t p-0`}>
      <CardHeader className="p-2">Hourly Forecast</CardHeader>
      <ScrollArea className="h-full w-full" orientation="horizontal">
        <HourlyForecast hourlyWeather={hourlyWeather} />
      </ScrollArea>
    </DailyDetail>
  );
}

export default DailyHourly;
