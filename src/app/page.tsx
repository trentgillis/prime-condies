import 'server-only';
import styles from './page.module.scss';

import React from 'react';

import { db } from '@/db';
import { AreaTable } from '@/db/schema';
import Title from '@/components/Title';
import Text from '@/components/Text';

export default async function Home() {
  const areas = await db.select().from(AreaTable);

  return (
    <main className={styles.main}>
      <Title variant="h1">Areas</Title>
      {areas.map(({ id, name }) => (
        <>
          <Text key={id}>{name}</Text>
        </>
      ))}
    </main>
  );
}
