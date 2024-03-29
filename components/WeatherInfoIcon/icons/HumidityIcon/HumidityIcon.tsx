import { WeatherInfoIconSvgProps } from '../../WeatherInfoIcon';

export function HumidityIcon({ size, color }: WeatherInfoIconSvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 72C26.7452 72 16 61.2548 16 48C16 28.8 40 8 40 8C40 8 64 28.8 64 48C64 61.2548 53.2548 72 40 72ZM40 14.4C40 14.4 20.8 32 20.8 48C20.8 58.6039 29.3961 67.2 40 67.2C50.6039 67.2 59.2 58.6039 59.2 48C59.2 32 40 14.4 40 14.4Z"
        fill={color}
      />
    </svg>
  );
}
