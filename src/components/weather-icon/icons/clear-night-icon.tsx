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
        d="M52.6812 47.7205C40.3623 47.7205 30.3804 37.6993 30.3804 25.3319C30.3804 19.3847 32.6993 14.0012 36.4674 10C21.558 11.7642 10 24.4589 10 39.8818C10 56.505 23.4239 70 40 70C56.5761 70 70 56.5232 70 39.8818C70 39.7363 69.9819 39.609 69.9819 39.4635C65.8877 44.5014 59.6739 47.7205 52.6993 47.7205H52.6812Z"
        fill="#CBD5E1"
      />
    </svg>
  );
}

export default ClearNightIcon;
