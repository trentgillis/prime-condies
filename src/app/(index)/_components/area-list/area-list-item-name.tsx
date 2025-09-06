import React from 'react';

import { AreaResponse } from '@/lib/types/AreaResponse';

type AreaListItemNameProps = {
  area: AreaResponse;
};

function AreaListItemName({ area }: AreaListItemNameProps) {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-sm tracking-widest text-zinc-50 lg:text-xl lg:tracking-wide">{area.name}</h2>
      <span className="order-first text-xs text-zinc-400 lg:text-sm">
        {area.place}, {area.countryCode}
      </span>
    </div>
  );
}

export default AreaListItemName;
