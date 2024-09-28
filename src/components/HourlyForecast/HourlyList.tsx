import { HourlyWeatherData } from '@/lib/types/WeatherResponse';
import styles from './HourlyList.module.scss';

import React from 'react';

interface HourlyListProps {
  hourlyForecast: HourlyWeatherData[];
}

function HourlyList() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <h2>Hourly Forecast</h2>
      </div>
      <div className={styles.listWrapper}></div>
    </div>
  );
}

export default HourlyList;
