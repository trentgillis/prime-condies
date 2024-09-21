import styles from './AreasListItem.module.scss';

import React from 'react';

import Text from '@/components/Text';
import { AreaResponse } from '@/lib/types/AreaResponse';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { getWeatherDescription } from '@/lib/utils/weather';

import Title from '../Title';
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
        temp={0}
        tempMin={0}
        tempMax={0}
      />
      <div className={styles.weatherIcon}>
        <WeatherIcon iconCode={currentWeatherData.weather[0].icon} size={40} />
        <Text size="xs">Partly Cloudy</Text>
      </div>
    </div>
  );
}

export default AreasListItem;
