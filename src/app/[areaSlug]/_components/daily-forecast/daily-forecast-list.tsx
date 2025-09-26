import React from 'react';

import DailyForecastListItem from './daily-forecast-list-item';
import { DailyWeather } from './daily-forecast.utils';

interface DailyForecastListProps {
  days: DailyWeather[];
}

function DailyForecastList({ days }: DailyForecastListProps) {
  return (
    <div className="flex flex-1 flex-col border-zinc-700 lg:min-w-80 lg:flex-0 lg:border-r">
      {days.map((day) => (
        <DailyForecastListItem key={day.time} day={day} />
      ))}
    </div>
  );
}

export default DailyForecastList;
