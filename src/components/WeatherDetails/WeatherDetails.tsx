import WeatherDetail from '../WeatherDetail';
import styles from './WeatherDetails.module.scss';

import React from 'react';

interface WeatherDetailsProps {
  precipitation: number;
  humidity: number;
  windSpeed: number;
}

function WeatherDetails({ precipitation, humidity, windSpeed }: WeatherDetailsProps) {
  return (
    <div className={styles.wrapper}>
      <WeatherDetail variant="precipitation" label="Precipitation">
        <>{precipitation === 0 ? 0 : Math.round(precipitation * 100)}%</>
      </WeatherDetail>
      <WeatherDetail variant="humidity" label="Humidity">
        <>{humidity}%</>
      </WeatherDetail>
      <WeatherDetail variant="windSpeed" label="Wind Speed">
        <>{Math.round(windSpeed)}mph</>
      </WeatherDetail>
    </div>
  );
}

export default WeatherDetails;
