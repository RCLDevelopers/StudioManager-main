import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { getCommonChartOptions, getCommonChartContainerStyle, getCommonHeaderStyle } from '@/utils/chartStyles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const VisitorInsights = () => {
  const theme = useTheme();
  const commonOptions = getCommonChartOptions(theme);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Loyal Customers',
        data: [400, 380, 350, 450, 380, 350, 400, 380, 350, 450, 380, 350],
        borderColor: theme.palette.primary.main,
        backgroundColor: `${theme.palette.primary.main}20`,
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'New Customers',
        data: [300, 350, 300, 350, 300, 350, 300, 350, 300, 350, 300, 350],
        borderColor: theme.palette.secondary.main,
        backgroundColor: `${theme.palette.secondary.main}20`,
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'Unique Customers',
        data: [200, 250, 200, 250, 200, 250, 200, 250, 200, 250, 200, 250],
        borderColor: '#F59E0B',
        backgroundColor: '#F59E0B20',
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    ...commonOptions,
    plugins: {
      ...commonOptions.plugins,
      legend: {
        display: true,
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 10,
          font: {
            family: theme.typography.fontFamily,
            size: 11,
          },
          color: theme.palette.text.secondary,
        },
      },
    },
    scales: {
      ...commonOptions.scales,
      y: {
        ...commonOptions.scales.y,
        min: 0,
        max: 500,
        ticks: {
          ...commonOptions.scales.y.ticks,
          stepSize: 100,
        },
      },
    },
  };

  return (
    <>
      <Box sx={getCommonHeaderStyle()}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
          Visitor Insights
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Monthly visitor statistics
        </Typography>
      </Box>
      <Box sx={getCommonChartContainerStyle()}>
        <Line data={data} options={options} />
      </Box>
    </>
  );
};

export default VisitorInsights;