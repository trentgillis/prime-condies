import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextHandler } from 'next-connect';

import mongoose from 'mongoose';

import AreaModel from '@/lib/api/models/AreaSchema';

const mongodbUri = process.env.MONGODB_URI || '';

/**
 * Connects to the MongoDB database if no connection has been established. The connection process is skipped if a connection has already been established
 */
async function database(req: NextApiRequest, res: NextApiResponse, next: NextHandler) {
  // If connection to database has already been established, don't establish a new connection
  if (mongoose.connection.readyState) return next();

  await mongoose.connect(mongodbUri);

  // TODO: Temporary test data. Will need to setup db initialization script eventually
  await mongoose.connection.dropDatabase();
  await AreaModel.create({
    areaId: 'boulder-canyon',
    name: 'Boulder Canyon',
    place: 'Colorado',
    country: 'USA',
    location: {
      type: 'Point',
      coordinates: [-105.45477, 39.979832],
    },
  });
  await AreaModel.create({
    areaId: 'newlin-creek',
    name: 'Newlin Creek',
    place: 'Colorado',
    country: 'USA',
    location: {
      type: 'Point',
      coordinates: [-105.188846, 38.266731],
    },
  });
  await AreaModel.create({
    areaId: 'clear-creek-canyon',
    name: 'Clear Creek Canyon',
    place: 'Colorado',
    country: 'USA',
    location: {
      type: 'Point',
      coordinates: [-105.316235, 39.736958],
    },
  });

  return next();
}
export default database;
