import styles from './weather-details-grid.module.css';
import React from 'react';

interface WeatherDetailsGridProps {
  children: React.ReactNode;
}

function WeatherDetailsGrid({ children }: WeatherDetailsGridProps) {
  return <div className={styles.weatherGrid}>{children}</div>;
}

export default WeatherDetailsGrid;
