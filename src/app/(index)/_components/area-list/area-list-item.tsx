import React from 'react';
import Link from 'next/link';

import { Area } from '@/lib/types';

import AreaListItemName from './area-list-item-name';
import AreaListItemWeather from './area-list-item-weather';
import AreaListItemWeatherDetail from './area-list-item-weather-detail';

type AreaListItemProps = {
  area: Area;
};

function AreasListItem({ area }: AreaListItemProps) {
  return (
    <Link
      href={`/${area.areaSlug}`}
      className="border-border bg-muted hover:bg-muted-foreground/10 flex flex-col rounded border"
    >
      <div className="grid grid-cols-[1fr_120px] p-2 pb-3 lg:p-3">
        <AreaListItemName area={area} />
        <AreaListItemWeather area={area} />
      </div>
      <div className="border-border border-t">
        <AreaListItemWeatherDetail area={area} />
      </div>
    </Link>
  );
}

export default AreasListItem;
