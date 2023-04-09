import { WeatherIconSvgProps } from '../../WeatherIcon';

export function SnowIcon({ size, color, strokeWidth }: WeatherIconSvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M61.9093 28.8247C67.8458 30.0826 71.8312 35.3705 71.1585 41.0965C70.4859 46.8225 65.3706 51.1514 59.2874 51.1428H20.7264C14.1397 51.1428 8.79999 46.661 8.79999 40.4632C8.81556 35.2462 12.5984 30.7167 17.9553 29.501C16.9528 26.7223 17.4302 23.656 19.2369 21.2697C21.0437 18.8833 23.9568 17.4712 27.0573 17.4789C29.5981 17.4676 32.0398 18.4115 33.8465 20.1033C36.8082 14.1578 43.7078 10.9317 50.4925 12.32C57.2773 13.7083 62.1551 19.3443 62.261 25.9175C62.2127 26.8915 62.1059 27.8621 61.9413 28.8247H61.9093Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.9952 59.0061C27.9952 59.7859 27.4992 60.4889 26.7386 60.7873C25.9779 61.0857 25.1023 60.9208 24.5201 60.3694C23.9379 59.818 23.7637 58.9887 24.0788 58.2683C24.3939 57.5478 25.1362 57.0781 25.9595 57.0781C27.0814 57.0836 27.9894 57.9436 27.9952 59.0061Z"
        fill={color}
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.7034 59.0061C42.7034 59.7859 42.2074 60.4889 41.4467 60.7873C40.6861 61.0857 39.8105 60.9208 39.2283 60.3694C38.6461 59.818 38.4719 58.9887 38.787 58.2683C39.1021 57.5478 39.8444 57.0781 40.6677 57.0781C41.7896 57.0836 42.6976 57.9436 42.7034 59.0061Z"
        fill={color}
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M57.4009 59.0061C57.4009 59.7868 56.9038 60.4904 56.1418 60.7883C55.3798 61.0861 54.5034 60.9193 53.922 60.3658C53.3406 59.8123 53.1691 58.9814 53.4876 58.2613C53.806 57.5412 54.5516 57.074 55.3759 57.0781C56.496 57.0837 57.4009 57.9452 57.4009 59.0061Z"
        fill={color}
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.4559 66.072C35.4559 67.1368 34.5445 67.9999 33.4202 67.9999C32.2959 67.9999 31.3845 67.1368 31.3845 66.072C31.3845 65.0072 32.2959 64.144 33.4202 64.144C34.5421 64.1495 35.4501 65.0095 35.4559 66.072Z"
        fill={color}
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M50.164 66.072C50.164 66.8518 49.6681 67.5548 48.9074 67.8532C48.1467 68.1516 47.2711 67.9866 46.6889 67.4352C46.1067 66.8839 45.9325 66.0546 46.2476 65.3342C46.5627 64.6137 47.305 64.144 48.1283 64.144C49.2502 64.1495 50.1582 65.0095 50.164 66.072Z"
        fill={color}
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
