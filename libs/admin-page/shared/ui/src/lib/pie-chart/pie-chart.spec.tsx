import { render } from '@testing-library/react';

import PieChart from './pie-chart';

describe('PieChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PieChart
        chartData={[]}
        marginChart={{
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
        ArclinksLabel={false}
        fill={[]}
        colors={[]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
