import 'server-only';

import React from 'react';
import { notFound } from 'next/navigation';

import { sql } from '@/db';
import { AreaSelect } from '@/db/types';
import CurrentWeatherDetails from '@/components/CurrentWeather';
import HourlyForecast from '@/components/HourlyForecast';
import DailyForecast from '@/components/DailyForecast';
import { fetchOwmWeatherData } from '@/lib/api/owm';
import { Metadata } from 'next';

export const revalidate = 3600;

export async function generateMetadata(props: { params: Promise<{ areaSlug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const area = await getArea(params.areaSlug);

  return {
    title: `${area.name} - PrimeCondies`,
  };
}

const getArea = React.cache(async function getArea(areaSlug: string) {
  const areas = await sql<AreaSelect>`
    SELECT id,
           area_slug                AS "areaSlug",
           name,
           place,
           country_code             AS "countryCode",
           ST_X(location::geometry) AS lng,
           ST_Y(location::geometry) AS lat
    FROM areas
    WHERE area_slug = ${areaSlug}
  `;

  if (areas.length === 0) {
    notFound();
  }

  const weatherData = await fetchOwmWeatherData(areas[0]);
  return { ...areas[0], weatherData: weatherData };
});

interface AreaDetailsProps {
  params: Promise<{ areaSlug: string }>;
}

async function AreaDetails(props: AreaDetailsProps) {
  const params = await props.params;
  const area = await getArea(params.areaSlug);

  return (
    <main className="flex h-full flex-col gap-4 py-6 lg:gap-6 lg:py-10">
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-2xl tracking-wider lg:tracking-widest">{area.name}</h1>
        <span className="font-outfit order-first text-sm tracking-wide lg:text-base">
          {area.place}, {area.countryCode}
        </span>
      </div>
      <div className="grid grid-cols-1 grid-rows-[repeat(3,min-content)] gap-6 lg:flex-grow lg:grid-cols-[35%_65%] lg:grid-rows-[repeat(2,min-content)] lg:gap-x-6 lg:gap-y-10">
        <CurrentWeatherDetails
          areaTimezone={area.weatherData.timezone}
          todayWeather={area.weatherData.daily[0]}
          currentForecast={area.weatherData.current}
        />
        <HourlyForecast areaTimezone={area.weatherData.timezone} hourlyForecast={area.weatherData.hourly} />
        <DailyForecast areaTimezone={area.weatherData.timezone} dailyForecast={area.weatherData.daily} />
      </div>
    </main>
  );
}

export default AreaDetails;
