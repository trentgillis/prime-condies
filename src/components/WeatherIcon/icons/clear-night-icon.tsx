import { WeatherIconProps } from '../weather-icon';

function ClearNightIcon({ size }: Partial<WeatherIconProps>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.0628 49.741C40.4589 49.741 27.8152 37.0972 27.8152 21.4934C27.8152 13.9898 30.7524 7.19748 35.5254 2.14917C16.6401 4.37502 2 20.3919 2 39.8509C2 60.8243 19.0036 77.8509 40 77.8509C60.9964 77.8509 78 60.8472 78 39.8509C78 39.6673 77.9771 39.5067 77.9771 39.3231C72.7911 45.6794 64.9203 49.741 56.0858 49.741H56.0628Z"
        fill="#CBD5E1"
      />
    </svg>
  );
}

export default ClearNightIcon;
