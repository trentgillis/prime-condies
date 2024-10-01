import styles from './CurrentWeather.module.scss';

import React from 'react';

import { CurrentWeatherData, DailyWeatherData } from '@/lib/types/WeatherResponse';
import WeatherDetails from '@/components/WeatherDetails';

import WeatherSummary from './WeatherSummary';
import SunriseSunset from './SunriseSunset';

interface CurrentWeatherProps {
  areaTimezone: string;
  currentForecast: CurrentWeatherData;
  todayWeather: DailyWeatherData;
}

function CurrentWeather({ areaTimezone, currentForecast, todayWeather }: CurrentWeatherProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.timeWrapper}>
        <span className={styles.timeLabel}>Now</span>
        <span className={styles.timeText}>
          {new Date().toLocaleString('en-US', { timeZone: areaTimezone, hour: 'numeric', minute: 'numeric' })}
        </span>
      </div>
      <WeatherSummary
        currentTemp={Math.round(currentForecast.temp)}
        todayTempMax={todayWeather.temp.max}
        todayTempMin={todayWeather.temp.min}
        weatherDescription={currentForecast.weather[0]}
      />
      <SunriseSunset
        areaTimezone={areaTimezone}
        sunriseDatetime={currentForecast.sunrise}
        sunsetDatetime={currentForecast.sunset}
      />
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
