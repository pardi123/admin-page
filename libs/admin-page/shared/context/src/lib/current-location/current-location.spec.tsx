import { Box } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { RiSettings2Line } from 'react-icons/ri';
import { BrowserRouter } from 'react-router-dom';

import CurrentLocation from './current-location';

describe('CurrentLocation', () => {
  beforeAll(() => {
    JSON.parse = jest.fn().mockImplementation(() => ({
      path: 'a-path',
      name: 'a path',
      component: <Box />,
      icon: RiSettings2Line,
      isActionButton: false,
    }));
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <CurrentLocation children={null} />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
