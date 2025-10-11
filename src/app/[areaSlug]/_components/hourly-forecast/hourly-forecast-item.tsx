import { WeatherIcon } from '@/components';
import React from 'react';
import { HourlyWeather } from './hourly-forecast.utils';

interface HourlyForecastItemProps {
  hour: HourlyWeather;
}

function HourlyForecastItem({ hour }: HourlyForecastItemProps) {
  return (
    <div className="flex h-24 w-18 flex-col items-center justify-between py-1">
      <span className="text-foreground text-xs font-semibold">
        {new Date(hour.time * 1000).toLocaleString('en-US', {
          timeZone: hour.timezone,
          hour: 'numeric',
        })}
      </span>
      <WeatherIcon
        isDay={hour.isDay}
        iconCode={hour.weatherCode}
        precipitationProbability={hour.precipitationProbability}
        size={24}
      />
      <span className="text-foreground text-sm font-medium">
        {Math.round(hour.temperature)}&deg;
      </span>
    </div>
  );
}

export default HourlyForecastItem;
