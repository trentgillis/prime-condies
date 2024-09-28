import styles from './CurrentWeather.module.scss';

import React from 'react';

import { CurrentWeatherData, DailyWeatherData } from '@/lib/types/WeatherResponse';

import WeatherSummary from './WeatherSummary';
import SunriseSunset from './SunriseSunset';
import WeatherDetails from '../WeatherDetails';

interface CurrentWeatherProps {
  currentForecast: CurrentWeatherData;
  todayWeather: DailyWeatherData;
}

function CurrentWeather({ currentForecast, todayWeather }: CurrentWeatherProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>
        <span>Now</span>
      </div>
      <WeatherSummary
        todayTempMax={todayWeather.temp.max}
        todayTempMin={todayWeather.temp.min}
        weatherDescription={currentForecast.weather[0]}
      />
      <SunriseSunset sunriseDatetime={currentForecast.sunrise} sunsetDatetime={currentForecast.sunset} />
      <div className={styles.detailsWrapper}>
        <WeatherDetails
          precipitation={todayWeather.pop}
          humidity={currentForecast.humidity}
          windSpeed={currentForecast.wind_speed}
        />
      </div>
    </div>
  );
}

export default CurrentWeather;
