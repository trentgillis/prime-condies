import weatherGridStyles from './weather-details-grid.module.css';

import React from 'react';

import { Card, CardHeader } from '@/components';
import { Waves } from 'lucide-react';

interface HumidityCardProps {
  humidity: number;
  dewPoint: number;
}

function HumidityCard({ humidity, dewPoint }: HumidityCardProps) {
  return (
    <Card className={`${weatherGridStyles.gridAreaHumidity} flex h-full w-full flex-col gap-2`}>
      <CardHeader>
        <Waves className="h-3 w-3" />
        Humidity
      </CardHeader>
      <div className="flex flex-1 flex-col justify-between">
        <div className="font-outfit text-2xl font-semibold text-zinc-50">{humidity}%</div>
        <div className="text-xs text-zinc-200">
          The dew point is{' '}
          <span className="font-semibold text-zinc-50">{Math.round(dewPoint)}&deg;</span>
        </div>
      </div>
    </Card>
  );
}

export default HumidityCard;
