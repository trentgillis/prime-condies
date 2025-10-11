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
        <div className="font-outfit text-foreground text-lg font-semibold">
          {Math.round(windSpeed)}mph
        </div>
        <div>
          <div className="text-foreground text-xs">
            Gust speed:{' '}
            <span className="text-foreground font-semibold">{Math.round(gustSpeed)}mph</span>
          </div>
        </div>
      </div>
    </DailyDetail>
  );
}

export default DailyWind;
