'use client';

import React from 'react';
import { Area, AreaChart, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { HourlyWeatherData } from '@/lib/types/WeatherResponse';

import { WeatherIcon } from '../weather-icon';

interface HourlyGraphProps {
  areaTimezone: string;
  hourlyForecast: HourlyWeatherData[];
}

// eslint-disable-next-line
function HourWeatherLabel({ x, y, value }: any) {
  return (
    <g>
      <text
        width={16}
        y={y - 16}
        x={x}
        fill="#f8fafc"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="0.625rem"
        fontFamily="var(--font-outfit)"
        fontWeight={500}
      >
        {Math.round(value.temp)}&deg;
      </text>
      <foreignObject x={x - 8} y={y - 44} width={16} height={16}>
        <WeatherIcon isDay iconCode={value.icon} />
      </foreignObject>
    </g>
  );
}

function HourlyGraph({ areaTimezone, hourlyForecast }: HourlyGraphProps) {
  const graphData = React.useMemo(() => {
    return hourlyForecast.slice(0, 13).map((hour) => {
      return { ...hour, labelData: { icon: hour.weather[0].icon, temp: hour.temp } };
    });
  }, [hourlyForecast]);

  return (
    <div className="hidden h-4/5 lg:block">
      <ResponsiveContainer>
        <AreaChart margin={{ left: -48, bottom: 0, right: 24, top: 40 }} data={graphData}>
          <defs>
            <linearGradient id="tempColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" />
              <stop offset="95%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="dt"
            interval="preserveEnd"
            tick={{ fill: '#f8fafc', fontSize: '0.625rem' }}
            tickFormatter={(value) =>
              new Date(value * 1000).toLocaleString('en-US', {
                timeZone: areaTimezone,
                hour: 'numeric',
              })
            }
          />
          <YAxis tick={false} style={{ strokeWidth: 0 }} />
          <Area
            type="monotone"
            stroke="none"
            dataKey="temp"
            fill="url(#tempColor)"
            opacity="0.7"
            animationDuration={500}
          >
            <LabelList dataKey="labelData" position="top" content={<HourWeatherLabel />} />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HourlyGraph;
