import { WeatherIconSvgProps } from '../../WeatherIcon';

export function RainIcon({ size, color, strokeWidth }: WeatherIconSvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.0924 27.889C64.2503 29.0812 67.7049 34.0119 67.1202 39.3471C66.5355 44.6822 62.0978 48.7223 56.8078 48.7355H23.1927C17.4588 48.7355 12.8 44.5898 12.8 38.735C12.8007 33.8517 16.1023 29.6065 20.7827 28.4709C20.4959 27.5911 20.3507 26.6701 20.3526 25.7435C20.3557 22.3208 22.3835 19.2346 25.4959 17.9157C28.6084 16.5967 32.1969 17.3029 34.5978 19.7068C37.1256 14.0712 43.1842 10.9872 49.1473 12.3007C55.1104 13.6143 59.3636 18.9697 59.3612 25.1616C59.3197 26.0754 59.2269 26.986 59.0835 27.889H59.0924Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.2209 55.1903L25.325 61.6361"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.5117 55.1903L33.7198 68"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.1429 55.1903L43.351 68"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54.4336 55.1903L53.5377 61.6361"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
