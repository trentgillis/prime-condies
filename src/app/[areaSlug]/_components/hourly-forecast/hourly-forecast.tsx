'use client';

import weatherGridStyles from '../weather-details-grid.module.css';

import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

import { Card, CardHeader } from '@/components';

function HourlyForecast() {
  return (
    <Card
      className={`${weatherGridStyles.gridAreaHourlyForecast} flex h-full w-full flex-col gap-2 p-0`}
    >
      <CardHeader className="border-b border-zinc-700 p-3">Hourly Forecast</CardHeader>
      <ScrollArea.Root className="relataive h-full">
        <ScrollArea.Viewport className="h-full w-full">
          <div className="flex">
            {Array.from({ length: 50 }).map((_, i) => (
              <div className="w-12" key={i}>
                {i}
              </div>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.ScrollAreaScrollbar
          className="flex h-2.5 touch-none flex-col border-t border-t-transparent p-[2px] transition-colors select-none"
          orientation="horizontal"
        >
          <ScrollArea.ScrollAreaThumb className="relative flex-1 rounded-full bg-zinc-700" />
        </ScrollArea.ScrollAreaScrollbar>
      </ScrollArea.Root>
    </Card>
  );
}

export default HourlyForecast;
