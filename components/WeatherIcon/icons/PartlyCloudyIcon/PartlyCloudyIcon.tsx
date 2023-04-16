import { WeatherIconSvgProps } from '../../WeatherIcon';

function PartlyCloudyDayIcon({ size, color, strokeWidth }: WeatherIconSvgProps) {
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

function PartlyCloudyNightIcon({ size, color, strokeWidth }: WeatherIconSvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M56.3924 44.8724C61.6616 46.058 65.6015 50.7643 65.6015 56.3928C65.6015 62.9194 60.3084 68.2006 53.7937 68.2006H15.6041C9.07749 68.2006 3.79633 63.5541 3.79633 57.0395C3.79633 51.4589 7.66439 46.7765 12.8737 45.5431C12.5504 44.597 12.3827 43.5671 12.3827 42.5133C12.3827 37.2561 16.634 33.0048 21.8912 33.0048C24.5018 33.0048 26.861 34.0586 28.5735 35.7472C30.8847 30.6456 36.0222 27.1009 41.986 27.1009C50.1173 27.1009 56.7157 33.6874 56.7157 41.8307C56.7157 42.8725 56.4044 44.8724 56.4044 44.8724H56.3924Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.7276 42.3576C67.1942 42.3576 75.2657 35.4957 75.2657 27.0171C75.2657 26.9452 75.2657 26.8734 75.2657 26.8015C73.17 29.3643 69.9965 31.0049 66.4278 31.0049C60.1287 31.0049 55.0272 25.9034 55.0272 19.6043C55.0272 16.5745 56.2128 13.8321 58.1408 11.7963C50.5244 12.6945 44.6205 17.9637 44.6205 25.8196"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PartlyCloudyIcon({ variant, ...rest }: WeatherIconSvgProps) {
  return variant === 'night' ? <PartlyCloudyNightIcon {...rest} /> : <PartlyCloudyDayIcon {...rest} />;
}
