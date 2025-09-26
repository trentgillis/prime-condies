import { weatherGridStyles } from '../weather-details-grid';

import React from 'react';

import { Card, CardHeader } from '@/components';
import { AreaWeather } from '@/lib/types';

import DailyForecastList from './daily-forecast-list';
import { get7DayForecastData } from './daily-forecast.utils';
import DailyForecastDetail from './daily-forecast-detail';

interface DailyForecastProps {
  weather: AreaWeather;
}

function DailyForecast({ weather }: DailyForecastProps) {
  const days = get7DayForecastData(weather);

  return (
    <Card className={`${weatherGridStyles.gridAreaDailyForecast} flex h-full w-full flex-col p-0`}>
      <CardHeader className="border-b border-zinc-700 p-3">7-Day Forecast</CardHeader>
      <div className="flex flex-grow">
        <DailyForecastList days={days} />
        <DailyForecastDetail />
      </div>
    </Card>
  );
}

export default DailyForecast;
