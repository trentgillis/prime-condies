import React from 'react';

import { Area } from '@/lib/types/Area';
import WeatherIcon from '@/components/weather-icon';

interface AreaDetailsPageHeaderProps {
  area: Area;
}

function AreaDetailsPageHeader({ area }: AreaDetailsPageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col items-center lg:items-start lg:justify-start">
        <h1 className="text-2xl tracking-wider text-zinc-50 lg:tracking-widest">{area.name}</h1>
        <span className="font-outfit order-first text-sm tracking-wide text-zinc-200 lg:text-base">
          {area.place}, {area.countryCode}
        </span>
      </div>
      <div className="flex flex-col items-center pb-4 lg:pb-0">
        <div className="flex w-full items-center justify-center gap-2 lg:justify-end">
          <div className="lg:hidden">
            <WeatherIcon
              isDay={Boolean(area.weather.current.is_day)}
              size={64}
              iconCode={area.weather.current.weather_code}
            />
          </div>
          <div className="hidden lg:block">
            <WeatherIcon
              isDay={Boolean(area.weather.current.is_day)}
              size={40}
              iconCode={area.weather.current.weather_code}
            />
          </div>
          <h2 className="font-outfit text-5xl font-bold text-zinc-50 lg:text-3xl">
            {Math.round(area.weather.current.temperature_2m)}&deg;
          </h2>
        </div>
        <div className="flex gap-2 text-zinc-200">
          <span className="text-sm text-zinc-200">
            H: {Math.round(area.weather.daily.temperature_2m_max[0])}&deg;
          </span>
          <span className="text-sm text-zinc-200">
            L: {Math.round(area.weather.daily.temperature_2m_min[0])}&deg;
          </span>
        </div>
      </div>
    </div>
  );
}

export default AreaDetailsPageHeader;
