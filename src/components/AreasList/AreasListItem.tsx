import styles from './AreasListItem.module.scss';

import React from 'react';

import { AreaResponse } from '@/lib/types/AreaResponse';

import AreaSummary from './AreaSummary';
import WeatherSummary from './WeatherSummary';

type AreaListItemProps = {
  area: AreaResponse;
};

function AreasListItem({ area }: AreaListItemProps) {
  const currentWeatherData = area.weatherData.current;

  return (
    <div className={styles.wrapper}>
      <AreaSummary
        areaName={area.name}
        areaPlace={area.place}
        areaCountryCode={area.countryCode}
        currentTemp={currentWeatherData.temp}
        tempMin={area.weatherData.daily[0].temp.min}
        tempMax={area.weatherData.daily[0].temp.max}
      />
      <WeatherSummary weatherDescription={currentWeatherData.weather[0]} />
    </div>
  );
}

export default AreasListItem;
