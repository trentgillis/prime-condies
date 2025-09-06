import React from 'react';

import WeatherInfoIcon, { WeatherInfoVarient } from '@/components/WeatherInfoIcon';

interface WeatherDataProps extends React.PropsWithChildren {
  variant: WeatherInfoVarient;
  label: string;
}

function WeatherData({ variant, label, children }: WeatherDataProps) {
  return (
    <div className="flex w-16 flex-col items-center justify-center gap-0.5">
      <div className="h-6 w-6 lg:h-5 lg:w-5">
        <WeatherInfoIcon icon={variant} />
      </div>
      <span className="text-xs text-neutral-300 lg:text-xs">{label}</span>
      <span className="font-outfit text-xs font-bold tracking-wide text-white lg:text-sm">{children}</span>
    </div>
  );
}

export default WeatherData;
