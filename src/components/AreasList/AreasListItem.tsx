import styles from './AreasListItem.module.scss';

import React from 'react';

import Text from '@/components/Text';
import { AreaResponse } from '@/lib/types/AreaResponse';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { getWeatherDescription } from '@/lib/utils/weather';

import AreaSummary from './AreaSummary';

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
      <div className={styles.weatherIcon}>
        <WeatherIcon iconCode={currentWeatherData.weather[0].icon} size={40} />
        <Text size="xs">
          {getWeatherDescription(currentWeatherData.weather[0].id, currentWeatherData.weather[0].main)}
        </Text>
      </div>
    </div>
  );
}

export default AreasListItem;
