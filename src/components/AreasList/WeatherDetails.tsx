import styles from './WeatherDetails.module.scss';

import React from 'react';

import WeatherInfoIcon from '../WeatherInfoIcon/WeatherInfoIcon';

interface WeatherDetailsProps {
  precipitation: number;
  humidity: number;
  windSpeed: number;
}

function WeatherDetails({ precipitation, humidity, windSpeed }: WeatherDetailsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.detailWrapper}>
        <div className={styles.iconWrapper}>
          <WeatherInfoIcon icon="precipitation" />
        </div>
        <span className={styles.detailTextLabel}>Precipitation</span>
        <span className={styles.detailText}>{precipitation === 0 ? 0 : Math.round(precipitation * 100)}%</span>
      </div>
      <div className={styles.detailWrapper}>
        <div className={styles.iconWrapper}>
          <WeatherInfoIcon icon="humidity" />
        </div>
        <span className={styles.detailTextLabel}>Humidity</span>
        <span className={styles.detailText}>{humidity}%</span>
      </div>
      <div className={styles.detailWrapper}>
        <div className={styles.iconWrapper}>
          <WeatherInfoIcon icon="windSpeed" />
        </div>
        <span className={styles.detailTextLabel}>Wind Speed</span>
        <span className={styles.detailText}>{Math.round(windSpeed)}mph</span>
      </div>
    </div>
  );
}

export default WeatherDetails;
