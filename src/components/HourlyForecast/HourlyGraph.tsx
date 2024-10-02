'use client';

import styles from './HourlyGraph.module.scss';

import React from 'react';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { HourlyWeatherData } from '@/lib/types/WeatherResponse';

interface HourlyGraphProps {
  hourlyForecast: HourlyWeatherData[];
}

function HourlyGraph({ hourlyForecast }: HourlyGraphProps) {
  return (
    <div className={styles.wrapper}>
      <h1>HourlyGraph</h1>
      <ResponsiveContainer width="100%" height={380}>
        <AreaChart data={hourlyForecast}>
          <XAxis dataKey="dt" />
          <YAxis tick={{ fill: '#fff', height: 2, fontSize: 12 }} />
          <Area dataKey="temp" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HourlyGraph;
