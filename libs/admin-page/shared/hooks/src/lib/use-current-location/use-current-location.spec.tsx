import { render } from '@testing-library/react';

import UseCurrentLocation from './use-current-location';

describe('UseCurrentLocation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseCurrentLocation />);
    expect(baseElement).toBeTruthy();
  });
});
