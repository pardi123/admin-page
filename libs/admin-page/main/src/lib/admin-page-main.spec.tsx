import { render } from '@testing-library/react';

import AdminPageMain from './admin-page-main';

describe('AdminPageMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminPageMain />);
    expect(baseElement).toBeTruthy();
  });
});
