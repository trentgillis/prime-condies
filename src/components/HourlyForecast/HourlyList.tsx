import React from 'react';

import { HourlyWeatherData } from '@/lib/types/WeatherResponse';
import WeatherIcon from '@/components/WeatherIcon';

interface HourlyListProps {
  areaTimezone: string;
  hourlyForecast: HourlyWeatherData[];
}

function HourlyList({ areaTimezone, hourlyForecast }: HourlyListProps) {
  return (
    <div className="flex w-full flex-col rounded border border-white lg:hidden">
      <div className="border-b border-white p-2">
        <h2 className="text-sm">Hourly Forecast</h2>
      </div>
      <div className="flex overflow-x-scroll">
        {hourlyForecast.slice(0, 24).map((hour, index) => {
          return (
            <div key={hour.dt} className="flex min-w-14 flex-col items-center gap-2 p-2">
              <span className="text-xs">
                {index === 0
                  ? 'Now'
                  : new Date(hour.dt * 1000).toLocaleString('en-US', { timeZone: areaTimezone, hour: 'numeric' })}
              </span>
              <div className="w-6">
                <WeatherIcon iconCode={hour.weather[0].icon} />
              </div>
              <span className="font-outfit text-sm font-bold">{Math.round(hour.temp)}&deg;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HourlyList;
