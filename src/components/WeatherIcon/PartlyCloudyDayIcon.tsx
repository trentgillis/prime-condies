import { WeatherIconProps } from './WeatherIcon';

function PartlyCloudyDayIcon({ size, strokeWidth }: Partial<WeatherIconProps>) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.7538 31.2598C43.5761 27.0712 49.5323 25.5736 54.8812 27.4561C60.2301 29.3387 63.9353 34.2367 64.2916 39.896C64.6479 45.5553 61.5863 50.8794 56.5158 53.418"
        fill="#FACC15"
      />
      <path
        d="M50.3376 16.9874L50.2985 11.5"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M73.4863 42.8212L78.9868 42.7821"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M67.8425 23.9868L71.7007 20.0765"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.4641 23.9868L27.606 20.0765"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70.6174 62.6853L66.7593 58.7751"
        stroke="#FACC15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.0647 46.3419C56.5291 47.7084 60.1403 52.9059 59.5147 58.5037C58.889 64.1015 54.2194 68.3736 48.5882 68.5H12.2488C6.04454 68.5 1.01332 64.0814 1.01332 57.8771C1.0054 52.6719 4.57772 48.1445 9.64198 46.9414C9.33218 46.0081 9.17376 45.0312 9.17275 44.0478C9.19601 40.4089 11.3976 37.1381 14.7603 35.747C18.1229 34.3558 21.9918 35.1152 24.5792 37.6741C27.2945 31.6516 33.8475 28.3439 40.3054 29.736C46.7634 31.1282 51.3716 36.842 51.3645 43.4483C51.3189 44.4177 51.2188 45.3837 51.0647 46.3419Z"
        fill="#F8FAFC"
      />
    </svg>
  );
}

export default PartlyCloudyDayIcon;
