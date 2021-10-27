import { render, screen } from '@testing-library/react';

import WeatherIcon from '../WeatherIcon';

describe('<WeatherIcon /> Component', () => {
  it('should render the chance of rain icon', () => {
    render(<WeatherIcon iconName="chanceOfRain" size={100} />);
    const chanceOfRainIconEl = screen.getByTitle(/chance of rain icon/i);
    expect(chanceOfRainIconEl).toBeInTheDocument();
  });

  it('should render the chance of snow icon', () => {
    render(<WeatherIcon iconName="chanceOfSnow" size={100} />);
    const chanceOfRainIconEl = screen.getByTitle(/chance of snow icon/i);
    expect(chanceOfRainIconEl).toBeInTheDocument();
  });

  it('should render the partly cloudy icon', () => {
    render(<WeatherIcon iconName="partlyCloudy" size={100} />);
    const partlyCloudyIconEl = screen.getByTitle(/partly cloudy icon/i);
    expect(partlyCloudyIconEl).toBeInTheDocument();
  });

  it('should render the rain icon', () => {
    render(<WeatherIcon iconName="rain" size={100} />);
    const rainIconEl = screen.getByTitle(/rain icon/i);
    expect(rainIconEl).toBeInTheDocument();
  });

  it('should render the snow icon', () => {
    render(<WeatherIcon iconName="snow" size={100} />);
    const snowIconEl = screen.getByTitle(/snow icon/i);
    expect(snowIconEl).toBeInTheDocument();
  });

  it('should render the sunny icon', () => {
    render(<WeatherIcon iconName="sunny" size={100} />);
    const sunnyIconEl = screen.getByTitle(/sunny icon/i);
    expect(sunnyIconEl).toBeInTheDocument();
  });

  it('should render the thunderstorm icon', () => {
    render(<WeatherIcon iconName="thunderstorm" size={100} />);
    const thunderstormIconEl = screen.getByTitle(/thunderstorm icon/i);
    expect(thunderstormIconEl).toBeInTheDocument();
  });
});
