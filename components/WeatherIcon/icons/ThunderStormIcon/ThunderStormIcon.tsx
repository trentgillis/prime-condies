import { WeatherIconSvgProps } from '../../WeatherIcon';

export function ThunderStormIcon({ size, color, strokeWidth }: WeatherIconSvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35.7694 49.7079L29.1658 58.0937L35.5009 58.1757L28.1815 68L49.9071 55.7628L42.2835 55.7173L46.319 49.7079H35.7694Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58.8103 27.7556C63.9522 28.9291 67.4029 33.8512 66.82 39.1804C66.2371 44.5096 61.8071 48.5391 56.5376 48.5334H23.1349C17.4261 48.5334 12.8 44.3997 12.8 38.5907C12.802 33.7243 16.0849 29.4949 20.7368 28.3657C20.4414 27.4866 20.2931 26.5632 20.2984 25.6342C20.3312 22.2353 22.3582 19.1857 25.4462 17.8896C28.5342 16.5934 32.0847 17.3017 34.463 19.6886C36.971 14.0723 42.9873 10.9946 48.9132 12.2966C54.8391 13.5986 59.0716 18.928 59.0788 25.097C59.0386 26.0118 58.949 26.9237 58.8103 27.8285V27.7556Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
