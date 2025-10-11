import { weatherGridStyles } from '../weather-details-grid';

import React from 'react';

import { Card, CardHeader } from '@/components';
import { Waves } from 'lucide-react';

interface HumidityCardProps {
  humidity: number;
  dewPoint: number;
}

function HumidityCard({ humidity, dewPoint }: HumidityCardProps) {
  return (
    <Card className={`${weatherGridStyles.gridAreaHumidity} flex h-full w-full flex-col gap-3`}>
      <CardHeader>
        <Waves className="h-3 w-3" />
        Humidity
      </CardHeader>
      <div className="flex flex-1 flex-col justify-between">
        <div className="font-outfit text-foreground text-2xl font-semibold">{humidity}%</div>
        <div className="text-foreground text-xs">
          The dew point is{' '}
          <span className="text-foreground font-semibold">{Math.round(dewPoint)}&deg;</span>
        </div>
      </div>
    </Card>
  );
}

export default HumidityCard;
