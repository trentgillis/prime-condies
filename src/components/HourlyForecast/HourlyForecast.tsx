import React from 'react';

import { HourlyWeatherData } from '@/lib/types/WeatherResponse';

import HourlyList from './HourlyList';
import HourlyGraph from './HourlyGraph';

interface HourlyForecastProps {
  areaTimezone: string;
  hourlyForecast: HourlyWeatherData[];
}

function HourlyForecast({ areaTimezone, hourlyForecast }: HourlyForecastProps) {
  return (
    <div className="col-span-2 lg:col-start-2 lg:flex lg:flex-col lg:justify-end">
      <HourlyList areaTimezone={areaTimezone} hourlyForecast={hourlyForecast} />
      <HourlyGraph areaTimezone={areaTimezone} hourlyForecast={hourlyForecast} />
    </div>
  );
}

export default HourlyForecast;
