import styles from './DailyForecast.module.scss';

import React from 'react';

import { DailyWeatherData } from '@/lib/types/WeatherResponse';

import DailyList from './DailyList';

interface DailyForecastProps {
  areaTimezone: string;
  dailyForecast: DailyWeatherData[];
}

function DailyForecast({ areaTimezone, dailyForecast }: DailyForecastProps) {
  return (
    <div className={styles.wrapper}>
      <DailyList areaTimezone={areaTimezone} dailyForecast={dailyForecast} />
    </div>
  );
}

export default DailyForecast;
