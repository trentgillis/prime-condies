import styles from './AreaSummary.module.scss';

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
    <div className={styles.wrapper}>
      <div className={styles.areaTitle}>
        <h2 className={styles.areaName}>{areaName}</h2>
        <span className={styles.areaLocation}>
          {areaPlace}, {areaCountryCode}
        </span>
      </div>
      <div className={styles.tempWrapper}>
        <h3>{Math.round(currentTemp)}&deg;</h3>
        <div className={styles.highLowWrapper}>
          <span className={styles.highLowText}>H: {Math.round(tempMax)}&deg;</span>
          <span className={styles.highLowText}>L: {Math.round(tempMin)}&deg;</span>
        </div>
      </div>
    </div>
  );
}

export default AreaSummary;
