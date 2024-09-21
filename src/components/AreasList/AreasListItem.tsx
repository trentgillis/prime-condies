import styles from './AreasListItem.module.scss';

import React from 'react';

import Text from '@/components/Text';
import { AreaResponse } from '@/lib/types/AreaResponse';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import Title from '../Title';

type AreaListItemProps = {
  area: AreaResponse;
};

function AreasListItem({ area }: AreaListItemProps) {
  return (
    <div className={styles.wrapper}>
      <div>
        <Title variant="h6">{area.name}</Title>
      </div>
      <div className={styles.weatherIcon}>
        <WeatherIcon iconCode="01d" size={40} />
        <Text size="xs">{area.weatherData.current.weather[0].main}</Text>
      </div>
    </div>
  );
}

export default AreasListItem;
