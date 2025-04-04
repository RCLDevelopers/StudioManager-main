import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const data = {
  loyalCustomers: [320, 332, 301, 334, 390, 330, 320, 330, 320, 302, 301, 334],
  newCustomers: [220, 182, 191, 134, 290, 330, 310, 220, 182, 191, 234, 290],
  uniqueCustomers: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190],
};

const VisitorInsights = () => {
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
      top: '4%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: months,
      boundaryGap: false,
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
        name: 'Loyal Customers',
        type: 'line',
        smooth: true,
        data: data.loyalCustomers,
        symbolSize: 6,
        itemStyle: {
          color: '#8B5CF6',
        },
        lineStyle: {
          width: 2,
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
      {
        name: 'New Customers',
        type: 'line',
        smooth: true,
        data: data.newCustomers,
        symbolSize: 6,
        itemStyle: {
          color: '#EF4444',
        },
        lineStyle: {
          width: 2,
        },
      },
      {
        name: 'Unique Customers',
        type: 'line',
        smooth: true,
        data: data.uniqueCustomers,
        symbolSize: 6,
        itemStyle: {
          color: '#22C55E',
        },
        lineStyle: {
          width: 2,
        },
      },
    ],
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Visitor Insights
        </Typography>
      </Box>
      <ReactEcharts
        option={option}
        style={{ height: '400px', width: '100%' }}
      />
    </Paper>
  );
};

export default VisitorInsights; 