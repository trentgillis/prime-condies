import { WeatherIconProps } from '../weather-icon';

function MistIcon({ size, strokeWidth }: Partial<WeatherIconProps>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.40088 55.5494H71.9892"
        stroke="#CBD5E1"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.38727 47.8125H75.6127"
        stroke="#CBD5E1"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.96655 40.0882H73.5116"
        stroke="#CBD5E1"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3203 32.3513H68.0133"
        stroke="#CBD5E1"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.6605 16.8901H60.2252"
        stroke="#CBD5E1"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3908 24.2742H29.274"
        stroke="#CBD5E1"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.886 24.4506H63.9997"
        stroke="#CBD5E1"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6918 63.1099H66.9565"
        stroke="#CBD5E1"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MistIcon;
