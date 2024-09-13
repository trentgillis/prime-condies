import 'server-only';
import styles from './page.module.scss';

import React from 'react';
import { sql } from 'drizzle-orm';

import { db } from '@/db';
import { AreaTable } from '@/db/schema';
import Title from '@/components/Title';
import Text from '@/components/Text';
import WeatherIcon from '@/components/WeatherIcon/WeatherIcon';

const sqlPoint = sql`ST_SetSRID(ST_MakePoint(-104.826855, 38.898881), 4326)`;

export default async function Home() {
  const areas = await db
    .select()
    .from(AreaTable)
    .orderBy(sql`${AreaTable.location} <-> ${sqlPoint}`);

  return (
    <main className={styles.main}>
      <Title variant="h1">Areas</Title>
      <WeatherIcon iconCode="01d" size={60} />
      {areas.map(({ id, name }) => (
        <Text key={id}>{name}</Text>
      ))}
    </main>
  );
}
