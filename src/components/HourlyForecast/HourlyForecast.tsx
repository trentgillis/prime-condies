import styles from './HourlyForecast.module.scss';

import React from 'react';
import HourlyList from './HourlyList';
import HourlyGraph from './HourlyGraph';
import { HourlyWeatherData } from '@/lib/types/WeatherResponse';

interface HourlyForecastProps {
  areaTimezone: string;
  hourlyForecast: HourlyWeatherData[];
}

function HourlyForecast({ areaTimezone, hourlyForecast }: HourlyForecastProps) {
  return (
    <div className={styles.wrapper}>
      <HourlyList areaTimezone={areaTimezone} hourlyForecast={hourlyForecast} />
      <HourlyGraph />
    </div>
  );
}

export default HourlyForecast;
