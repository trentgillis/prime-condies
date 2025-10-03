'use client';

import React from 'react';

interface DailyForecastContextValue {
  selectedDayIdx: number;
  setSelectedDayIdx: React.Dispatch<React.SetStateAction<number>>;
}

const DailyForecastContext = React.createContext<DailyForecastContextValue>(
  undefined as unknown as DailyForecastContextValue,
);

export default DailyForecastContext;
