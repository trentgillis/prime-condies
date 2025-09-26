import styles from './daily-forecast-detail-grid.module.css';

import React from 'react';

function DailyForecastDetail() {
  return (
    <div className={`${styles.dailyDetailGrid} hidden flex-grow lg:block`}>
      <div className={`${styles.dailyDetailGridAreaPrecipitation} border-r border-zinc-700`}>
        Precipitation
      </div>
      <div className={`${styles.dailyDetailGridAreaHumdity} border-r border-zinc-700`}>Humdity</div>
      <div className={`${styles.dailyDetailGridAreaWind} border-r border-zinc-700`}>Wind</div>
      <div className={`${styles.dailyDetailGridAreaSunriseSunset}`}>Sunrise Sunset</div>
      <div className={`${styles.dailyDetailGridAreaHourly} border-t border-zinc-700`}>Hourly</div>
    </div>
  );
}

export default DailyForecastDetail;
