import { render, screen } from '@testing-library/react';

import AreaHeader from '../AreaHeader';

describe('<AreaHeader /> Component', () => {
  beforeEach(() => {
    render(<AreaHeader areaName="testName" areaLocation="testLocation" areaCountry="ca" />);
  });

  it('should correctly display the area name in the heading', () => {
    const areaTestName = screen.getAllByRole('heading', { name: /testName/ });
    expect(areaTestName[0]).toBeVisible();
  });

  it('should correctly display the area location in the heading', () => {
    const areaLocationEl = screen.getAllByRole('heading', { name: /testLocation, CA/ });
    expect(areaLocationEl[0]).toBeVisible();
  });
});
