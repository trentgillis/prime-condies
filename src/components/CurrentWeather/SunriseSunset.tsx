import WeatherDetail from '../WeatherDetail';
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
      <WeatherDetail variant="sunrise" label="Sunrise">
        {new Date(sunriseDatetime * 1000).toLocaleString('en-US', {
          timeZone: 'America/Denver',
          hour: 'numeric',
          minute: 'numeric',
        })}
      </WeatherDetail>
      <WeatherDetail variant="sunset" label="Sunset">
        {new Date(sunsetDatetime * 1000).toLocaleString('en-US', {
          timeZone: 'America/Denver',
          hour: 'numeric',
          minute: 'numeric',
        })}
      </WeatherDetail>
    </div>
  );
}

export default SunriseSunset;
