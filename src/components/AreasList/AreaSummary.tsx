import React from 'react';

type AreaSummaryProps = {
  areaName: string;
  areaPlace: string;
  areaCountryCode: string;
  currentTemp: number;
  tempMax: number;
  tempMin: number;
};

function AreaSummary({ areaName, areaPlace, areaCountryCode, currentTemp, tempMax, tempMin }: AreaSummaryProps) {
  return (
    <div className="col-start-1 flex flex-col gap-1">
      <div className="flex flex-col">
        <h2 className="text-sm tracking-widest lg:text-xl lg:tracking-wide">{areaName}</h2>
        <span className="order-first text-xs text-neutral-300 lg:text-sm">
          {areaPlace}, {areaCountryCode}
        </span>
      </div>
      <div>
        <h3 className="lg:text-4xl lg:tracking-wide">{Math.round(currentTemp)}&deg;</h3>
        <div className="flex items-center gap-2">
          <span className="text-xs lg:text-sm">H: {Math.round(tempMax)}&deg;</span>
          <span className="text-xs lg:text-sm">L: {Math.round(tempMin)}&deg;</span>
        </div>
      </div>
    </div>
  );
}

export default AreaSummary;
