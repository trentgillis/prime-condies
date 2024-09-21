import styles from './AreasListItem.module.scss';

import React from 'react';

import Text from '@/components/Text';
import { AreaResponse } from '@/lib/types/AreaResponse';

type AreaListItemProps = {
  area: AreaResponse;
};

function AreasListItem({ area }: AreaListItemProps) {
  return (
    <div className={styles.wrapper}>
      <Text>{area.name}</Text>
    </div>
  );
}

export default AreasListItem;
