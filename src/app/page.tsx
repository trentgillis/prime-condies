import 'server-only';
import styles from './page.module.scss';

import React from 'react';

import { sql } from '@/db';
import { AreaSelect, AREA_TABLE } from '@/db/types';
import Title from '@/components/Title';
import Text from '@/components/Text';
import WeatherIcon from '@/components/WeatherIcon/WeatherIcon';
import { fetchOwmWeatherData } from '@/lib/api/owm';

//const sqlPoint = sql`ST_SetSRID(ST_MakePoint(-104.826855, 38.898881), 4326)`;

export const dynamic = 'force-dynamic';

async function getAreas() {
  const { rows: areas } = await sql.query<AreaSelect>(`
    SELECT
      id,
      area_slug AS "areaSlug",
      name,
      place,
      country_code AS "countryCode",
      ST_X(location::geometry) AS lng,
      ST_Y(location::geometry) AS lat
    FROM ${AREA_TABLE}
    LIMIT 10;
  `);

  return await Promise.all(
    areas.map(async (area) => {
      const weatherData: any = await fetchOwmWeatherData(area);
      return { ...area, weatherData: weatherData };
    }),
  );
}

export default async function Home() {
  const areas = await getAreas();

  return (
    <main className={styles.main}>
      <Title variant="h1">Areas</Title>
      <WeatherIcon iconCode="01d" size={60} />
      {areas.map((area) => (
        <Text key={area.id}>{area.name}</Text>
      ))}
    </main>
  );
}
