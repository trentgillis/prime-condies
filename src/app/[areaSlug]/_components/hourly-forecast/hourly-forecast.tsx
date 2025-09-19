import { weatherGridStyles } from '../weather-details-grid';

import React from 'react';

import { Card, CardHeader, ScrollArea } from '@/components';
import HourlyForecastItem from './hourly-forecast-item';
import { findIndex } from '@/lib/utils/find-index';
import { Area } from '@/lib/types/Area';

function isHourDay(
  hourTs: number,
  todaySunriseTs: number,
  todaySunsetTs: number,
  tomorrowSunriseTs: number,
  tomorrowSunsetTs: number,
) {
  if (
    (hourTs >= tomorrowSunriseTs && hourTs <= tomorrowSunsetTs) ||
    (hourTs >= todaySunriseTs && hourTs <= todaySunsetTs)
  ) {
    return true;
  }

  return false;
}

export interface HourlyForecastHour {
  time: number;
  temperature: number;
  weatherCode: number;
  isDay: boolean;
  precipitationProbability: number;
  timezone: string;
}

interface HourlyForecastProps {
  area: Area;
}

function HourlyForecast({ area }: HourlyForecastProps) {
  const firstHourIndex = findIndex(area.weather.hourly.time, (item) => {
    return (item as number) >= area.weather.current.time;
  });

  const hours: HourlyForecastHour[] = Array.from({ length: 24 }).map((_, i) => {
    return {
      time: area.weather.hourly.time[firstHourIndex + i],
      temperature: area.weather.hourly.temperature_2m[firstHourIndex + i],
      weatherCode: area.weather.hourly.weather_code[firstHourIndex + i],
      precipitationProbability: area.weather.hourly.precipitation_probability[firstHourIndex + i],
      isDay: isHourDay(
        area.weather.hourly.time[firstHourIndex + i],
        area.weather.daily.sunrise[0],
        area.weather.daily.sunset[0],
        area.weather.daily.sunrise[1],
        area.weather.daily.sunset[1],
      ),
      timezone: area.weather.timezone,
    };
  });

  return (
    <Card className={`${weatherGridStyles.gridAreaHourlyForecast} flex h-full w-full flex-col p-0`}>
      <CardHeader className="border-b border-zinc-700 p-3">Hourly Forecast</CardHeader>
      <ScrollArea className="h-full w-full" orientation="horizontal">
        <div className="flex h-30 items-center">
          {hours.map((hour) => {
            return <HourlyForecastItem key={hour.time} hour={hour} />;
          })}
        </div>
      </ScrollArea>
    </Card>
  );
}

export default HourlyForecast;
