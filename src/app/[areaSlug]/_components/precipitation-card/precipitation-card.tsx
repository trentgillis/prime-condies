import { weatherGridStyles } from '../weather-details-grid';

import React from 'react';

import { Card, CardHeader } from '@/components';
import { Droplet } from 'lucide-react';

interface PrecipitationCardProps {
  precipitation: number;
  precipitationProbability: number;
}

function PrecipitationCard({ precipitation, precipitationProbability }: PrecipitationCardProps) {
  return (
    <Card
      className={`${weatherGridStyles.gridAreaPrecipitation} flex h-full w-full flex-col gap-3`}
    >
      <CardHeader>
        <Droplet className="h-3 w-3" />
        Precipitation
      </CardHeader>
      <div className="flex flex-1 flex-col justify-between">
        <div className="font-outfit text-foreground text-2xl font-semibold">
          {precipitation}&#8243;
        </div>
        <div className="text-foreground text-xs">
          Precipitation probability is{' '}
          <span className="text-foreground font-semibold">{precipitationProbability}%</span>
        </div>
      </div>
    </Card>
  );
}

export default PrecipitationCard;
