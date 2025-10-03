'use client';

import React from 'react';

import { WeatherIcon } from '@/components';

import { DailyWeather } from './daily-forecast.utils';
import DailyForecastContext from './daily-forecast-context';

interface DailyForcastListItemProps {
  day: DailyWeather;
  dayIdx: number;
}

function DailyForecastListItem({ day, dayIdx }: DailyForcastListItemProps) {
  const { selectedDayIdx, setSelectedDayIdx } = React.useContext(DailyForecastContext);

  return (
    <div className="flex flex-grow bg-zinc-900 p-1">
      <div
        onClick={() => setSelectedDayIdx(dayIdx)}
        className={`grid flex-grow grid-cols-3 items-center justify-between px-3 lg:hover:cursor-pointer ${dayIdx === selectedDayIdx ? 'lg:bg-zinc-800' : ''} lg:rounded`}
      >
        <div className="text-sm font-semibold text-zinc-50 lg:font-normal">
          {new Date(day.time * 1000).toLocaleString('en-US', {
            timeZone: day.timezone,
            weekday: 'long',
          })}
        </div>
        <div className="flex items-center justify-center">
          <WeatherIcon isDay iconCode={day.weatherCode} />
        </div>
        <div className="flex items-center justify-end gap-1">
          <div className="text-sm text-zinc-200">{Math.round(day.maxTemperature)}&deg;</div>
          <div className="text-sm text-zinc-400">{Math.round(day.minTemperature)}&deg;</div>
        </div>
      </div>
    </div>
  );
}

export default DailyForecastListItem;
