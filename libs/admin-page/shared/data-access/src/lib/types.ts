export interface ChartDataTypes {
  label: string;
  id: string;
  value: number;
}
export type MarginPieChartTypes = {
  top: number;
  bottom: number;
  right: number;
  left: number;
};
export interface FillTypes {
  match: {
    id: string;
  };
  id: string;
}
export type BarChartTypes = {
  month: string;
  value: number;
};
