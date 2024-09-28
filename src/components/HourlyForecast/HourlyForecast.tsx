import styles from './HourlyForecast.module.scss';

import React from 'react';
import HourlyList from './HourlyList';
import HourlyGraph from './HourlyGraph';

function HourlyForecast() {
  return (
    <div className={styles.wrapper}>
      <HourlyList />
      <HourlyGraph />
    </div>
  );
}

export default HourlyForecast;
