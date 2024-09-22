import styles from './AreasListItem.module.scss';

import React from 'react';

import { AreaResponse } from '@/lib/types/AreaResponse';

import AreaSummary from './AreaSummary';
import WeatherSummary from './WeatherSummary';
import WeatherDetails from './WeatherDetails';
import Link from 'next/link';

type AreaListItemProps = {
  area: AreaResponse;
};

function AreasListItem({ area }: AreaListItemProps) {
  const currentWeatherData = area.weatherData.current;

  return (
    <Link href={`/${area.areaSlug}`} className={styles.wrapper}>
      <AreaSummary
        areaName={area.name}
        areaPlace={area.place}
        areaCountryCode={area.countryCode}
        currentTemp={currentWeatherData.temp}
        tempMin={area.weatherData.daily[0].temp.min}
        tempMax={area.weatherData.daily[0].temp.max}
      />
      <WeatherDetails
        precipitation={area.weatherData.hourly[0].pop}
        humidity={currentWeatherData.humidity}
        windSpeed={currentWeatherData.wind_speed}
      />
      <WeatherSummary weatherDescription={currentWeatherData.weather[0]} />
    </Link>
  );
}

export default AreasListItem;
