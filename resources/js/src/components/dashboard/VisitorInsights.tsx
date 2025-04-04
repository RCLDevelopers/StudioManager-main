import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions, TooltipItem } from 'chart.js';

const SystemFeaturesInsights = () => {
  const theme = useTheme();

  const data: ChartData<'bar'> = {
    labels: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
    datasets: [
      {
        label: 'Number of Customers',
        data: [120, 90, 150, 80],
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.dark,
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'bar'>) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <Box className="MuiBox-root css-nfsv81" sx={{ mt: 4, p: 2, boxShadow: 1, borderRadius: 2, backgroundColor: theme.palette.background.paper }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        System Features Insights
      </Typography>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default SystemFeaturesInsights;
