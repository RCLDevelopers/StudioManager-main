import React, { MutableRefObject, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
  TooltipComponentOption,
  GridComponentOption,
  LegendComponentOption,
} from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import ReactEchart from '@/components/common/ReactEchart';
import EChartsReactCore from 'echarts-for-react/lib/core';

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

type ECOption = echarts.ComposeOption<
  TooltipComponentOption | GridComponentOption | LegendComponentOption | LineSeriesOption
>;

interface CustomerSatisfactionChartProps {
  chartRef: MutableRefObject<EChartsReactCore | null>;
  data: {
    lastMonth: number[];
    thisMonth: number[];
  };
  style?: React.CSSProperties;
}

const CustomerSatisfactionChart = ({ chartRef, data, style }: CustomerSatisfactionChartProps) => {
  const theme = useTheme();

  const customerSatisfactionChartOption: ECOption = useMemo(() => {
    return {
      tooltip: {
        trigger: 'axis' as const,
        axisPointer: {
          type: 'cross' as const,
          label: {
            backgroundColor: theme.palette.grey[500],
          },
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category' as const,
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value' as const,
      },
      series: [
        {
          name: 'Last Month',
          type: 'line' as const,
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 2,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.2,
          },
          emphasis: {
            focus: 'series',
          },
          data: data.lastMonth,
        },
        {
          name: 'This Month',
          type: 'line' as const,
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 2,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.2,
          },
          emphasis: {
            focus: 'series',
          },
          data: data.thisMonth,
        },
      ],
    };
  }, [data, theme.palette.grey]);

  return (
    <ReactEchart
      option={customerSatisfactionChartOption}
      ref={chartRef}
      style={style}
    />
  );
};

export default CustomerSatisfactionChart; 