import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const AreaTable = pgTable("areas_table", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
});
