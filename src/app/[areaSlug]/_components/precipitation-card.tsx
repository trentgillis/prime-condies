import weatherGridStyles from './weather-details-grid.module.css';

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
      className={`${weatherGridStyles.gridAreaPrecipitation} flex h-full w-full flex-col gap-2`}
    >
      <CardHeader>
        <Droplet className="h-3 w-3" />
        Precipitation
      </CardHeader>
      <div className="flex flex-1 flex-col justify-between">
        <div className="font-outfit text-2xl font-semibold text-zinc-50">
          {precipitation}&#8243;
        </div>
        <div className="text-xs text-zinc-200">
          Precipitation probability is{' '}
          <span className="font-semibold text-zinc-50">{precipitationProbability}%</span>
        </div>
      </div>
    </Card>
  );
}

export default PrecipitationCard;
