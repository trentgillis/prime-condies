import React from 'react';
import { Sunrise } from 'lucide-react';

import { CardHeader } from '@/components';

import DailyDetail from './daily-detail';

interface DailySunriseSunsetProps {
  className: string;
  sunrise: number;
  sunset: number;
  timezone: string;
}

function DailySunriseSunset({ className, sunrise, sunset, timezone }: DailySunriseSunsetProps) {
  return (
    <DailyDetail className={`${className} border-r`}>
      <CardHeader>
        <Sunrise className="h-3 w-3" />
        Sunrise
      </CardHeader>
      <div className="flex flex-1 flex-col justify-between">
        <div className="font-outfit text-lg font-semibold text-zinc-50">
          {new Date(sunrise * 1000).toLocaleString('en-US', {
            timeZone: timezone,
            hour: 'numeric',
            minute: 'numeric',
          })}
        </div>
        <div className="text-xs text-zinc-200">
          Sunset:{' '}
          <span className="font-semibold text-zinc-50">
            {new Date(sunset * 1000).toLocaleString('en-US', {
              timeZone: timezone,
              hour: 'numeric',
              minute: 'numeric',
            })}
          </span>
        </div>
      </div>
    </DailyDetail>
  );
}

export default DailySunriseSunset;
