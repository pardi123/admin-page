import { render } from '@testing-library/react';

import SideLinks from './side-links';

describe('SideLinks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SideLinks path={''} children={''} />);
    expect(baseElement).toBeTruthy();
  });
});
