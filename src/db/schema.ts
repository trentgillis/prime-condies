import { geometry, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const AreaTable = pgTable('areas_table', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  countryCode: varchar('country', { length: 3 }).notNull(),
  place: varchar('place', { length: 256 }).notNull(),
  location: geometry('location', { mode: 'xy', srid: 4326 }).notNull(),
});
