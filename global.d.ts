declare module "react-trend" {
  import * as React from "react";

  export interface TrendProps {
    data: number[];
    smooth?: boolean;
    autoDraw?: boolean;
    autoDrawDuration?: number;
    autoDrawEasing?: string;
    gradient?: string[];
    radius?: number;
    strokeWidth?: number;
    strokeLinecap?: "butt" | "round" | "square";
    width?: number | string;
    height?: number | string;
    padding?: number;
    className?: string;
    style?: React.CSSProperties;
  }

  const Trend: React.FC<TrendProps>;

  export default Trend;
}

// global.d.ts
declare module "react-apexcharts" {
  import * as React from "react";
  import { ApexOptions, ApexAxisChartSeries, ApexNonAxisChartSeries } from "apexcharts";

  export interface ReactApexChartProps {
    type?: ApexOptions["chart"]["type"];
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    width?: string | number;
    height?: string | number;
    options?: ApexOptions;
  }

  export default class ReactApexChart extends React.Component<ReactApexChartProps> {}
}
