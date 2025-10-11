import { weatherGridStyles } from '../weather-details-grid';

import React from 'react';

import { Card, CardHeader } from '@/components';
import { Wind } from 'lucide-react';

interface WindCardProps {
  windSpeed: number;
  windGusts: number;
  windDirection: number;
}

function WindCard({ windSpeed, windGusts, windDirection }: WindCardProps) {
  return (
    <Card className={`${weatherGridStyles.gridAreaWind} flex h-full w-full flex-col gap-3`}>
      <CardHeader>
        <Wind className="h-3 w-3" />
        Wind
      </CardHeader>
      <div className="flex flex-1 flex-col justify-between">
        <div className="font-outfit text-foreground text-2xl font-semibold">
          {Math.round(windSpeed)}mph
        </div>
        <div>
          <div className="text-foreground text-xs">
            Gust speed:{' '}
            <span className="text-foreground font-semibold">{Math.round(windGusts)}mph</span>
          </div>
          <div className="text-foreground text-xs">
            Wind direction:{' '}
            <span className="text-foreground font-semibold">{windDirection}&deg;</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default WindCard;
