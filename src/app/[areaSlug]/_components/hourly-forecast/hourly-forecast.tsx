import React from 'react';
import HourlyForecastItem from './hourly-forecast-item';
import { HourlyWeather } from './hourly-forecast.utils';
import { twMerge } from 'tailwind-merge';

interface HourlyForecastProps {
  hourlyWeather: HourlyWeather[];
  className?: string;
}

function HourlyForecast({ hourlyWeather, className }: HourlyForecastProps) {
  return (
    <div className={twMerge(className, 'flex items-center')}>
      {hourlyWeather.map((hour) => {
        return <HourlyForecastItem key={hour.time} hour={hour} />;
      })}
    </div>
  );
}

export default HourlyForecast;
