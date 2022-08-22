import { BarChartTypes } from '@admin-page/admin-page/shared/data-access';
import { ResponsiveBar } from '@nivo/bar';

/* eslint-disable-next-line */
export interface BarChartProps {
  barChartData: BarChartTypes[];
}

export function BarChart({ barChartData }: BarChartProps) {
  return (
    <ResponsiveBar
      data={barChartData}
      keys={['value']}
      indexBy="month"
      margin={{ top: 50, right: 10, bottom: 50, left: 10 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={['#00C1DE']}
      defs={[
        {
          id: 'value',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'value',
          },
          id: 'value',
        },
      ]}
      axisTop={null}
      axisRight={null}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
        },
      ]}
      role="application"
      ariaLabel="Nilai produksi Dalam miliar Rupiah"
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue;
      }}
    />
  );
}

export default BarChart;
