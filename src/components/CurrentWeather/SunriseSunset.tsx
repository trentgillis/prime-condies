import WeatherInfoIcon from '../WeatherInfoIcon/WeatherInfoIcon';
import styles from './SunriseSunset.module.scss';

import React from 'react';

interface SunriseSunsetProps {
  sunriseDatetime: number;
  sunsetDatetime: number;
}

function SunriseSunset({ sunriseDatetime, sunsetDatetime }: SunriseSunsetProps) {
  console.log(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Denver',
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date(sunriseDatetime * 1000)),
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.dataWrapper}>
        <div className={styles.iconWrapper}>
          <WeatherInfoIcon icon="sunrise" />
        </div>
        <span className={styles.labelText}>Sunrise</span>
        <span className={styles.dataText}>
          {new Date(sunriseDatetime * 1000).toLocaleString('en-US', {
            timeZone: 'America/Denver',
            hour: 'numeric',
            minute: 'numeric',
          })}
        </span>
      </div>
      <div className={styles.dataWrapper}>
        <div className={styles.iconWrapper}>
          <WeatherInfoIcon icon="sunset" />
        </div>
        <span className={styles.labelText}>Sunset</span>
        <span className={styles.dataText}>
          {new Date(sunsetDatetime * 1000).toLocaleString('en-US', {
            timeZone: 'America/Denver',
            hour: 'numeric',
            minute: 'numeric',
          })}
        </span>
      </div>
    </div>
  );
}

export default SunriseSunset;
