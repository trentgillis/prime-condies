import { weatherGridStyles } from '../weather-details-grid';

import React from 'react';

import { Card, CardHeader } from '@/components';
import { Sunset } from 'lucide-react';

interface SunriseSunsetCardProps {
  currentSunrise: number;
  currentSunset: number;
  tomorrowSunrise: number;
  tomorrowSunset: number;
  timezone: string;
}

/**
 * Returns the appropriate sunrise or sunset time as and if the value represents the sunrise or the
 * sunset. This is necessary to account for the need to render the correct value based on how how
 * the current time relates to the sunrise and sunset times on the current days weather.
 */
function getSunriseSunset(
  currentSunrise: number,
  currentSunset: number,
  tomorrowSunrise: number,
  tomorrowSunset: number,
): { sunriseTime: number; sunsetTime: number; isSunrise: boolean; nextTimeIsTomorrow: boolean } {
  const now = Math.trunc(new Date().valueOf() / 1000);

  let sunriseTime = tomorrowSunrise;
  let sunsetTime = tomorrowSunset;
  let isSunrise = true;
  let nextTimeIsTomorrow = true;

  if (now < currentSunrise) {
    sunriseTime = currentSunrise;
    sunsetTime = currentSunset;
    isSunrise = true;
    nextTimeIsTomorrow = false;
  }

  if (now >= currentSunrise && now < currentSunset) {
    sunriseTime = tomorrowSunrise;
    sunsetTime = currentSunset;
    isSunrise = false;
    nextTimeIsTomorrow = true;
  }

  return {
    sunriseTime,
    sunsetTime,
    isSunrise,
    nextTimeIsTomorrow,
  };
}

function SunriseSunsetCard({
  currentSunrise,
  currentSunset,
  tomorrowSunrise,
  tomorrowSunset,
  timezone,
}: SunriseSunsetCardProps) {
  const { sunriseTime, sunsetTime, isSunrise, nextTimeIsTomorrow } = getSunriseSunset(
    currentSunrise,
    currentSunset,
    tomorrowSunrise,
    tomorrowSunset,
  );

  return (
    <Card
      className={`${weatherGridStyles.gridAreaSunriseSunset} flex h-full w-full flex-col gap-3`}
    >
      <CardHeader>
        <Sunset className="h-3 w-3" />
        {isSunrise ? 'Sunrise' : 'Sunset'}
      </CardHeader>
      <div className="flex flex-1 flex-col justify-between">
        <div className="font-outfit text-2xl font-semibold text-zinc-50">
          {new Date((isSunrise ? sunriseTime : sunsetTime) * 1000).toLocaleString('en-US', {
            timeZone: timezone,
            hour: 'numeric',
            minute: 'numeric',
          })}
        </div>
        <div className="text-xs text-zinc-200">
          {isSunrise ? 'Sunset' : 'Sunrise'} {nextTimeIsTomorrow ? 'tomorrow ' : ''} at{' '}
          <span className="font-semibold text-zinc-50">
            {new Date((!isSunrise ? sunriseTime : sunsetTime) * 1000).toLocaleString('en-US', {
              timeZone: timezone,
              hour: 'numeric',
              minute: 'numeric',
            })}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default SunriseSunsetCard;
