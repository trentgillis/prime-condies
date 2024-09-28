import { CurrentWeatherData } from '@/lib/types/WeatherResponse';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import styles from './CurrentWeatherDetails.module.scss';

import React from 'react';
import { getWeatherDescription } from '@/lib/utils/weather';
import CurrentWeatherSummary from './CurrentWeatherSummary';

interface CurrentWeatherDetailsProps {
  currentForecast: CurrentWeatherData;
}

function CurrentWeatherDetails({ currentForecast }: CurrentWeatherDetailsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>
        <span>Now</span>
      </div>
      <CurrentWeatherSummary weatherDescription={currentForecast.weather[0]} />
    </div>
  );
}

export default CurrentWeatherDetails;
