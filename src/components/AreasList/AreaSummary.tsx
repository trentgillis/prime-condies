import styles from './AreaSummary.module.scss';

import React from 'react';

type AreaSummaryProps = {
  areaName: string;
  areaPlace: string;
  areaCountryCode: string;
  temp: number;
  tempMax: number;
  tempMin: number;
};

function AreaSummary({ areaName, areaPlace, areaCountryCode, temp, tempMax, tempMin }: AreaSummaryProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.areaTitle}>
        <h2 className={styles.areaName}>{areaName}</h2>
        <span className={styles.areaLocation}>
          {areaPlace}, {areaCountryCode}
        </span>
      </div>
      <div className={styles.tempWrapper}></div>
    </div>
  );
}

export default AreaSummary;
