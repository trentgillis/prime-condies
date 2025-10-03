import styles from './daily-forecast-detail-grid.module.css';

import React from 'react';

import { Card } from '@/components';

import DailyPrecipitation from './daily-precipitation';
import { DailyWeather } from './daily-forecast.utils';
import DailyHumidity from './daily-humidity';
import DailyWind from './daily-wind';
import DailySunriseSunset from './daily-sunrise-sunset';

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
      <Card
        className={`${styles.dailyDetailGridAreaHourly} rounded-none border-0 border-t border-zinc-700`}
      >
        Hourly
      </Card>
    </div>
  );
}

export default DailyForecastDetailGrid;
