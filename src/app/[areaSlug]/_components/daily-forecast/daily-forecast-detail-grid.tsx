import styles from './daily-forecast-detail-grid.module.css';

import React from 'react';

import { Card, CardHeader } from '@/components';

import DailyDetail from './daily-detail';

function DailyForecastDetailGrid() {
  return (
    <div className={`${styles.dailyDetailGrid} flex-grow`}>
      <DailyDetail className={`${styles.dailyDetailGridAreaPrecipitation} border-r`}>
        <CardHeader>Precipitation</CardHeader>
        <div className="flex flex-grow flex-col justify-between">
          <div className="font-outfit text-xl font-semibold text-zinc-50">{0}&#8243;</div>
          <div className="text-xs text-zinc-200">
            Probability: <span className="font-semibold text-zinc-50">{0}%</span>
          </div>
        </div>
      </DailyDetail>
      <DailyDetail className={`${styles.dailyDetailGridAreaHumidity} border-r`}>
        <CardHeader>Humidity</CardHeader>
        <div className="flex flex-grow flex-col justify-between">
          <div className="font-outfit text-lg font-semibold text-zinc-50">{0}%</div>
          <div className="text-xs text-zinc-200">
            Dew point: <span className="font-semibold text-zinc-50">{Math.round(0)}&deg;</span>
          </div>
        </div>
      </DailyDetail>
      <DailyDetail className={`${styles.dailyDetailGridAreaWind} border-r`}>
        <CardHeader>Wind</CardHeader>
        <div className="flex flex-grow flex-col justify-between">
          <div className="font-outfit text-lg font-semibold text-zinc-50">{Math.round(0)}mph</div>
          <div>
            <div className="text-xs text-zinc-200">
              Gust speed: <span className="font-semibold text-zinc-50">{Math.round(0)}mph</span>
            </div>
          </div>
        </div>
      </DailyDetail>
      <DailyDetail className={`${styles.dailyDetailGridAreaSunriseSunset} border-r`}>
        <CardHeader>Sunrise</CardHeader>
        <div className="flex flex-grow flex-col justify-between">
          <div className="font-outfit text-lg font-semibold text-zinc-50">
            {new Date(Date.now()).toLocaleString('en-US', {
              timeZone: 'MST',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </div>
          <div className="text-xs text-zinc-200">
            {true ? 'Sunset' : 'Sunrise'} {true ? 'tomorrow ' : ''} at{' '}
            <span className="font-semibold text-zinc-50">
              {new Date(Date.now()).toLocaleString('en-US', {
                timeZone: 'MST',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </span>
          </div>
        </div>
      </DailyDetail>
      <Card
        className={`${styles.dailyDetailGridAreaHourly} rounded-none border-0 border-t border-zinc-700`}
      >
        Hourly
      </Card>
    </div>
  );
}

export default DailyForecastDetailGrid;
