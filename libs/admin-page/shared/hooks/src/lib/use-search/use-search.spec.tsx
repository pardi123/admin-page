import { render } from '@testing-library/react';

import UseSearch from './use-search';

describe('UseSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseSearch />);
    expect(baseElement).toBeTruthy();
  });
});
