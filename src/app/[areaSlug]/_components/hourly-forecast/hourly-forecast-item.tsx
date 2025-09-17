import { WeatherIcon } from '@/components';
import React from 'react';
import { HourlyForecastHour } from './hourly-forecast';

interface HourlyForecastItemProps {
  hour: HourlyForecastHour;
}

function HourlyForecastItem({ hour }: HourlyForecastItemProps) {
  return (
    <div className="flex h-24 w-18 flex-col items-center justify-between py-1">
      <span className="text-xs text-zinc-200">
        {new Date(hour.time * 1000).toLocaleString('en-US', {
          timeZone: hour.timezone,
          hour: 'numeric',
        })}
      </span>
      <WeatherIcon isDay={hour.isDay} iconCode={hour.weatherCode} size={32} />
      <span className="text-sm font-medium text-zinc-50">70&deg;</span>
    </div>
  );
}

export default HourlyForecastItem;
