import 'server-only';
import styles from './page.module.scss';

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
    <main className={styles.main}>
      <div className={styles.areaHeaderWrapper}>
        <h1>{area.name}</h1>
        <span className={styles.areaLocation}>
          {area.place}, {area.countryCode}
        </span>
      </div>
      <div className={styles.contentWrapper}>
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
