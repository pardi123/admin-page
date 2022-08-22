import { render } from '@testing-library/react';

import SideContent from './side-content';

describe('SideContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SideContent />);
    expect(baseElement).toBeTruthy();
  });
});
