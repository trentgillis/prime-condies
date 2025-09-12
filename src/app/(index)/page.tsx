import 'server-only';

import React from 'react';

import { sql } from '@/db';
import { AreaSelect } from '@/db/types';
import { fetchOwmWeatherData } from '@/lib/api/owm';
import { fetchAreaWeather } from '@/lib/api/weather';

import { AreasList } from './_components/area-list';

export const dynamic = 'force-dynamic';

async function getAreas() {
  const areas = await sql<AreaSelect>`
    SELECT id,
      area_slug AS "areaSlug",
      name,
      place,
      country_code AS "countryCode",
      ST_X(location::geometry) AS lng,
      ST_Y(location::geometry) AS lat,
      ST_Distance(
      location,
        ST_GeographyFromText('POINT(-104.826855 38.898881)')
      ) AS distance
    FROM areas
    ORDER BY distance LIMIT 10;
  `;

  return await Promise.all(
    areas.map(async (area) => {
      const weatherData = await fetchOwmWeatherData(area);
      const meteoData = await fetchAreaWeather(area.lat, area.lng);
      return { ...area, weatherData, weather: meteoData };
    }),
  );
}

async function Home() {
  const areas = await getAreas();

  return (
    <main className="flex flex-col gap-2 p-2 lg:gap-4 lg:p-5">
      <h1 className="text-xl text-zinc-50 lg:text-3xl">Areas</h1>
      <AreasList areas={areas} />
    </main>
  );
}

export default Home;
