import styles from './WeatherSummary.module.scss';

import React from 'react';

import { WeatherDescription } from '@/lib/types/WeatherResponse';
import { getWeatherDescription } from '@/lib/utils/weather';

import WeatherIcon from '../WeatherIcon/WeatherIcon';

interface WeatherSummaryProps {
  weatherDescription: WeatherDescription;
  todayTempMax: number;
  todayTempMin: number;
}

function WeatherSummary({ weatherDescription, todayTempMax, todayTempMin }: WeatherSummaryProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.summaryWrapper}>
        <div className={styles.summary}>
          <div className={styles.weatherIcon}>
            <WeatherIcon iconCode="01d" />
          </div>
          <span>{getWeatherDescription(weatherDescription.id, weatherDescription.main)}</span>
        </div>
      </div>
      <div className={styles.temperatureWrapper}>
        <div className={styles.temperature}>
          <h2>70&deg;</h2>
          <div className={styles.highLowWrapper}>
            <span className={styles.highLowText}>H: {Math.round(todayTempMax)}&deg;</span>
            <span className={styles.highLowText}>L: {Math.round(todayTempMin)}&deg;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherSummary;
