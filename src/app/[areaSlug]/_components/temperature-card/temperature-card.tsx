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
            <h2 className="font-outfit text-foreground text-5xl font-bold lg:text-3xl">
              {Math.round(actualTemp)}&deg;
            </h2>
          </div>
          <div className="text-foreground flex gap-1 self-center">
            <span className="text-foreground text-xs">H: {Math.round(maxTemp)}&deg;</span>
            <span className="text-foreground text-xs">L: {Math.round(minTemp)}&deg;</span>
          </div>
        </div>
        <div className="text-foreground text-xs">
          Feels like{' '}
          <span className="text-foreground font-semibold">{Math.round(feelsLikeTemp)}&deg;</span>
        </div>
      </div>
    </Card>
  );
}

export default TemperatureCard;
