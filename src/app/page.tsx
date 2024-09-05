import "server-only";

import { db } from "@/db";
import styles from "./page.module.scss";

import React from "react";
import { AreaTable } from "@/db/schema";

export default async function Home() {
  const areas = await db.select().from(AreaTable);

  return (
    <main className={styles.main}>
      {areas.map((area) => (
        <p>{area.name}</p>
      ))}
    </main>
  );
}
