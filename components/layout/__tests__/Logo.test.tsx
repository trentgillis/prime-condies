import { render, screen } from '@testing-library/react';

import Logo from '../Logo';

describe('<Logo /> Component', () => {
  it('should render PrimeCondies as the logo text', () => {
    render(<Logo />);
    const logoTextEl = screen.getByText(/PrimeCondies/);
    expect(logoTextEl).toBeInTheDocument();
  });
});
