import { IconProps } from '@/lib/ui/types/WeatherIconTypes';

const HumidityIcon = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Humidity Info Icon</title>
      <g id="humidity-info-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M50,90 C33.4314575,90 20,76.5685425 20,60 C20,36 50,10 50,10 C50,10 80,36 80,60 C80,76.5685425 66.5685425,90 50,90 Z M50,18 C50,18 26,40 26,60 C26,73.254834 36.745166,84 50,84 C63.254834,84 74,73.254834 74,60 C74,40 50,18 50,18 Z"
          id="mist"
          fill={color}
        ></path>
      </g>
    </svg>
  );
};

export default HumidityIcon;
