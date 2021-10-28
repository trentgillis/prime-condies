import type { IconProps } from '@/lib/ui/types/WeatherIconTypes';

const PartlyCloudyIcon = ({ size, color, strokeWidth }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Partly Cloudy Icon</title>
      <g
        id="partly-cloudy-icon"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M61.6128101,58.0516274 C68.0118898,59.6519027 72.240792,65.7384996 71.5081378,72.2938272 C70.7754835,78.8491548 65.307179,83.8519462 58.7126978,84 L16.1573667,84 C8.89182241,84 3,78.8255892 3,71.5600449 C2.99072364,65.4644879 7.17409671,60.1625997 13.104617,58.7537598 C12.7418222,57.6607972 12.5563106,56.5168091 12.5551221,55.3652076 C12.5823557,51.1037686 15.1605668,47.27356 19.0984103,45.6444521 C23.0362538,44.0153443 27.5669213,44.9045702 30.5968729,47.9012346 L30.5968729,47.9012346 C33.7766139,40.8485942 41.4505566,36.9750486 49.0131406,38.6053283 C56.5757246,40.2356079 61.9722146,46.92677 61.9638763,54.6630752 C61.9104971,55.7982827 61.7932898,56.9295879 61.6128101,58.0516274 L61.6128101,58.0516274 Z"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></path>
        <path
          d="M50.867131,39.1398429 C55.3432881,34.2347645 62.3182991,32.4809488 68.5821297,34.6855354 C74.8459603,36.8901219 79.184951,42.6259573 79.6022149,49.2532996 C80.0194788,55.880642 76.4341681,62.115399 70.4963117,65.0882155"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></path>
        <line
          x1="63.2612949"
          y1="22.4260382"
          x2="63.2155037"
          y2="16"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
        <line
          x1="90.3697124"
          y1="52.6787879"
          x2="96.8110143"
          y2="52.6329966"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
        <line
          x1="83.7605093"
          y1="30.6226712"
          x2="88.2785789"
          y2="26.0435466"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
        <line
          x1="41.1593869"
          y1="30.6226712"
          x2="36.6413174"
          y2="26.0435466"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
        <line
          x1="85.7600603"
          y1="75.9407407"
          x2="81.2419908"
          y2="71.3616162"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
      </g>
    </svg>
  );
};

export default PartlyCloudyIcon;
