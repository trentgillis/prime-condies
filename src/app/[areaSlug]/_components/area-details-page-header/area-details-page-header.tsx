import React from 'react';

import { Area } from '@/lib/types/Area';
import { WeatherIcon } from '@/components';

interface AreaDetailsPageHeaderProps {
  area: Area;
}

function AreaDetailsPageHeader({ area }: AreaDetailsPageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col items-center lg:items-start lg:justify-start">
        <h1 className="text-foreground text-2xl tracking-wider lg:tracking-widest">{area.name}</h1>
        <span className="font-outfit text-foreground order-first text-sm tracking-wide lg:text-base">
          {area.place}, {area.countryCode}
        </span>
      </div>
      <div className="flex flex-col items-center pb-4 lg:hidden">
        <div className="flex w-full items-center justify-center gap-2">
          <div>
            <WeatherIcon
              isDay={Boolean(area.weather.current.is_day)}
              size={64}
              iconCode={area.weather.current.weather_code}
            />
          </div>
          <h2 className="font-outfit text-foreground text-5xl font-bold">
            {Math.round(area.weather.current.temperature_2m)}&deg;
          </h2>
        </div>
        <div className="text-foreground flex gap-2">
          <span className="text-foreground text-sm">
            H: {Math.round(area.weather.daily.temperature_2m_max[0])}&deg;
          </span>
          <span className="text-foreground text-sm">
            L: {Math.round(area.weather.daily.temperature_2m_min[0])}&deg;
          </span>
        </div>
      </div>
    </div>
  );
}

export default AreaDetailsPageHeader;
