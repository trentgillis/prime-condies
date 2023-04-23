import { WeatherInfoIconSvgProps } from '../../WeatherInfoIcon';

export function WindSpeedIcon({ size, color }: WeatherInfoIconSvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_113_1526)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65.559 40.8205H3.2V35.8974H65.559C70.9968 35.8974 75.4051 31.4892 75.4051 26.0513C75.4051 20.6134 70.9968 16.2051 65.559 16.2051C60.1211 16.2051 55.7128 20.6134 55.7128 26.0513V30.9744H50.7897V26.0513C50.7897 17.8945 57.4021 11.2821 65.559 11.2821C73.7158 11.2821 80.3282 17.8945 80.3282 26.0513C80.3282 34.2081 73.7158 40.8205 65.559 40.8205ZM34.3795 30.9744H3.2V26.0513H34.3795C38.0047 26.0513 40.9436 23.1124 40.9436 19.4872C40.9436 15.8619 38.0047 12.9231 34.3795 12.9231C30.7542 12.9231 27.8154 15.8619 27.8154 19.4872V21.1282H22.8923V19.4872C22.8923 13.143 28.0353 8 34.3795 8C40.7237 8 45.8667 13.143 45.8667 19.4872C45.8667 25.8314 40.7237 30.9744 34.3795 30.9744ZM72.1231 58.8718C72.1231 66.1223 66.2454 72 58.9949 72C51.7444 72 45.8667 66.1223 45.8667 58.8718V55.5897H50.7897V58.8718C50.7897 63.4034 54.4633 67.0769 58.9949 67.0769C63.5264 67.0769 67.2 63.4034 67.2 58.8718C67.2 54.3402 63.5264 50.6667 58.9949 50.6667H3.2V45.7436H58.9949C66.2454 45.7436 72.1231 51.6213 72.1231 58.8718Z"
          fill={color}
        />
      </g>
    </svg>
  );
}