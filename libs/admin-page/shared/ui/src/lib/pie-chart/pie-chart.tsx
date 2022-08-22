import {
  ChartDataTypes,
  FillTypes,
  MarginPieChartTypes,
} from '@admin-page/admin-page/shared/data-access';
import { ResponsivePie } from '@nivo/pie';
/* eslint-disable-next-line */
export interface PieChartProps {
  chartData: ChartDataTypes[];
  marginChart: MarginPieChartTypes;
  ArclinksLabel: boolean;
  fill: FillTypes[];
  colors: string[];
}

export function PieChart({
  chartData,
  marginChart,
  ArclinksLabel,
  fill,
  colors,
}: PieChartProps) {
  return (
    <ResponsivePie
      data={chartData}
      margin={marginChart}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      isInteractive={true}
      enableArcLabels={false}
      enableArcLinkLabels={ArclinksLabel}
      theme={{
        axis: { ticks: { text: { fontSize: '7px' } } },
      }}
      colors={colors}
      defs={[
        {
          id: 'TerdataColor',
          type: 'patternLines',
          background: '#FF7900',
          color: '#FF7900',
        },
        {
          id: 'TidakTerdataColor',
          type: 'patternLines',
          background: '#005D83',
          color: '#005D83',
        },
      ]}
      fill={fill}
    />
  );
}

export default PieChart;
