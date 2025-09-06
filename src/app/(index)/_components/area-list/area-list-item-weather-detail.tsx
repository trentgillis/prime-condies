import React from 'react';

import { WeatherInfoIcon } from '@/components';
import { AreaResponse } from '@/lib/types/AreaResponse';

interface AreaListItemWeatherDetailProps {
  area: AreaResponse;
}

function AreaListItemWeatherDetail({ area }: AreaListItemWeatherDetailProps) {
  return (
    <div className="flex w-full gap-2">
      <div className="flex flex-1 flex-col gap-1 rounded border border-zinc-700 bg-zinc-900 p-1.5 lg:p-2">
        <div className="flex items-center gap-1">
          <WeatherInfoIcon className="fill-primary h-3 w-3" icon="precipitation" />
          <span className="text-xs font-medium text-zinc-200">Precipitation</span>
        </div>
        <div className="text-sm font-semibold text-zinc-50">
          {area.weather.current.precipitation}&#8243;
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1 rounded border border-zinc-700 bg-zinc-900 p-1.5 lg:p-2">
        <div className="flex items-center gap-1">
          <WeatherInfoIcon className="fill-primary h-3 w-3" icon="humidity" />
          <span className="text-xs text-zinc-200">Humidity</span>
        </div>
        <div className="text-sm font-semibold text-zinc-50">
          {area.weather.daily.relative_humidity_2m_mean[0]}%
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1 rounded border border-zinc-700 bg-zinc-900 p-1.5 lg:p-2">
        <div className="flex items-center gap-1">
          <WeatherInfoIcon className="fill-primary h-3 w-3 lg:h-4 lg:w-4" icon="windSpeed" />
          <span className="text-xs text-zinc-200">Wind Speed</span>
        </div>
        <div className="text-sm font-semibold text-zinc-50">
          {Math.round(area.weather.current.wind_speed_10m)}mph
        </div>
      </div>
      <div className="hidden flex-1 flex-col gap-1 rounded border border-zinc-700 bg-zinc-900 p-1.5 lg:flex lg:p-2">
        <div className="flex items-center gap-1">
          {area.weather.current.is_day === 1 ? (
            <>
              <WeatherInfoIcon className="fill-primary h-3 w-3 lg:h-4 lg:w-4" icon="sunset" />
              <span className="text-xs text-zinc-200">Sunset</span>
            </>
          ) : (
            <>
              <WeatherInfoIcon className="fill-primary h-3 w-3 lg:h-4 lg:w-4" icon="sunrise" />
              <span className="text-xs text-zinc-200">Sunrise</span>
            </>
          )}
        </div>
        {area.weather.current.is_day === 1 ? (
          <div className="text-sm font-semibold text-zinc-50">
            {new Date(area.weather.daily.sunset[0] * 1000).toLocaleString('en-US', {
              timeZone: area.weather.timezone,
              hour: 'numeric',
              minute: 'numeric',
            })}
          </div>
        ) : (
          <div className="text-sm font-semibold text-zinc-50">
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
