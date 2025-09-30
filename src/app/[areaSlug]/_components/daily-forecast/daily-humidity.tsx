import React from 'react';
import { Waves } from 'lucide-react';

import { CardHeader } from '@/components';

import DailyDetail from './daily-detail';

interface DailyHumidityProps {
  className: string;
  humidity: number;
  dewPoint: number;
}

function DailyHumidity({ className, humidity, dewPoint }: DailyHumidityProps) {
  return (
    <DailyDetail className={`${className} border-r`}>
      <CardHeader>
        <Waves className="h-3 w-3" />
        Humidity
      </CardHeader>
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
