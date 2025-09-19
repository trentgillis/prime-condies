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
    <Card className={`${weatherGridStyles.gridAreaWind} flex h-full w-full flex-col gap-2`}>
      <CardHeader>
        <Wind className="h-3 w-3" />
        Wind
      </CardHeader>
      <div className="flex flex-1 flex-col justify-between">
        <div className="font-outfit text-2xl font-semibold text-zinc-50">
          {Math.round(windSpeed)}mph
        </div>
        <div>
          <div className="text-xs text-zinc-200">
            Gust speed:{' '}
            <span className="font-semibold text-zinc-50">{Math.round(windGusts)}mph</span>
          </div>
          <div className="text-xs text-zinc-200">
            Wind direction: <span className="font-semibold text-zinc-50">{windDirection}&deg;</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default WindCard;
