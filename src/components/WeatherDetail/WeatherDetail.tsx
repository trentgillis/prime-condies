import styles from './WeatherDetail.module.scss';

import React from 'react';

import WeatherInfoIcon, { WeatherInfoVarient } from '@/components/WeatherInfoIcon';

interface WeatherDataProps extends React.PropsWithChildren {
  variant: WeatherInfoVarient;
  label: string;
}

function WeatherData({ variant, label, children }: WeatherDataProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <WeatherInfoIcon icon={variant} />
      </div>
      <span className={styles.detailLabel}>{label}</span>
      <span className={styles.detailText}>{children}</span>
    </div>
  );
}

export default WeatherData;
