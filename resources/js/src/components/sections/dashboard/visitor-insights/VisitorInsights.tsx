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

const VisitorInsights = () => {
  const theme = useTheme();

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
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            family: theme.typography.fontFamily,
            size: 12,
          },
        },
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
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100,
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
            Visitor Insights
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Monthly visitor statistics
          </Typography>
        </Box>
        <Box sx={{ height: 350, width: '100%' }}>
          <Line data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default VisitorInsights;