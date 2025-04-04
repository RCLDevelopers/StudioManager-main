import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];

const data = {
  realitySales: {
    value: 8823,
    data: [5000, 4200, 6500, 4800, 5500, 7500, 6800],
  },
  targetSales: {
    value: 12122,
    data: [6000, 7500, 5500, 6800, 7800, 8500, 8000],
  },
};

const TargetReality = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: months,
      axisLine: {
        lineStyle: {
          color: '#E2E8F0',
        },
      },
      axisLabel: {
        color: '#64748B',
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: '#E2E8F0',
        },
      },
      axisLabel: {
        color: '#64748B',
      },
    },
    series: [
      {
        name: 'Reality Sales',
        type: 'bar',
        data: data.realitySales.data,
        itemStyle: {
          color: '#22C55E',
          borderRadius: [4, 4, 0, 0],
        },
        barWidth: '20%',
      },
      {
        name: 'Target Sales',
        type: 'bar',
        data: data.targetSales.data,
        itemStyle: {
          color: '#FCD34D',
          borderRadius: [4, 4, 0, 0],
        },
        barWidth: '20%',
      },
    ],
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Target vs Reality
        </Typography>
        <Box sx={{ display: 'flex', gap: 4, mt: 2 }}>
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Reality Sales
            </Typography>
            <Typography variant="h4" color="success.main">
              {data.realitySales.value.toLocaleString()}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Global
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Target Sales
            </Typography>
            <Typography variant="h4" color="warning.main">
              {data.targetSales.value.toLocaleString()}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Commercial
            </Typography>
          </Box>
        </Box>
      </Box>
      <ReactEcharts
        option={option}
        style={{ height: '300px', width: '100%' }}
      />
    </Paper>
  );
};

export default TargetReality; 