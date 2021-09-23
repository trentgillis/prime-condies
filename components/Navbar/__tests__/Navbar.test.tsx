import { render, screen } from '@testing-library/react';

import Navbar from '../Navbar';

describe('<Navbar /> Component', () => {
  it('should render', () => {
    render(<Navbar />);
    const tempLogoEl = screen.getByText(/primecondies/i);
    expect(tempLogoEl).toBeInTheDocument();
  });
});
