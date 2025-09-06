import React from 'react';
import Link from 'next/link';

import { AreaResponse } from '@/lib/types/AreaResponse';

import AreaListItemName from './area-list-item-name';
import AreaListItemWeatherProps from './area-list-item-weather';

type AreaListItemProps = {
  area: AreaResponse;
};

function AreasListItem({ area }: AreaListItemProps) {
  return (
    <Link
      href={`/${area.areaSlug}`}
      className="flex flex-col gap-2 rounded border border-zinc-600 p-2 hover:bg-zinc-900 lg:p-4"
    >
      <div className="grid grid-cols-[1fr_120px]">
        <AreaListItemName area={area} />
        <AreaListItemWeatherProps area={area} />
      </div>
    </Link>
  );
}

export default AreasListItem;
