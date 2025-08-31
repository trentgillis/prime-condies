import 'server-only';
import styles from './page.module.scss';

import React from 'react';

import { sql } from '@/db';
import AreasList from '@/components/AreasList';
import { fetchOwmWeatherData } from '@/lib/api/owm';
import { AreaSelect } from '@/db/types';

export const dynamic = 'force-dynamic';

async function getAreas() {
  const areas = await sql<AreaSelect>`
    SELECT id,
           area_slug                AS "areaSlug",
           name,
           place,
           country_code             AS "countryCode",
           ST_X(location::geometry) AS lng,
           ST_Y(location::geometry) AS lat,
           ST_Distance(
             location,
             ST_GeographyFromText('POINT(-104.826855 38.898881)')
           )                        AS distance
    FROM areas
    ORDER BY distance LIMIT 10;
  `;

  return await Promise.all(
    areas.map(async (area) => {
      const weatherData = await fetchOwmWeatherData(area);
      return { ...area, weatherData: weatherData };
    }),
  );
}

async function Home() {
  const areas = await getAreas();

  return (
    <main className={styles.main}>
      <h1>Areas</h1>
      <AreasList areas={areas} />
    </main>
  );
}

export default Home;
