import styles from './WeatherDetails.module.scss';

import React from 'react';

interface WeatherDetailsProps {
  percipitation: number;
  humidity: number;
  windSpeed: number;
}

function WeatherDetails({ percipitation, humidity, windSpeed }: WeatherDetailsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.detailWrapper}>
        <span className={styles.detailText}>{percipitation === 0 ? 0 : percipitation * 100}%</span>
      </div>
      <div className={styles.detailWrapper}>
        <span className={styles.detailText}>{humidity}%</span>
      </div>
      <div className={styles.detailWrapper}>
        <span className={styles.detailText}>{Math.round(windSpeed)}mph</span>
      </div>
    </div>
  );
}

export default WeatherDetails;
