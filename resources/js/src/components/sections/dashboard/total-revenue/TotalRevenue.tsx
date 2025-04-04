import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
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
        min: 25000,
        max: 55000,
        ticks: {
          stepSize: 5000,
          callback: function(value: any) {
            return `$${(value / 1000).toFixed(0)}k`;
          },
          font: {
            family: theme.typography.fontFamily,
            size: 12,
          },
          color: theme.palette.text.secondary,
        },
        grid: {
          color: theme.palette.divider,
          borderDash: [5, 5],
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
            Total Revenue
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Monthly revenue statistics
          </Typography>
        </Box>
        <Box sx={{ height: 350, width: '100%' }}>
          <Line data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalRevenue;