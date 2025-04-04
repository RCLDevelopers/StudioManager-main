import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const data = {
  onlineSales: [14000, 17000, 5000, 16000, 11000, 15000, 22000],
  offlineSales: [11000, 10000, 22000, 5000, 11000, 14000, 10000],
};

const TotalRevenue = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['Online Sales', 'Offline Sales'],
      bottom: 0,
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        color: '#64748B',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '4%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: days,
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
        formatter: (value: number) => `${value / 1000}k`,
      },
    },
    series: [
      {
        name: 'Online Sales',
        type: 'bar',
        data: data.onlineSales,
        itemStyle: {
          color: '#3B82F6',
          borderRadius: [4, 4, 0, 0],
        },
        barWidth: '20%',
      },
      {
        name: 'Offline Sales',
        type: 'bar',
        data: data.offlineSales,
        itemStyle: {
          color: '#22C55E',
          borderRadius: [4, 4, 0, 0],
        },
        barWidth: '20%',
      },
    ],
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Total Revenue
        </Typography>
      </Box>
      <ReactEcharts
        option={option}
        style={{ height: '400px', width: '100%' }}
      />
    </Paper>
  );
};

export default TotalRevenue; 