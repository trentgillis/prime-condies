import { WeatherIconProps } from './WeatherIcon';

function ClearDayIcon({ size, strokeWidth }: Partial<WeatherIconProps>) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57.6893 40.0108C57.6893 49.8417 49.7359 57.8113 39.9247 57.8113C30.1136 57.8113 22.1602 49.8417 22.1602 40.0108C22.1602 30.1799 30.1136 22.2103 39.9247 22.2103C44.6362 22.2103 49.1547 24.0857 52.4862 27.424C55.8177 30.7622 57.6893 35.2898 57.6893 40.0108Z"
        fill="#FACC15"
      />
      <path
        d="M39.9248 13.6003V8"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.05365 40.0107H13.6534"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.5047 58.6281L62.9029 63.0353"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9467 16.9863L21.3449 21.3934"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3449 58.6281L16.9467 63.0353"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M62.9029 16.9863L58.5047 21.3934"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.5047 21.3934L62.9029 16.9863"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9467 63.0353L21.3449 58.6281"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.451 58.6819L62.8493 63.089"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.893 17.04L21.2912 21.4471"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.8712 66.3997V72"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.8712 8.12897V13.74"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.589 40.0645H8"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M71.7423 40.0645H66.1426"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ClearDayIcon;
