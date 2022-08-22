import { render } from '@testing-library/react';

import AdminPageHome from './admin-page-home';

describe('AdminPageHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminPageHome />);
    expect(baseElement).toBeTruthy();
  });
});
