import { InferInsertModel } from 'drizzle-orm';

import { AreaTable } from './schema';

const areas: InferInsertModel<typeof AreaTable>[] = [
  {
    id: 1,
    name: 'Eleven Mile Canyon',
    place: 'Colorado',
    countryCode: 'USA',
    location: { x: -105.39031100011304, y: 38.952944973361745 },
  },
  {
    id: 2,
    name: 'Boulder Canyon',
    place: 'Colorado',
    countryCode: 'USA',
    location: { x: -105.45476358906625, y: 39.97983493878136 },
  },
  {
    id: 3,
    name: 'Newlin Creek',
    place: 'Colorado',
    countryCode: 'USA',
    location: { x: -105.19522954244155, y: 38.25898012121234 },
  },
  {
    id: 4,
    name: 'Guanella Pass',
    place: 'Colorado',
    countryCode: 'USA',
    location: { x: -105.709348, y: 39.635572 },
  },
];

export default areas;
