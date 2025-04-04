import { Theme } from '@mui/material';

export const getCommonChartOptions = (theme: Theme) => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: true,
          color: theme.palette.divider,
          borderDash: [5, 5],
          drawBorder: true,
          drawTicks: true,
        },
        border: {
          display: true,
          color: theme.palette.divider,
        },
        ticks: {
          font: {
            family: theme.typography.fontFamily,
            size: 11,
          },
          color: theme.palette.text.secondary,
          padding: 8,
        },
      },
      y: {
        display: true,
        grid: {
          display: true,
          color: theme.palette.divider,
          borderDash: [5, 5],
          drawBorder: true,
          drawTicks: true,
        },
        border: {
          display: true,
          color: theme.palette.divider,
        },
        ticks: {
          font: {
            family: theme.typography.fontFamily,
            size: 11,
          },
          color: theme.palette.text.secondary,
          padding: 8,
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  };
};

export const getCommonCardStyle = (theme: Theme) => {
  return {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    boxShadow: theme.shadows[1],
    overflow: 'hidden',
  };
};

export const getCommonChartContainerStyle = () => {
  return {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    position: 'relative',
    minHeight: '250px',
  };
};

export const getCommonHeaderStyle = () => {
  return {
    mb: 2,
    display: 'flex',
    flexDirection: 'column',
  };
};
