import { WeatherIconSvgProps } from '../../WeatherIcon';

export function PartlyCloudyIcon({ size, color, strokeWidth }: WeatherIconSvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.2903 46.4413C54.4095 47.7215 57.7927 52.5908 57.2065 57.835C56.6204 63.0793 52.2458 67.0815 46.9702 67.2H12.9259C7.11349 67.2 2.40004 63.0604 2.40004 57.248C2.39262 52.3715 5.73931 48.13 10.4837 47.003C10.1935 46.1286 10.0451 45.2134 10.0441 44.2921C10.0659 40.883 12.1285 37.8188 15.2788 36.5155C18.429 35.2122 22.0536 35.9236 24.4775 38.3209C27.0213 32.6788 33.1605 29.58 39.2106 30.8842C45.2606 32.1884 49.5778 37.5414 49.5711 43.7304C49.5284 44.6386 49.4347 45.5436 49.2903 46.4413Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.6937 31.3118C44.2747 27.3878 49.8547 25.9847 54.8657 27.7484C59.8768 29.5121 63.348 34.1007 63.6818 39.4026C64.0156 44.7045 61.1474 49.6923 56.3971 52.0705"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.6091 17.9408L50.5724 12.8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M72.2958 42.143L77.4488 42.1064"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M67.0084 24.4981L70.6229 20.8348"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.9276 24.4981L29.3131 20.8348"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M68.6081 60.7526L64.9937 57.0893"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
