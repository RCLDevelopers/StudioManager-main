import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  VisualMapComponent,
  GeoComponent
} from 'echarts/components';
import { MapChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  MapChart,
  CanvasRenderer
]);

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
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}',
    },
    visualMap: {
      min: 0,
      max: 500,
      text: ['High', 'Low'],
      realtime: false,
      calculable: true,
      inRange: {
        color: ['#DBEAFE', '#3B82F6'],
      },
      textStyle: {
        color: '#64748B',
      },
    },
    series: [
      {
        name: 'World Map',
        type: 'map',
        map: 'world',
        roam: true,
        emphasis: {
          label: {
            show: true,
          },
        },
        data: data.regions,
      },
    ],
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
      />
    </Paper>
  );
};

export default WorldMap; 