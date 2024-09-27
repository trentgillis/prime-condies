import 'server-only';
import styles from './page.module.scss';

import { sql } from '@/db';

import React from 'react';
import { notFound } from 'next/navigation';

import { AREA_TABLE, AreaSelect } from '@/db/types';
import CurrentWeatherDetails from '@/components/CurrentWeatherDetails';
import HourlyForecast from '@/components/HourlyForecast';
import DailyForecast from '@/components/DailyForecast';

export const revalidate = 3600;

async function getArea(areaSlug: string) {
  const { rows: areas } = await sql.query<Partial<AreaSelect>>(`
    SELECT
      name,
      place,
      country_code AS "countryCode"
    FROM ${AREA_TABLE}
    WHERE area_slug = '${areaSlug}'
  `);

  if (areas.length === 0) {
    notFound();
  }

  return areas[0];
}

interface AreaDetailsProps {
  params: { areaSlug: string };
}

async function AreaDetails({ params }: AreaDetailsProps) {
  const area = await getArea(params.areaSlug);

  return (
    <main className={styles.main}>
      <div className={styles.areaHeaderWrapper}>
        <h1>{area.name}</h1>
        <span className={styles.areaLocation}>
          {area.place}, {area.countryCode}
        </span>
      </div>
      <div className={styles.contentWrapper}>
        <CurrentWeatherDetails />
        <HourlyForecast />
        <DailyForecast />
      </div>
    </main>
  );
}

export default AreaDetails;
