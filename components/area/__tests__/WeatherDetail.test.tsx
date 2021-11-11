import { render, screen } from '@testing-library/react';

import WeatherDetail from '../WeatherDetail';

describe('<WeatherDetail /> Component', () => {
  beforeEach(() => {
    render(<WeatherDetail value={49.5} label="test" icon="humidity" unitLabel="%" />);
  });

  it('should render the correct value rounded to the nearest whole number', () => {
    const valueEl = screen.getByText(/50.*/i);
    expect(valueEl).toBeVisible();
  });

  it('should render the correct label as upper case text', () => {
    const labelEl = screen.getByText(/TEST/);
    expect(labelEl).toBeVisible();
  });

  it('should render the correct icon', () => {
    const iconEl = screen.getByTitle(/humidity info icon/i);
    expect(iconEl).toBeInTheDocument();
  });

  it('should render the unit label next to the value', () => {
    const unitLabelEl = screen.getByText(/.*%/i);
    expect(unitLabelEl).toBeVisible();
  });
});
