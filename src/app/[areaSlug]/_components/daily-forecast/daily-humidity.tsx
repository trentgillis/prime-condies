import React from 'react';

import DailyDetail from './daily-detail';
import { CardHeader } from '@/components';

interface DailyHumidityProps {
  className: string;
  humidity: number;
  dewPoint: number;
}

function DailyHumidity({ className, humidity, dewPoint }: DailyHumidityProps) {
  return (
    <DailyDetail className={`${className} border-r`}>
      <CardHeader>Humidity</CardHeader>
      <div className="flex flex-grow flex-col justify-between">
        <div className="font-outfit text-lg font-semibold text-zinc-50">{humidity}%</div>
        <div className="text-xs text-zinc-200">
          Dew point: <span className="font-semibold text-zinc-50">{Math.round(dewPoint)}&deg;</span>
        </div>
      </div>
    </DailyDetail>
  );
}

export default DailyHumidity;
