import type { IconProps } from '@/lib/ui/types/WeatherIconTypes';

const RainIcon = ({ size, color, strokeWidth }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Rain Icon</title>
      <g
        id="rain-icon"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M73.8655589,34.8612865 C80.3129386,36.351562 84.631139,42.5149257 83.900278,49.1838325 C83.169417,55.8527393 77.6223084,60.9028271 71.0097978,60.919326 L28.9909132,60.919326 C21.8235128,60.919326 16,55.7372649 16,48.4187401 C16.0008719,42.3146776 20.127913,37.0081427 25.9783652,35.5885933 C25.6199146,34.4888449 25.438404,33.3376793 25.4408102,32.1793427 C25.4446267,27.9010087 27.9793737,24.0432591 31.8699253,22.3945724 C35.760477,20.7458857 40.2461359,21.6286203 43.2473204,24.6335345 L43.2473204,24.6335345 C46.4070679,17.5889779 53.9802943,13.7339841 61.4341621,15.3758999 C68.8880299,17.0178157 74.2045205,23.7121181 74.2015308,31.4520358 C74.1496086,32.5942135 74.0336977,33.7324692 73.8543598,34.8612865 L73.8655589,34.8612865 Z"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></path>
        <line
          x1="32.7761965"
          y1="68.9878859"
          x2="31.6562902"
          y2="77.0450817"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
        <line
          x1="44.3896249"
          y1="68.9878859"
          x2="42.1498123"
          y2="85"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
        <line
          x1="56.4286177"
          y1="68.9878859"
          x2="54.1888051"
          y2="85"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
        <line
          x1="68.0420461"
          y1="68.9878859"
          x2="66.9221398"
          y2="77.0450817"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
      </g>
    </svg>
  );
};

export default RainIcon;
