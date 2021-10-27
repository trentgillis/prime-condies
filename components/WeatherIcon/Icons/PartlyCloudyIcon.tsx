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
          d="M62.3367162,58.28844 C68.9240042,59.9357822 73.2772859,66.2013966 72.523083,72.949528 C71.7688801,79.6976593 66.1397431,84.8475917 59.3513066,85 L15.5443481,85 C8.0651113,85 2,79.6734007 2,72.1941639 C1.99045081,65.9193258 6.29686427,60.4614997 12.4018116,59.0112233 C12.0283464,57.8861148 11.8373786,56.70848 11.8361551,55.5230079 C11.8641897,51.1362324 14.5182305,47.1933706 18.571893,45.5163478 C22.6255554,43.839325 27.2894778,44.7547046 30.4085456,47.8395062 L30.4085456,47.8395062 C33.6818084,40.5794352 41.5814554,36.5919618 49.3664683,38.2701909 C57.1514812,39.9484199 62.7066915,46.8363808 62.6981079,54.8002245 C62.6431588,55.9688205 62.5225042,57.1333993 62.3367162,58.28844 L62.3367162,58.28844 Z"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></path>
        <path
          d="M51.2749878,38.8204265 C55.8827966,33.7710812 63.062955,31.9656826 69.5110159,34.2351099 C75.9590768,36.5045373 80.4256849,42.4090737 80.8552212,49.2313378 C81.2847576,56.053602 77.5939965,62.4717342 71.4814974,65.5319865"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></path>
        <line
          x1="64.0336859"
          y1="21.6150393"
          x2="63.9865479"
          y2="15"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
        <line
          x1="91.9394098"
          y1="52.7575758"
          x2="98.5701618"
          y2="52.7104377"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
        <line
          x1="85.1358184"
          y1="30.0527497"
          x2="89.7867724"
          y2="25.338945"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
        <line
          x1="41.2817219"
          y1="30.0527497"
          x2="36.6307679"
          y2="25.338945"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
        <line
          x1="87.1941798"
          y1="76.7037037"
          x2="82.5432258"
          y2="71.989899"
          id="Path"
          stroke={color}
          strokeWidth={strokeWidth}
        ></line>
      </g>
    </svg>
  );
};

export default PartlyCloudyIcon;
