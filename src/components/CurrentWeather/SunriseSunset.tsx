import WeatherDetail from '../WeatherDetail';
import WeatherInfoIcon from '../WeatherInfoIcon/WeatherInfoIcon';
import styles from './SunriseSunset.module.scss';

import React from 'react';

interface SunriseSunsetProps {
  areaTimezone: string;
  sunriseDatetime: number;
  sunsetDatetime: number;
}

function SunriseSunset({ areaTimezone, sunriseDatetime, sunsetDatetime }: SunriseSunsetProps) {
  return (
    <div className={styles.wrapper}>
      <WeatherDetail variant="sunrise" label="Sunrise">
        {new Date(sunriseDatetime * 1000).toLocaleString('en-US', {
          timeZone: areaTimezone,
          hour: 'numeric',
          minute: 'numeric',
        })}
      </WeatherDetail>
      <div className={styles.arrowIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" />
        </svg>
      </div>
      <WeatherDetail variant="sunset" label="Sunset">
        {new Date(sunsetDatetime * 1000).toLocaleString('en-US', {
          timeZone: areaTimezone,
          hour: 'numeric',
          minute: 'numeric',
        })}
      </WeatherDetail>
    </div>
  );
}

export default SunriseSunset;
