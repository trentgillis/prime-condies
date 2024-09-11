import { db } from './db';
import areas from './areas';
import { AreaTable } from './schema';

async function seed() {
  await db.delete(AreaTable);

  for (const area of areas) {
    await db.insert(AreaTable).values(area);
  }
}

seed();
