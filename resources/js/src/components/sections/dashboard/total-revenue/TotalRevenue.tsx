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

const TotalRevenue = () => {
  const theme = useTheme();
  const commonOptions = getCommonChartOptions(theme);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Revenue',
        data: [30000, 35000, 32000, 38000, 35000, 40000, 38000, 42000, 45000, 43000, 48000, 50000],
        borderColor: theme.palette.primary.main,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, `${theme.palette.primary.main}40`);
          gradient.addColorStop(1, `${theme.palette.primary.main}00`);
          return gradient;
        },
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      }
    ],
  };

  const options = {
    ...commonOptions,
    plugins: {
      ...commonOptions.plugins,
      legend: {
        display: false,
      },
      tooltip: {
        ...commonOptions.plugins.tooltip,
        callbacks: {
          label: function(context: any) {
            return `$${context.parsed.y.toLocaleString()}`;
          }
        }
      },
    },
    scales: {
      ...commonOptions.scales,
      y: {
        ...commonOptions.scales.y,
        min: 25000,
        max: 55000,
        ticks: {
          ...commonOptions.scales.y.ticks,
          stepSize: 5000,
          callback: function(value: any) {
            return `$${(value / 1000).toFixed(0)}k`;
          },
        },
      },
    },
  };

  return (
    <>
      <Box sx={getCommonHeaderStyle()}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
          Total Revenue
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Monthly revenue statistics
        </Typography>
      </Box>
      <Box sx={getCommonChartContainerStyle()}>
        <Line data={data} options={options} />
      </Box>
    </>
  );
};

export default TotalRevenue;