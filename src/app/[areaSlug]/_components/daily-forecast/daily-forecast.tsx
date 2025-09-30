'use client';

import { weatherGridStyles } from '../weather-details-grid';

import React from 'react';

import { Card, CardHeader } from '@/components';
import { AreaWeather } from '@/lib/types';

import DailyForecastList from './daily-forecast-list';
import { get7DayForecastData } from './daily-forecast.utils';
import DailyForecastDetailGrid from './daily-forecast-detail-grid';
import DailyForecastContext from './daily-forecast-context';

interface DailyForecastProps {
  weather: AreaWeather;
}

function DailyForecast({ weather }: DailyForecastProps) {
  const [selectedDayIdx, setSelectedDayIdx] = React.useState(0);

  const days = get7DayForecastData(weather);

  return (
    <DailyForecastContext value={{ selectedDayIdx, setSelectedDayIdx }}>
      <Card
        className={`${weatherGridStyles.gridAreaDailyForecast} flex h-full w-full flex-col p-0`}
      >
        <CardHeader className="border-b border-zinc-700 p-3">7-Day Forecast</CardHeader>
        <div className="flex flex-grow">
          <DailyForecastList days={days} />
          <DailyForecastDetailGrid dayWeatherDetails={days[selectedDayIdx]} />
        </div>
      </Card>
    </DailyForecastContext>
  );
}

export default DailyForecast;
