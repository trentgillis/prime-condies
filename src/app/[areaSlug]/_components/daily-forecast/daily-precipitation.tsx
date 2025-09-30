import React from 'react';

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
      <CardHeader>Precipitation</CardHeader>
      <div className="flex flex-grow flex-col justify-between">
        <div className="font-outfit text-xl font-semibold text-zinc-50">{precipitation}&#8243;</div>
        <div className="text-xs text-zinc-200">
          Probability:{' '}
          <span className="font-semibold text-zinc-50">{precipitationProbability}%</span>
        </div>
      </div>
    </DailyDetail>
  );
}

export default DailyPrecipitation;
