import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const CustomerSatisfaction = () => {
  const theme = useTheme();

  const data = {
    labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied'],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: [
          theme.palette.success.main,
          theme.palette.primary.main,
          theme.palette.warning.main,
          theme.palette.error.main,
        ],
        borderWidth: 0,
        spacing: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
      legend: {
        position: 'bottom' as const,
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
        callbacks: {
          label: function(context: any) {
            return `${context.parsed}%`;
          }
        }
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
            Customer Satisfaction
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Overall customer satisfaction rate
          </Typography>
        </Box>
        <Box sx={{ 
          height: 300,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <Box sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Typography variant="h3" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
              70%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Satisfaction Rate
            </Typography>
          </Box>
          <Doughnut data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomerSatisfaction;