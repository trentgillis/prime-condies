import { WeatherIconProps } from './WeatherIcon';

function CloudyIcon({ size }: Partial<WeatherIconProps>) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M68.0765 36.4032C74.9012 37.9315 80 44.0316 80 51.3175C80 59.7628 73.1489 66.6007 64.7168 66.6007H15.2834C6.83806 66.6007 0.00012207 60.5929 0.00012207 52.1475C0.00012207 44.9275 5.0067 38.8669 11.7392 37.2727C11.3176 36.0343 11.0937 34.7167 11.0937 33.3465C11.0937 26.5481 16.6009 21.0409 23.3993 21.0409C26.7722 21.0409 29.8288 22.3979 32.0554 24.5982C35.0462 17.9974 41.6997 13.3992 49.4204 13.3992C59.9474 13.3992 68.4849 21.9368 68.4849 32.4638C68.4849 33.8076 68.0765 36.4032 68.0765 36.4032Z"
        fill="#F8FAFC"
      />
    </svg>
  );
}

export default CloudyIcon;
