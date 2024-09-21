import styles from './AreasList.module.scss';

import React from 'react';

import { AreaResponse } from '@/lib/types/AreaResponse';

import AreasListItem from './AreasListItem';

type AreasListProps = {
  areas: AreaResponse[];
};

function AreasList({ areas }: AreasListProps) {
  return (
    <div className={styles.wrapper}>
      {areas.map((area) => {
        return <AreasListItem key={area.id} area={area} />;
      })}
    </div>
  );
}

export default AreasList;
