import React from 'react';

import WeatherIcon from '@/components/WeatherIcon';
import { AreaResponse } from '@/lib/types/AreaResponse';

interface AreaListItemWeatherProps {
  area: AreaResponse;
}

function AreaListItemWeatherProps({ area }: AreaListItemWeatherProps) {
  return (
    <div className="flex flex-col items-end">
      <div className="flex h-full items-center gap-2">
        <div className="hidden lg:block">
          <WeatherIcon size={32} iconCode={area.weatherData.current.weather[0].icon} />
        </div>
        <div className="lg:hidden">
          <WeatherIcon size={24} iconCode={area.weatherData.current.weather[0].icon} />
        </div>
        <h3 className="text-xl text-zinc-50 lg:text-2xl">{Math.round(area.weatherData.current.temp)}&deg;</h3>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-400 lg:text-sm">
          H: {Math.round(area.weatherData.daily[0].temp.max)}&deg;
        </span>
        <span className="text-xs text-zinc-400 lg:text-sm">
          L: {Math.round(area.weatherData.daily[0].temp.min)}&deg;
        </span>
      </div>
    </div>
  );
}

export default AreaListItemWeatherProps;
