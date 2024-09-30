import { HourlyWeatherData } from '@/lib/types/WeatherResponse';
import styles from './HourlyList.module.scss';

import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

interface HourlyListProps {
  areaTimezone: string;
  hourlyForecast: HourlyWeatherData[];
}

function HourlyList({ areaTimezone, hourlyForecast }: HourlyListProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <h2>Hourly Forecast</h2>
      </div>
      <div className={styles.listWrapper}>
        {hourlyForecast.map((hour, index) => {
          return (
            <div key={hour.dt} className={styles.hourDataWrapper}>
              <span className={styles.hourText}>
                {index === 0
                  ? 'Now'
                  : new Date(hour.dt * 1000).toLocaleString('en-US', { timeZone: areaTimezone, hour: 'numeric' })}
              </span>
              <div className={styles.hourIconWrapper}>
                <WeatherIcon iconCode={hour.weather[0].icon} />
              </div>
              <span className={styles.hourWeatherText}>{Math.round(hour.temp)}&deg;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HourlyList;
