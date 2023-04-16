import { WeatherIconSvgProps } from '../../WeatherIcon';

export function CloudyIcon({ size, color, strokeWidth }: WeatherIconSvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M65.4205 36.7548C71.578 38.1337 76.1783 43.6374 76.1783 50.211C76.1783 57.8306 69.997 64 62.3893 64H17.789C10.1694 64 4 58.5795 4 50.9599C4 44.4458 8.51709 38.9777 14.5914 37.5394C14.211 36.422 14.0089 35.2333 14.0089 33.997C14.0089 27.8633 18.9777 22.8945 25.1114 22.8945C28.1545 22.8945 30.9123 24.1189 32.9212 26.104C35.6196 20.1486 41.6226 16 48.5884 16C58.0862 16 65.789 23.7028 65.789 33.2006C65.789 34.4131 65.4205 36.7548 65.4205 36.7548Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
