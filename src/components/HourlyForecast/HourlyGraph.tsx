'use client';

import styles from './HourlyGraph.module.scss';

import React from 'react';
import { Area, AreaChart, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { HourlyWeatherData } from '@/lib/types/WeatherResponse';
import WeatherIcon from '../WeatherIcon';

interface HourlyGraphProps {
  hourlyForecast: HourlyWeatherData[];
}

function HourWeatherLabel({ x, y, width, height, value }: any) {
  return (
    <g>
      <text
        width={16}
        y={y - 16}
        x={x - 4}
        fill="#f8fafc"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="0.625rem"
      >
        {Math.round(value.temp)}&deg;
      </text>
      <foreignObject x={x + 8} y={y - 24} width={16} height={16}>
        <WeatherIcon iconCode={value.icon} />
      </foreignObject>
    </g>
  );
}

function HourlyGraph({ hourlyForecast }: HourlyGraphProps) {
  const graphData = React.useMemo(() => {
    return hourlyForecast.slice(0, 12).map((hour) => {
      return { ...hour, labelData: { icon: hour.weather[0].icon, temp: hour.temp } };
    });
  }, hourlyForecast);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h2>Hourly Forecast</h2>
      </div>
      <ResponsiveContainer width="100%" height={380}>
        <AreaChart margin={{ left: -48, bottom: 0, right: 24, top: -8 }} data={graphData}>
          <XAxis
            dataKey="dt"
            interval="preserveEnd"
            tick={{ fill: '#f8fafc', fontSize: '0.625rem' }}
            tickFormatter={(value) => new Date(value * 1000).toLocaleString('en-US', { hour: 'numeric' })}
          />
          <YAxis tick={false} style={{ strokeWidth: 0 }} />
          <Area type="monotone" stroke="none" dataKey="temp" fill="#0ea5e9" opacity="0.7">
            <LabelList dataKey="labelData" position="top" content={<HourWeatherLabel />} />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HourlyGraph;
