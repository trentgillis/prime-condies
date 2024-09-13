import { loadEnvConfig } from '@next/env';

import { sql } from '@vercel/postgres';
import areas from './areas';

loadEnvConfig(process.cwd());

async function setupAreas() {
  await sql.query('DROP TABLE IF EXISTS areas_table');
  return sql.query(`
    CREATE TABLE IF NOT EXISTS areas_table (
      id serial PRIMARY KEY NOT NULL,
      name varchar(256) NOT NULL,
      place varchar(256) NOT NULL,
      country_code varchar(3) NOT NULL
    );
`);
}

async function seedAreas() {
  const area = areas[0];
  await sql.query(`
      INSERT INTO areas_table (name, place, country_code)
      VALUES ('${area.name}', '${area.place}', '${area.countryCode}')
      ON CONFLICT (id) DO NOTHING;
    `);
}

(async function setupDb() {
  await setupAreas();
  await seedAreas();
})();
