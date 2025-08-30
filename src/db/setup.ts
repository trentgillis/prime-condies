import { loadEnvConfig } from '@next/env';
import { sql } from '@vercel/postgres';
import { Client } from 'pg';

import areas from './areas';
import { AREA_TABLE } from './types';

loadEnvConfig(process.cwd());

async function getDevClient() {
  const client = new Client({ connectionString: process.env.POSTGRES_URL! });
  await client.connect();

  return client;
}

async function setupAreas(client: Client) {
  console.log('🔄 Setting up areas table...');

  await client.query(`CREATE EXTENSION IF NOT EXISTS postgis;`);
  await client.query(`CREATE TABLE IF NOT EXISTS ${AREA_TABLE} (id serial PRIMARY KEY NOT NULL);`);
  await client.query(`ALTER TABLE ${AREA_TABLE} ADD COLUMN IF NOT EXISTS area_slug varchar(256) UNIQUE NOT NULL;`);
  await client.query(`ALTER TABLE ${AREA_TABLE} ADD COLUMN IF NOT EXISTS name varchar(256) NOT NULL;`);
  await client.query(`ALTER TABLE ${AREA_TABLE} ADD COLUMN IF NOT EXISTS place varchar(256) NOT NULL;`);
  await client.query(`ALTER TABLE ${AREA_TABLE} ADD COLUMN IF NOT EXISTS country_code varchar(3) NOT NULL;`);
  await client.query(`ALTER TABLE ${AREA_TABLE} ADD COLUMN IF NOT EXISTS location GEOGRAPHY(POINT, 4326) NOT NULL;`);

  console.log('✅ Areas table successfully created');
}

async function seedAreas(client: Client) {
  console.log('🌱 Seeding area data...');
  await Promise.all(
    areas.map((area) => {
      return client.query(`
        INSERT INTO ${AREA_TABLE} (area_slug, name, place, country_code, location)
        VALUES (
          '${area.areaSlug}',
          '${area.name}', 
          '${area.place}', 
          '${area.countryCode}',
          'POINT(${area.location.lng} ${area.location.lat})'
        ) ON CONFLICT (area_slug) DO NOTHING;`);
    }),
  );
  console.log('✅ Areas successfully seeded');
}

(async function setupDb() {
  const client = process.env.VERCEL_ENV === 'development' ? await getDevClient() : sql;

  try {
    await setupAreas(client as Client);
    await seedAreas(client as Client);
  } finally {
    if (process.env.VERCEL_ENV === 'development') await client.end();
  }
})();
