import { ColorCode } from '@/lib/types/ColorCode';

type WeatherInfoIconProps = {
  icon: 'humidity' | 'windSpeed' | 'precipitation';
  size: number;
  colorCode?: ColorCode;
  strokeWidth?: number;
};

export function WeatherInfoIcon({ icon, colorCode = 'N300', strokeWidth = 2, size }: WeatherInfoIconProps) {
  return <h1>WeatherInfoIconComponent</h1>;
}
