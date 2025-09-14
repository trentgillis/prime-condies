import weatherGridStyles from './weather-details-grid.module.css';

import React from 'react';
import { Thermometer } from 'lucide-react';

import { Card, CardHeader } from '@/components';

interface FeelsLikeCardProps {
  feelsLikeTemp: number;
  actualTemp: number;
}

function FeelsLikeCard({ feelsLikeTemp, actualTemp }: FeelsLikeCardProps) {
  return (
    <Card
      className={`${weatherGridStyles.gridAreaFeelsLike} hidden h-full w-full flex-col gap-2 lg:flex`}
    >
      <CardHeader>
        <Thermometer className="h-3 w-3" />
        Feels Like
      </CardHeader>
      <div className="flex flex-1 flex-col justify-between">
        <div className="font-outfit text-2xl font-semibold text-zinc-50">
          {Math.round(feelsLikeTemp)}&deg;
        </div>
        <div className="text-xs text-zinc-200">
          Actual temperature is{' '}
          <span className="font-semibold text-zinc-50">{Math.round(actualTemp)}&deg;</span>
        </div>
      </div>
    </Card>
  );
}

export default FeelsLikeCard;
