import styles from './daily-forecast-detail-grid.module.css';

import React from 'react';

import DailyPrecipitation from './daily-precipitation';
import { DailyWeather } from './daily-forecast.utils';
import DailyHumidity from './daily-humidity';
import DailyWind from './daily-wind';
import DailySunriseSunset from './daily-sunrise-sunset';
import DailyHourly from './daily-hourly';

interface DailyForecastDetailGridProps {
  dayWeatherDetails: DailyWeather;
}

function DailyForecastDetailGrid({ dayWeatherDetails }: DailyForecastDetailGridProps) {
  return (
    <div className={`${styles.dailyDetailGrid} flex-grow`}>
      <DailyPrecipitation
        className={styles.dailyDetailGridAreaPrecipitation}
        precipitation={dayWeatherDetails.precipitationSum}
        precipitationProbability={dayWeatherDetails.precipitationProbability}
      />
      <DailyHumidity
        className={styles.dailyDetailGridAreaHumidity}
        humidity={dayWeatherDetails.humidity}
        dewPoint={dayWeatherDetails.dewPoint}
      />
      <DailyWind
        className={styles.dailyDetailGridAreaWind}
        windSpeed={dayWeatherDetails.windSpeed}
        gustSpeed={dayWeatherDetails.gustSpeed}
      />
      <DailySunriseSunset
        className={styles.dailyDetailGridAreaSunriseSunset}
        sunrise={dayWeatherDetails.sunrise}
        sunset={dayWeatherDetails.sunset}
        timezone={dayWeatherDetails.timezone}
      />
      <DailyHourly
        className={styles.dailyDetailGridAreaHourly}
        hourlyWeather={dayWeatherDetails.hourly}
      />
    </div>
  );
}

export default DailyForecastDetailGrid;
