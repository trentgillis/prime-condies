import React from 'react';

import { WeatherIcon } from '@/components';

import { DailyWeather } from './daily-forecast.utils';

interface DailyForcastListItemProps {
  day: DailyWeather;
}

function DailyForecastListItem({ day }: DailyForcastListItemProps) {
  return (
    <div key={day.time} className="grid flex-grow grid-cols-3 items-center justify-between px-3">
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
  );
}

export default DailyForecastListItem;
