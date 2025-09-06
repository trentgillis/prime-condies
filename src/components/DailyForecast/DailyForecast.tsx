import React from 'react';

import { DailyWeatherData } from '@/lib/types/WeatherResponse';
import WeatherIcon from '@/components/WeatherIcon';

interface DailyForecastProps {
  areaTimezone: string;
  dailyForecast: DailyWeatherData[];
}

function DailyForecast({ areaTimezone, dailyForecast }: DailyForecastProps) {
  return (
    <div className="col-span-2 flex w-full flex-grow flex-col rounded border border-white">
      <div className="border-b border-white p-2 lg:px-4">
        <h2 className="text-sm lg:text-base">Daily Forecast</h2>
      </div>
      <div className="flex flex-col lg:flex-row">
        {dailyForecast.map((day, index) => {
          return (
            <div
              key={day.dt}
              className="grid min-h-12 grid-cols-3 p-2 lg:flex lg:flex-grow lg:flex-col lg:items-center lg:justify-center lg:gap-4 lg:p-4"
            >
              <span className="font-outfit flex items-center justify-start text-sm font-medium">
                {index === 0
                  ? 'Today'
                  : new Date(day.dt * 1000).toLocaleString('en-US', { timeZone: areaTimezone, weekday: 'long' })}
              </span>
              <div className="hidden items-center justify-center lg:flex">
                <WeatherIcon size={40} iconCode={day.weather[0].icon} />
              </div>
              <div className="flex items-center justify-center lg:hidden">
                <WeatherIcon size={24} iconCode={day.weather[0].icon} />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span className="font-outfit min-w-6 text-sm font-medium text-neutral-300 lg:text-base">
                  {Math.round(day.temp.min)}&deg;
                </span>
                <span className="font-outfit min-w-6 text-sm font-bold lg:text-base">
                  {Math.round(day.temp.max)}&deg;
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DailyForecast;
