import { WeatherIconProps } from '../weather-icon';
import PartlyCloudyDayIcon from './partly-cloudy-day-icon';
import PartlyCloudyNightIcon from './partly-cloudy-night-icon';

function PartlyCloudyIcon({ isDay, size, strokeWidth }: Partial<WeatherIconProps>) {
  if (isDay) return <PartlyCloudyDayIcon size={size} strokeWidth={strokeWidth} />;

  return <PartlyCloudyNightIcon size={size} strokeWidth={strokeWidth} />;
}

export default PartlyCloudyIcon;
