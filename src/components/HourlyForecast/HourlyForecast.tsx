import styles from './HourlyForecast.module.scss';

import React from 'react';

import { HourlyWeatherData } from '@/lib/types/WeatherResponse';

import HourlyList from './HourlyList';
import HourlyGraph from './HourlyGraph';

interface HourlyForecastProps {
  areaTimezone: string;
  hourlyForecast: HourlyWeatherData[];
}

function HourlyForecast({ areaTimezone, hourlyForecast }: HourlyForecastProps) {
  return (
    <div className={styles.wrapper}>
      <HourlyList areaTimezone={areaTimezone} hourlyForecast={hourlyForecast} />
      <HourlyGraph hourlyForecast={hourlyForecast} />
    </div>
  );
}

export default HourlyForecast;
