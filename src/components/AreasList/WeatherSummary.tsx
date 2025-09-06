import React from 'react';

import WeatherIcon from '@/components/WeatherIcon';
import { getWeatherDescription } from '@/lib/utils/weather';
import { WeatherDescription } from '@/lib/types/WeatherResponse';

interface WeatherSummaryProps {
  weatherDescription: WeatherDescription;
}

function WeatherSummary({ weatherDescription }: WeatherSummaryProps) {
  return (
    <div className="col-start-2 flex w-full justify-end lg:col-start-3">
      <div className="flex h-full flex-col items-center justify-center gap-2 lg:w-32">
        <div className="h-14 w-14 lg:h-20 lg:w-20">
          <WeatherIcon size={72} iconCode={weatherDescription.icon} />
        </div>
        <span className="text-xs text-neutral-200 lg:text-sm">
          {getWeatherDescription(weatherDescription.id, weatherDescription.main)}
        </span>
      </div>
    </div>
  );
}

export default WeatherSummary;
