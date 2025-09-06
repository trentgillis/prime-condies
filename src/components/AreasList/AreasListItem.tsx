import React from 'react';
import Link from 'next/link';

import { AreaResponse } from '@/lib/types/AreaResponse';
import WeatherDetails from '@/components/WeatherDetails';

import AreaSummary from './AreaSummary';
import WeatherSummary from './WeatherSummary';

type AreaListItemProps = {
  area: AreaResponse;
};

function AreasListItem({ area }: AreaListItemProps) {
  const currentWeatherData = area.weatherData.current;

  return (
    <Link
      href={`/${area.areaSlug}`}
      className="grid grid-cols-[1fr_80px] rounded border border-white p-4 no-underline hover:bg-neutral-700 lg:grid-cols-3 lg:p-6"
    >
      <AreaSummary
        areaName={area.name}
        areaPlace={area.place}
        areaCountryCode={area.countryCode}
        currentTemp={currentWeatherData.temp}
        tempMin={area.weatherData.daily[0].temp.min}
        tempMax={area.weatherData.daily[0].temp.max}
      />
      <div className="hidden lg:col-start-2 lg:flex lg:items-center lg:justify-center">
        <WeatherDetails
          precipitation={area.weatherData.hourly[0].pop}
          humidity={currentWeatherData.humidity}
          windSpeed={currentWeatherData.wind_speed}
        />
      </div>
      <WeatherSummary weatherDescription={currentWeatherData.weather[0]} />
    </Link>
  );
}

export default AreasListItem;
