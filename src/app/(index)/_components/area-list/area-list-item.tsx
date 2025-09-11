import React from 'react';
import Link from 'next/link';

import { AreaResponse } from '@/lib/types/AreaResponse';

import AreaListItemName from './area-list-item-name';
import AreaListItemWeather from './area-list-item-weather';
import AreaListItemWeatherDetail from './area-list-item-weather-detail';

type AreaListItemProps = {
  area: AreaResponse;
};

function AreasListItem({ area }: AreaListItemProps) {
  return (
    <Link
      href={`/${area.areaSlug}`}
      className="flex flex-col rounded border border-zinc-700 bg-zinc-900 hover:bg-zinc-800"
    >
      <div className="grid grid-cols-[1fr_120px] p-2 pb-3 lg:p-3">
        <AreaListItemName area={area} />
        <AreaListItemWeather area={area} />
      </div>
      <div className="border-t border-zinc-700">
        <AreaListItemWeatherDetail area={area} />
      </div>
    </Link>
  );
}

export default AreasListItem;
