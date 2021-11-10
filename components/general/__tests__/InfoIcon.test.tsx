import { render, screen } from '@testing-library/react';

import InfoIcon from '../InfoIcon';

describe('<InfoIcon /> Component', () => {
  it('should render the humidity info icon', () => {
    render(<InfoIcon iconName="humidity" size={100} />);
    const humidityInfoIconEl = screen.getByTitle(/humidity info icon/i);
    expect(humidityInfoIconEl).toBeInTheDocument();
  });

  it('should render the precipitation info icon', () => {
    render(<InfoIcon iconName="precipitation" size={100} />);
    const precipitationInfoIconEl = screen.getByTitle(/precipitation info icon/i);
    expect(precipitationInfoIconEl).toBeInTheDocument();
  });

  it('should render the wind speed info icon', () => {
    render(<InfoIcon iconName="windSpeed" size={100} />);
    const windSpeedInfoIconEl = screen.getByTitle(/wind speed info icon/i);
    expect(windSpeedInfoIconEl).toBeInTheDocument();
  });
});
