import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { getCommonHeaderStyle, getCommonChartContainerStyle } from '@/utils/chartStyles';

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
          padding: 15,
          font: {
            family: theme.typography.fontFamily,
            size: 11,
          },
          color: theme.palette.text.secondary,
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
    <>
      <Box sx={getCommonHeaderStyle()}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
          Customer Satisfaction
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Overall customer satisfaction rate
        </Typography>
      </Box>
      <Box sx={{ 
        ...getCommonChartContainerStyle(),
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
          zIndex: 1,
        }}>
          <Typography variant="h3" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
            70%
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Satisfaction Rate
          </Typography>
        </Box>
        <Doughnut data={data} options={options} />
      </Box>
    </>
  );
};

export default CustomerSatisfaction;