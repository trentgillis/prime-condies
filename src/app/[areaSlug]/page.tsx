import 'server-only';
import styles from './page.module.scss';

import { sql } from '@/db';

import React from 'react';
import { AREA_TABLE, AreaSelect } from '@/db/types';
import { notFound } from 'next/navigation';

async function getArea(areaSlug: string) {
  const { rows: areas } = await sql.query<Partial<AreaSelect>>(`
    SELECT
      name
    FROM ${AREA_TABLE}
    WHERE area_slug = '${areaSlug}'
  `);

  if (areas.length === 0) {
    notFound();
  }

  return areas[0];
}

interface AreaDetailsProps {
  params: { areaSlug: string };
}

async function AreaDetails({ params }: AreaDetailsProps) {
  const area = await getArea(params.areaSlug);

  return <h1>{area.name}</h1>;
}

export default AreaDetails;
