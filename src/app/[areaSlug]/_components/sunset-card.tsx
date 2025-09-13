import weatherGridStyles from './weather-details-grid.module.css';

import React from 'react';

import { Card, CardHeader } from '@/components';
import { Sunset } from 'lucide-react';

interface SunsetCardProps {
  sunset: number;
  timezone: string;
}

function SunsetCard({ sunset, timezone }: SunsetCardProps) {
  return (
    <Card
      className={`${weatherGridStyles.gridAreaSunriseSunset} flex h-full w-full flex-col gap-2`}
    >
      <CardHeader>
        <Sunset className="h-3 w-3" />
        Sunset
      </CardHeader>
      <div className="flex flex-1 flex-col justify-between">
        <div className="font-outfit text-2xl font-semibold text-zinc-50">
          {new Date(sunset * 1000).toLocaleString('en-US', {
            timeZone: timezone,
            hour: 'numeric',
            minute: 'numeric',
          })}
        </div>
      </div>
    </Card>
  );
}

export default SunsetCard;
