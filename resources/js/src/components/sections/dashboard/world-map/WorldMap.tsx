import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

const data = {
  volume: 1128,
  services: 1719,
  regions: [
    { name: 'Brazil', value: 300 },
    { name: 'United States', value: 500 },
    { name: 'India', value: 400 },
    { name: 'Indonesia', value: 350 },
  ],
};

const WorldMap = () => {
  const option = {
    backgroundColor: '#fff',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: data.regions.map(region => region.name),
      axisLabel: {
        color: '#64748B'
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#64748B'
      }
    },
    series: [
      {
        name: 'Visitors',
        type: 'bar',
        data: data.regions.map(region => ({
          value: region.value,
          itemStyle: {
            color: '#3B82F6'
          }
        })),
        emphasis: {
          itemStyle: {
            color: '#2563EB'
          }
        },
        barWidth: '60%'
      }
    ]
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Visitor Insights</Typography>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Box>
            <Typography variant="h4" color="primary">
              {data.volume.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Volume
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" color="success.main">
              {data.services.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Services
            </Typography>
          </Box>
        </Box>
      </Box>
      <ReactEcharts
        option={option}
        style={{ height: '400px', width: '100%' }}
        opts={{ renderer: 'canvas' }}
      />
    </Paper>
  );
};

export default WorldMap; 