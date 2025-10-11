import React from 'react';
import { Droplet } from 'lucide-react';

import { CardHeader } from '@/components';

import DailyDetail from './daily-detail';

interface DailyPrecipitationProps {
  className: string;
  precipitation: number;
  precipitationProbability: number;
}

function DailyPrecipitation({
  className,
  precipitation,
  precipitationProbability,
}: DailyPrecipitationProps) {
  return (
    <DailyDetail className={`${className} border-r`}>
      <CardHeader>
        <Droplet className="h-3 w-3" />
        Precipitation
      </CardHeader>
      <div className="flex flex-grow flex-col justify-between">
        <div className="font-outfit text-foreground text-xl font-semibold">
          {precipitation}&#8243;
        </div>
        <div className="text-foreground text-xs">
          Probability:{' '}
          <span className="text-foreground font-semibold">{precipitationProbability}%</span>
        </div>
      </div>
    </DailyDetail>
  );
}

export default DailyPrecipitation;
