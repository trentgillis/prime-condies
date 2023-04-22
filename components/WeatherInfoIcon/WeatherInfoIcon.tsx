import { ColorCode } from '@/lib/types/ColorCode';

type WeatherInfoIconProps = {
  icon: 'humidity' | 'windSpeed' | 'precipitation';
  size: number;
  colorCode?: ColorCode;
};

export type WeatherInfoIconSvgProps = {
  color: string;
  size: number;
};

export function WeatherInfoIcon({ icon, colorCode = 'N300', size }: WeatherInfoIconProps) {
  return <h1>WeatherInfoIconComponent</h1>;
}
