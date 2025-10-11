import React from 'react';

import { Area } from '@/lib/types';

type AreaListItemNameProps = {
  area: Area;
};

function AreaListItemName({ area }: AreaListItemNameProps) {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-foreground text-sm tracking-widest lg:text-xl lg:tracking-wide">
        {area.name}
      </h2>
      <span className="text-muted-foreground order-first text-xs lg:text-sm">
        {area.place}, {area.countryCode}
      </span>
    </div>
  );
}

export default AreaListItemName;
