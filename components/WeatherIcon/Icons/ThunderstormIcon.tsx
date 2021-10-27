import type { IconProps } from '@/lib/ui/types/WeatherIconTypes';

const ThunderstormIcon = ({ size, color, strokeWidth }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Thunderstorm Icon</title>
      <g
        id="thunderstorm-icon"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon
          id="Path"
          stroke={color}
          fill={color}
          fillRule="nonzero"
          points="44.7117285 62.1349232 36.4572463 72.6171212 44.3761804 72.7195531 35.2269035 85 62.3839259 69.7035027 52.8543612 69.646596 57.898767 62.1349232"
        ></polygon>
        <path
          d="M73.5129364,34.6945549 C79.9402097,36.1614319 84.2536577,42.3140248 83.524991,48.9754957 C82.7963242,55.6369666 77.2589125,60.6738491 70.6719629,60.6667402 L28.9186001,60.6667402 C21.7826115,60.6667402 16,55.4996123 16,48.2383285 C16.00247,42.15532 20.1061477,36.8685717 25.9210375,35.4571035 C25.5517175,34.358236 25.3664517,33.2040399 25.3729756,32.0427067 C25.4140225,27.7940714 27.9477909,23.9821848 31.8077975,22.361944 C35.6678041,20.7417032 40.1058333,21.6271722 43.0787279,24.6107032 L43.0787279,24.6107032 C46.2137189,17.590332 53.734155,13.743312 61.141547,15.3708099 C68.548939,16.9983079 73.8394593,23.6600574 73.8484844,31.3712087 C73.7983033,32.5147449 73.6862844,33.6546022 73.5129364,34.7856054 L73.5129364,34.6945549 Z"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></path>
      </g>
    </svg>
  );
};

export default ThunderstormIcon;
