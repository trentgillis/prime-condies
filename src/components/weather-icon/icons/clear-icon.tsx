import { WeatherIconProps } from '../weather-icon';
import ClearDayIcon from './clear-day-icon';
import ClearNightIcon from './clear-night-icon';

function ClearIcon({ isDay, size, strokeWidth }: Partial<WeatherIconProps>) {
  if (isDay) return <ClearDayIcon size={size} strokeWidth={strokeWidth} />;

  return <ClearNightIcon size={size} strokeWidth={strokeWidth} />;
}

export default ClearIcon;
