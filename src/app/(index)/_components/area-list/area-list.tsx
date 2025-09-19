import React from 'react';

import { Area } from '@/lib/types';

import AreasListItem from './area-list-item';

type AreasListProps = {
  areas: Area[];
};

function AreasList({ areas }: AreasListProps) {
  return (
    <div className="flex flex-col gap-4">
      {areas.map((area) => {
        return <AreasListItem key={area.id} area={area} />;
      })}
    </div>
  );
}

export default AreasList;
