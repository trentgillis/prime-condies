import { PrismaClient } from '@prisma/client';

import { areas } from './areas';

const prisma = new PrismaClient();

async function seed() {
  console.log('Seeding Mongo - Development 🌱\n');

  // Create index for location GeoJSON field
  await prisma.$runCommandRaw({
    createIndexes: 'area',
    indexes: [
      {
        key: {
          location: '2dsphere',
        },
        name: 'location_2dsphere',
      },
    ],
  });

  await prisma.area.deleteMany();
  for (const area of areas) {
    const a = await prisma.area.create({
      data: area,
    });

    console.log(`[SEED]: Created area ${a.name}`);
  }

  console.log('\n[SEED]: Seeding complete ✅');
}

seed()
  .catch((e) => {
    console.log(`[SEED]: error - ${e}`);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
