import { InferInsertModel } from 'drizzle-orm';
import { AreaTable } from './schema';

const areas: InferInsertModel<typeof AreaTable>[] = [
  {
    name: 'Eleven Mile Canyon',
    place: 'Colorado',
    countryCode: 'USA',
    location: { x: -105.39031100011304, y: 38.952944973361745 },
  },
];

export default areas;
