import { render, screen } from '@testing-library/react';

import WeatherDetails from '../WeatherDetails';

describe('<WeatherDetails /> Component', () => {
  const mockProps1 = {
    rain: 101,
    humidity: 102,
    windSpeed: 103,
  };

  const mockProps2 = {
    rain: { '1h': 101 },
    humidity: 102,
    windSpeed: 103,
  };

  it('should render the correct value for precipitation when rain is an object with 1h property', () => {
    render(<WeatherDetails data={mockProps1} />);
    const precipitationLabelEl = screen.getByText(/^precipitation$/i);
    const precipitationValueEl = screen.getByText(/101/i);
    expect(precipitationLabelEl).toBeVisible();
    expect(precipitationValueEl).toBeVisible();
  });

  it('should render the correct value for precipitation when rain is a number', () => {
    render(<WeatherDetails data={mockProps2} />);
    const precipitationLabelEl = screen.getByText(/^precipitation$/i);
    const precipitationValueEl = screen.getByText(/101/i);
    expect(precipitationLabelEl).toBeVisible();
    expect(precipitationValueEl).toBeVisible();
  });

  it('should render the correct value for humidity', () => {
    render(<WeatherDetails data={mockProps1} />);
    const humidityLabelEl = screen.getByText(/^humidity$/i);
    const humidityValueEl = screen.getByText(/102/i);
    expect(humidityLabelEl).toBeVisible();
    expect(humidityValueEl).toBeVisible();
  });

  it('should render the correct value for wind speed', () => {
    render(<WeatherDetails data={mockProps1} />);
    const windSpeedLabelEl = screen.getByText(/^wind speed$/i);
    const windSpeedValueEl = screen.getByText(/102/i);
    expect(windSpeedLabelEl).toBeVisible();
    expect(windSpeedValueEl).toBeVisible();
  });
});
