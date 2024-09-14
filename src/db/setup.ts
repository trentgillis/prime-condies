import { loadEnvConfig } from '@next/env';

import { sql } from '@vercel/postgres';
import areas from './areas';

loadEnvConfig(process.cwd());

async function setupAreas() {
  console.log('🔄 Setting up areas table...');
  await sql.query('DROP TABLE IF EXISTS areas');
  await sql.query(`
    CREATE TABLE IF NOT EXISTS areas (
      id serial PRIMARY KEY NOT NULL,
      name varchar(256) NOT NULL,
      place varchar(256) NOT NULL,
      country_code varchar(3) NOT NULL
    );
`);
  console.log('✅ Areas table successfully created');
}

async function seedAreas() {
  console.log('🌱 Seeding area data...');
  await Promise.all(
    areas.map((area) => {
      return sql.query(`
      INSERT INTO areas (name, place, country_code)
      VALUES ('${area.name}', '${area.place}', '${area.countryCode}')
      ON CONFLICT (id) DO NOTHING;
    `);
    }),
  );
  console.log('✅ Areas successfully seeded');
}

(async function setupDb() {
  await setupAreas();
  await seedAreas();
})();
