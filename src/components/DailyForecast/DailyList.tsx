import styles from './DailyList.module.scss';

import React from 'react';

import { DailyWeatherData } from '@/lib/types/WeatherResponse';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

interface DailyListProps {
  areaTimezone: string;
  dailyForecast: DailyWeatherData[];
}

function DailyList({ areaTimezone, dailyForecast }: DailyListProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <h2>Daily Forecast</h2>
      </div>
      <div className={styles.listWrapper}>
        {dailyForecast.map((day, index) => {
          return (
            <div key={day.dt} className={styles.dayDataWrapper}>
              <span className={styles.dayText}>
                {index === 0
                  ? 'Today'
                  : new Date(day.dt * 1000).toLocaleString('en-US', { timeZone: areaTimezone, weekday: 'long' })}
              </span>
              <div className={styles.dayIconWrapper}>
                <WeatherIcon iconCode={day.weather[0].icon} />
              </div>
              <div className={styles.highLowWrapper}>
                <span className={styles.lowText}>{Math.round(day.temp.min)}&deg;</span>
                <span className={styles.highText}>{Math.round(day.temp.max)}&deg;</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DailyList;
