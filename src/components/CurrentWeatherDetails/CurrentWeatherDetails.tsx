import styles from './CurrentWeatherDetails.module.scss';

import React from 'react';

import { CurrentWeatherData, DailyWeatherData } from '@/lib/types/WeatherResponse';

import CurrentWeatherSummary from './CurrentWeatherSummary';

interface CurrentWeatherDetailsProps {
  currentForecast: CurrentWeatherData;
  todayWeather: DailyWeatherData;
}

function CurrentWeatherDetails({ currentForecast, todayWeather }: CurrentWeatherDetailsProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>
        <span>Now</span>
      </div>
      <CurrentWeatherSummary
        todayTempMax={todayWeather.temp.max}
        todayTempMin={todayWeather.temp.min}
        weatherDescription={currentForecast.weather[0]}
      />
    </div>
  );
}

export default CurrentWeatherDetails;
