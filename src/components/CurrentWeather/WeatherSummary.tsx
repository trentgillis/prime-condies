import React from 'react';

import { WeatherIcon } from '@/components';
import { WeatherDescription } from '@/lib/types/WeatherResponse';
import { getWeatherDescription } from '@/lib/utils/weather';

interface WeatherSummaryProps {
  weatherDescription: WeatherDescription;
  currentTemp: number;
  todayTempMax: number;
  todayTempMin: number;
}

function WeatherSummary({
  weatherDescription,
  currentTemp,
  todayTempMax,
  todayTempMin,
}: WeatherSummaryProps) {
  return (
    <div className="flex w-full items-center justify-center gap-6 lg:flex-row lg:gap-10">
      <div className="flex flex-col items-center lg:flex-grow lg:items-end">
        <div className="flex flex-col items-center gap-1">
          <div className="hidden h-16 w-16 lg:block lg:h-24 lg:w-24">
            <WeatherIcon isDay size={100} iconCode={0} />
          </div>
          <div className="h-16 w-16 lg:hidden lg:h-24 lg:w-24">
            <WeatherIcon isDay size={64} iconCode={0} />
          </div>
          <span className="text-sm">
            {getWeatherDescription(weatherDescription.id, weatherDescription.main)}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-grow lg:items-start">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl leading-12 lg:text-5xl lg:leading-tight">{currentTemp}&deg;</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm">H: {Math.round(todayTempMax)}&deg;</span>
            <span className="text-sm">L: {Math.round(todayTempMin)}&deg;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherSummary;
