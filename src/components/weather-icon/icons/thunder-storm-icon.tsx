import { WeatherIconProps } from '../weather-icon';

function ThunderStormIcon({ size }: Partial<WeatherIconProps>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_113_1530)">
        <path
          d="M34.0419 52.7394L24.3811 65.0074L33.6491 65.1273L22.9411 79.5L54.7249 61.5974L43.5718 61.5308L49.4756 52.7394H34.0419Z"
          fill="#FACC15"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M67.7499 23.5499C75.2722 25.2667 80.3206 32.4675 79.4677 40.2639C78.6149 48.0603 72.1341 53.9553 64.4249 53.947H15.5581C7.2063 53.947 0.438507 47.8995 0.438507 39.4011C0.441398 32.2818 5.24422 26.0943 12.0498 24.4424C11.6176 23.1563 11.4007 21.8055 11.4084 20.4463C11.4564 15.4738 14.4218 11.0125 18.9395 9.1162C23.4571 7.21992 28.6513 8.25624 32.1306 11.7481C35.7997 3.53165 44.6014 -0.97079 53.2708 0.933985C61.9402 2.83876 68.1321 10.6355 68.1427 19.6604C68.0839 20.9987 67.9528 22.3328 67.7499 23.6565V23.5499Z"
          fill="#F8FAFC"
        />
      </g>
      <defs>
        <clipPath id="clip0_113_1530">
          <rect width="80" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ThunderStormIcon;
