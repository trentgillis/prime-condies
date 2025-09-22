import React from 'react';
import { Droplet, Sunrise, Sunset, Waves, Wind } from 'lucide-react';

import { Area } from '@/lib/types';

interface AreaListItemWeatherDetailProps {
  area: Area;
}

function AreaListItemWeatherDetail({ area }: AreaListItemWeatherDetailProps) {
  return (
    <div className="flex w-full gap-2">
      <div className="flex flex-1 flex-col gap-1 border-r border-zinc-700 p-2 lg:p-3">
        <div className="flex items-center gap-1 text-zinc-400 uppercase">
          <Droplet className="h-3 w-3" />
          <span className="text-xs">Precipitation</span>
        </div>
        <div className="text-[0.75rem] font-semibold text-zinc-50 lg:text-sm">
          {area.weather.current.precipitation}&#8243;
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1 border-r border-zinc-700 p-2 lg:p-3">
        <div className="flex items-center gap-1 text-zinc-400 uppercase">
          <Waves className="h-3 w-3" />
          <span className="text-xs">Humidity</span>
        </div>
        <div className="text-[0.75rem] font-semibold text-zinc-50 lg:text-sm">
          {area.weather.daily.relative_humidity_2m_mean[0]}%
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-2 lg:border-r lg:border-zinc-700 lg:p-3">
        <div className="flex items-center gap-1 text-zinc-400 uppercase">
          <Wind className="h-3 w-3" />
          <span className="text-xs">Wind Speed</span>
        </div>
        <div className="text-[0.75rem] font-semibold text-zinc-50 lg:text-sm">
          {Math.round(area.weather.current.wind_speed_10m)}mph
        </div>
      </div>
      <div className="hidden flex-1 flex-col gap-1 p-2 lg:flex lg:p-3">
        <div className="flex items-center gap-1 text-zinc-400 uppercase">
          {area.weather.current.is_day === 1 ? (
            <>
              <Sunset className="h-3 w-3" />
              <span className="text-xs">Sunset</span>
            </>
          ) : (
            <>
              <Sunrise className="h-3 w-3" />
              <span className="text-xs">Sunrise</span>
            </>
          )}
        </div>
        {area.weather.current.is_day === 1 ? (
          <div className="text-[0.75rem] font-semibold text-zinc-50 lg:text-sm">
            {new Date(area.weather.daily.sunset[0] * 1000).toLocaleString('en-US', {
              timeZone: area.weather.timezone,
              hour: 'numeric',
              minute: 'numeric',
            })}
          </div>
        ) : (
          <div className="text-[0.75rem] font-semibold text-zinc-50 lg:text-sm">
            {new Date(area.weather.daily.sunrise[1] * 1000).toLocaleString('en-US', {
              timeZone: area.weather.timezone,
              hour: 'numeric',
              minute: 'numeric',
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default AreaListItemWeatherDetail;
