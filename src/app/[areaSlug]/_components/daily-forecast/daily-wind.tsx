import React from 'react';
import DailyDetail from './daily-detail';
import { CardHeader } from '@/components';
import { Wind } from 'lucide-react';

interface DailyWindProps {
  className: string;
  windSpeed: number;
  gustSpeed: number;
}

function DailyWind({ className, windSpeed, gustSpeed }: DailyWindProps) {
  return (
    <DailyDetail className={`${className} border-r`}>
      <CardHeader>
        <Wind className="h-3 w-3" />
        Wind
      </CardHeader>
      <div className="flex flex-grow flex-col justify-between">
        <div className="font-outfit text-lg font-semibold text-zinc-50">
          {Math.round(windSpeed)}mph
        </div>
        <div>
          <div className="text-xs text-zinc-200">
            Gust speed:{' '}
            <span className="font-semibold text-zinc-50">{Math.round(gustSpeed)}mph</span>
          </div>
        </div>
      </div>
    </DailyDetail>
  );
}

export default DailyWind;
