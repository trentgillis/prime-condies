import { render, screen } from '@testing-library/react';

import Navbar from '../Navbar';

describe('<Navbar /> Component', () => {
  // TODO: Temporary test until navbar component is updated
  it('should render', () => {
    render(<Navbar />);
    const tempLogoEl = screen.getByText(/primecondies/i);
    expect(tempLogoEl).toBeInTheDocument();
  });
});
