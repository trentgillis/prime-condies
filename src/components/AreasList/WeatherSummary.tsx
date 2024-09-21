import { WeatherDescription } from '@/lib/types/WeatherResponse';
import styles from './WeatherSummary.module.scss';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { getWeatherDescription } from '@/lib/utils/weather';

interface WeatherSummaryProps {
  weatherDescription: WeatherDescription;
}

function WeatherSummary({ weatherDescription }: WeatherSummaryProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <WeatherIcon iconCode={weatherDescription.icon} />
      </div>
      <span className={styles.weatherDescription}>
        {getWeatherDescription(weatherDescription.id, weatherDescription.main)}
      </span>
    </div>
  );
}

export default WeatherSummary;
