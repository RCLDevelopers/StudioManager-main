import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WorldMap = () => {
  const theme = useTheme();

  const data = {
    labels: ['USA', 'UK', 'Canada', 'Australia', 'Germany'],
    datasets: [
      {
        label: 'Revenue',
        data: [65000, 45000, 35000, 28000, 25000],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.success.main,
          theme.palette.warning.main,
          theme.palette.error.main,
        ],
        borderRadius: 8,
        barThickness: 24,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        titleFont: {
          family: theme.typography.fontFamily,
          size: 14,
          weight: 600,
        },
        bodyFont: {
          family: theme.typography.fontFamily,
          size: 13,
        },
        callbacks: {
          label: function(context: any) {
            return `$${context.parsed.y.toLocaleString()}`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: theme.typography.fontFamily,
            size: 12,
          },
          color: theme.palette.text.secondary,
        },
      },
      y: {
        grid: {
          color: theme.palette.divider,
          borderDash: [5, 5],
        },
        ticks: {
          font: {
            family: theme.typography.fontFamily,
            size: 12,
          },
          color: theme.palette.text.secondary,
          callback: function(value: any) {
            return `$${(value / 1000).toFixed(0)}k`;
          },
        },
      },
    },
  };

  return (
    <Card sx={{ 
      height: '100%',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    }}>
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Revenue by Region
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Top performing regions
          </Typography>
        </Box>
        <Box sx={{ height: 350, width: '100%' }}>
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default WorldMap;