import React from 'react';

import { WeatherIcon } from '@/components';
import { Area } from '@/lib/types';

interface AreaListItemWeatherProps {
  area: Area;
}

function AreaListItemWeather({ area }: AreaListItemWeatherProps) {
  return (
    <div className="flex flex-col items-end">
      <div className="flex h-full items-center gap-2">
        <div className="hidden lg:block">
          <WeatherIcon
            isDay={Boolean(area.weather.current.is_day)}
            size={32}
            iconCode={area.weather.current.weather_code}
          />
        </div>
        <div className="lg:hidden">
          <WeatherIcon
            isDay={Boolean(area.weather.current.is_day)}
            size={24}
            iconCode={area.weather.current.weather_code}
          />
        </div>
        <h3 className="text-xl text-zinc-50 lg:text-2xl">
          {Math.round(area.weather.current.temperature_2m)}&deg;
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-400 lg:text-sm">
          H: {Math.round(area.weather.daily.temperature_2m_max[0])}&deg;
        </span>
        <span className="text-xs text-zinc-400 lg:text-sm">
          L: {Math.round(area.weather.daily.temperature_2m_min[0])}&deg;
        </span>
      </div>
    </div>
  );
}

export default AreaListItemWeather;
