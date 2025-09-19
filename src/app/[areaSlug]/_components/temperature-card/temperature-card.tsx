import { weatherGridStyles } from '../weather-details-grid';

import React from 'react';
import { Thermometer } from 'lucide-react';

import { Card, CardHeader, WeatherIcon } from '@/components';

interface TemperatureCardProps {
  actualTemp: number;
  maxTemp: number;
  minTemp: number;
  feelsLikeTemp: number;
  weatherCode: number;
  isDay: boolean;
}

function TemperatureCard({
  actualTemp,
  maxTemp,
  minTemp,
  feelsLikeTemp,
  weatherCode,
  isDay,
}: TemperatureCardProps) {
  return (
    <Card
      className={`${weatherGridStyles.gridAreaFeelsLike} hidden h-full w-full flex-col gap-3 lg:flex`}
    >
      <CardHeader>
        <Thermometer className="h-3 w-3" />
        Temperature
      </CardHeader>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex w-fit flex-col">
          <div className="flex gap-2">
            <WeatherIcon isDay={isDay} size={40} iconCode={weatherCode} />
            <h2 className="font-outfit text-5xl font-bold text-zinc-50 lg:text-3xl">
              {Math.round(actualTemp)}&deg;
            </h2>
          </div>
          <div className="flex gap-1 self-center text-zinc-200">
            <span className="text-xs text-zinc-200">H: {Math.round(maxTemp)}&deg;</span>
            <span className="text-xs text-zinc-200">L: {Math.round(minTemp)}&deg;</span>
          </div>
        </div>
        <div className="text-xs text-zinc-200">
          Feels like{' '}
          <span className="font-semibold text-zinc-50">{Math.round(feelsLikeTemp)}&deg;</span>
        </div>
      </div>
    </Card>
  );
}

export default TemperatureCard;
