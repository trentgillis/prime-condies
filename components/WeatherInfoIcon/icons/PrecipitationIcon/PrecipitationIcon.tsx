import { WeatherInfoIconSvgProps } from '../../WeatherInfoIcon';

export function PrecipitationIcon({ size, color }: WeatherInfoIconSvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.6 72C47.3162 72 42.2222 66.906 42.2222 60.6222C42.2222 50.6667 53.6 40.7111 53.6 40.7111C53.6 40.7111 64.9778 50.6667 64.9778 60.6222C64.9778 66.906 59.8838 72 53.6 72ZM53.6 46.4C53.6 46.4 46.4889 53.5111 46.4889 60.6222C46.4889 64.5496 49.6726 67.7333 53.6 67.7333C57.5274 67.7333 60.7111 64.5496 60.7111 60.6222C60.7111 53.5111 53.6 46.4 53.6 46.4ZM45.0667 39.2889C38.7829 39.2889 33.6889 34.1949 33.6889 27.9111C33.6889 17.9556 45.0667 8 45.0667 8C45.0667 8 56.4444 17.9556 56.4444 27.9111C56.4444 34.1949 51.3504 39.2889 45.0667 39.2889ZM45.0667 13.6889C45.0667 13.6889 37.9556 20.8 37.9556 27.9111C37.9556 31.8385 41.1393 35.0222 45.0667 35.0222C48.994 35.0222 52.1778 31.8385 52.1778 27.9111C52.1778 20.8 45.0667 13.6889 45.0667 13.6889ZM26.5778 63.4667C20.294 63.4667 15.2 58.3727 15.2 52.0889C15.2 42.1333 26.5778 32.1778 26.5778 32.1778C26.5778 32.1778 37.9556 42.1333 37.9556 52.0889C37.9556 58.3727 32.8615 63.4667 26.5778 63.4667ZM26.5778 37.8667C26.5778 37.8667 19.4667 44.9778 19.4667 52.0889C19.4667 56.0163 22.6504 59.2 26.5778 59.2C30.5051 59.2 33.6889 56.0163 33.6889 52.0889C33.6889 44.9778 26.5778 37.8667 26.5778 37.8667Z"
        fill={color}
      />
    </svg>
  );
}
