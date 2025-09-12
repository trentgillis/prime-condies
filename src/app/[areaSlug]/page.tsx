import 'server-only';

import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { sql } from '@/db';
import { AreaSelect } from '@/db/types';
import { fetchAreaWeather } from '@/lib/api/weather';

import WeatherDetailsGrid from './_components/weather-details-grid';
import PrecipitationCard from './_components/precipitation-card';
import HumidityCard from './_components/humidity-card';

export const revalidate = 3600;

export async function generateMetadata(props: {
  params: Promise<{ areaSlug: string }>;
}): Promise<Metadata> {
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

  const weatherData = await fetchAreaWeather(areas[0].lat, areas[0].lng);
  return { ...areas[0], weather: weatherData };
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
        <h1 className="text-2xl tracking-wider text-zinc-50 lg:tracking-widest">{area.name}</h1>
        <span className="font-outfit order-first text-sm tracking-wide text-zinc-200 lg:text-base">
          {area.place}, {area.countryCode}
        </span>
      </div>
      <WeatherDetailsGrid>
        <PrecipitationCard
          precipitation={area.weather.current.precipitation}
          precipitationProbability={area.weather.daily.precipitation_probability_max[0]}
        />
        <HumidityCard
          humidity={area.weather.daily.relative_humidity_2m_mean[0]}
          dewPoint={area.weather.daily.dew_point_2m_max[0]}
        />
      </WeatherDetailsGrid>
    </main>
  );
}

export default AreaDetails;
