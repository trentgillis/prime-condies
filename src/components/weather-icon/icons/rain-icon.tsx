import { WeatherIconProps } from '../weather-icon';

function RainIconSvg({ size, strokeWidth }: Partial<WeatherIconProps>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66.6038 23.1311C73.788 24.7917 78.5997 31.6595 77.7853 39.0906C76.9709 46.5216 70.7899 52.1489 63.4216 52.1672H16.6006C8.61406 52.1672 2.125 46.393 2.125 38.238C2.12597 31.4364 6.72467 25.5234 13.2437 23.9416C12.8443 22.7161 12.6421 21.4334 12.6448 20.1427C12.649 15.3754 15.4734 11.0768 19.8086 9.23967C24.1438 7.40256 29.1421 8.38618 32.4863 11.7345C36.0072 3.88486 44.4459 -0.410703 52.7516 1.41886C61.0574 3.24842 66.9815 10.7078 66.9781 19.3323C66.9203 20.605 66.7911 21.8733 66.5913 23.1311H66.6038Z"
        fill="#F8FAFC"
      />
      <path
        d="M20.8185 61.1579L19.5706 70.1359"
        stroke="#38BDF8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.7592 61.1579L31.2634 79"
        stroke="#38BDF8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47.1741 61.1579L44.6783 79"
        stroke="#38BDF8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60.1147 61.1579L58.8668 70.1359"
        stroke="#38BDF8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RainIcon({
  size = 24,
  precipitationProbability,
  ...restProps
}: Partial<WeatherIconProps>) {
  return precipitationProbability ? (
    <div className="flex flex-col items-center gap-0.5">
      <RainIconSvg size={size * 0.7} {...restProps} />
      <span className="text-xs font-bold text-sky-300">{precipitationProbability}%</span>
    </div>
  ) : (
    <RainIconSvg size={size} {...restProps} />
  );
}

export default RainIcon;
