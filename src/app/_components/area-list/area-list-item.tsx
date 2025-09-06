import React from 'react';
import Link from 'next/link';

import { AreaResponse } from '@/lib/types/AreaResponse';

import AreaListItemName from './area-list-item-name';
import AreaListItemWeatherProps from './area-list-item-weather';
import AreaListItemWeatherDetail from './area-list-item-weather-detail';

type AreaListItemProps = {
  area: AreaResponse;
};

function AreasListItem({ area }: AreaListItemProps) {
  return (
    <Link
      href={`/${area.areaSlug}`}
      className="flex flex-col gap-2 rounded border border-zinc-700 p-2 hover:bg-zinc-900 lg:p-3"
    >
      <div className="grid grid-cols-[1fr_120px]">
        <AreaListItemName area={area} />
        <AreaListItemWeatherProps area={area} />
      </div>
      <AreaListItemWeatherDetail area={area} />
    </Link>
  );
}

export default AreasListItem;
