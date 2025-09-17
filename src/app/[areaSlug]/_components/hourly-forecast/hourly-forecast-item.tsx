import { WeatherIcon } from '@/components';
import React from 'react';

function HourlyForecastItem() {
  return (
    <div className="flex h-24 w-18 flex-col items-center justify-between py-1">
      <span className="text-xs text-zinc-200">7AM</span>
      <WeatherIcon isDay iconCode={0} size={32} />
      <span className="text-sm font-medium text-zinc-50">70&deg;</span>
    </div>
  );
}

export default HourlyForecastItem;
