import { loadEnvConfig } from '@next/env';

import { sql } from './db';
import areas from './areas';

loadEnvConfig(process.cwd());

async function setupAreas() {
  console.log('🔄 Setting up areas table...');

  // Drop the table to ensure area updates are made correctly and duplicate is not inserted
  await sql`DROP TABLE IF EXISTS areas`;

  await sql`CREATE EXTENSION IF NOT EXISTS postgis`;
  await sql`CREATE TABLE IF NOT EXISTS areas
            (
              id
                serial
                PRIMARY
                  KEY
                NOT
                  NULL
            )`;
  await sql`ALTER TABLE areas
    ADD COLUMN IF NOT EXISTS area_slug varchar(256) UNIQUE NOT NULL default ''`;
  await sql`ALTER TABLE areas
    ADD COLUMN IF NOT EXISTS name varchar(256) NOT NULL default ''`;
  await sql`ALTER TABLE areas
    ADD COLUMN IF NOT EXISTS place varchar(256) NOT NULL default ''`;
  await sql`ALTER TABLE areas
    ADD COLUMN IF NOT EXISTS country_code varchar(3) NOT NULL default ''`;
  await sql`ALTER TABLE areas
    ADD COLUMN IF NOT EXISTS location GEOGRAPHY(POINT, 4326) NOT NULL default ST_Point(0, 0)`;

  console.log('✅ Areas table successfully created');
}

async function seedAreas() {
  console.log('🌱 Seeding area data...');

  await Promise.all(
    areas.map((area) => {
      return sql`
        INSERT INTO areas (area_slug, name, place, country_code, location)
        VALUES (${area.areaSlug},
                ${area.name},
                ${area.place},
                ${area.countryCode},
                ST_Point(${area.location.lng}, ${area.location.lat}))
        ON CONFLICT (area_slug) DO NOTHING`;
    }),
  );

  console.log('✅ Areas successfully seeded');
}

(async function setupDb() {
  try {
    await setupAreas();
    await seedAreas();
  } catch (error: unknown) {
    console.error(error);
    process.exit(1);
  }
})();
