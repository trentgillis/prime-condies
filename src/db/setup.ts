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

async function setupAreas(client: any) {
  console.log('🔄 Setting up areas table...');
  await client.query(`DROP TABLE IF EXISTS ${AREA_TABLE};`);
  await client.query(`
    CREATE TABLE IF NOT EXISTS ${AREA_TABLE} (
      id serial PRIMARY KEY NOT NULL,
      name varchar(256) NOT NULL,
      place varchar(256) NOT NULL,
      country_code varchar(3) NOT NULL
    );
`);
  console.log('✅ Areas table successfully created');
}

async function seedAreas(client: any) {
  console.log('🌱 Seeding area data...');
  await Promise.all(
    areas.map((area) => {
      return client.query(`
      INSERT INTO ${AREA_TABLE} (name, place, country_code)
      VALUES ('${area.name}', '${area.place}', '${area.countryCode}');
    `);
    }),
  );
  console.log('✅ Areas successfully seeded');
}

(async function setupDb() {
  const client = process.env.VERCEL_ENV === 'development' ? await getDevClient() : sql;

  try {
    await setupAreas(client);
    await seedAreas(client);
  } finally {
    if (process.env.VERCEL_ENV === 'development') await client.end();
  }
})();
