import { CSSProperties, forwardRef } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
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

interface ReactEchartProps {
  option: ECOption;
  style?: CSSProperties;
}

const ReactEchart = forwardRef<EChartsReactCore, ReactEchartProps>(
  ({ option, style }, ref) => {
    return (
      <EChartsReactCore
        echarts={echarts}
        option={option}
        style={style}
        ref={ref}
        notMerge={true}
        lazyUpdate={true}
      />
    );
  }
);

ReactEchart.displayName = 'ReactEchart';

export default ReactEchart; 