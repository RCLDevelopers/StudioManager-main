import React from 'react';
import { Box, Typography, LinearProgress, useTheme } from '@mui/material';
import { getCommonHeaderStyle } from '@/utils/chartStyles';

const TargetReality = () => {
  const theme = useTheme();

  const targets = [
    {
      name: 'Sales',
      target: 100000,
      current: 85000,
      color: theme.palette.primary.main,
    },
    {
      name: 'Revenue',
      target: 50000,
      current: 45000,
      color: theme.palette.success.main,
    },
    {
      name: 'Customers',
      target: 1000,
      current: 750,
      color: theme.palette.warning.main,
    },
  ];

  return (
    <>
      <Box sx={getCommonHeaderStyle()}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
          Target vs Reality
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Progress towards business goals
        </Typography>
      </Box>
      <Box sx={{ mt: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        {targets.map((item, index) => {
          const progress = (item.current / item.target) * 100;
          return (
            <Box key={item.name} sx={{ mb: index < targets.length - 1 ? 3 : 0 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                mb: 1,
                alignItems: 'center',
              }}>
                <Typography variant="body2" color="text.secondary" fontWeight={500}>
                  {item.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600 }}>
                    {item.name === 'Customers' 
                      ? `${item.current.toLocaleString()} / ${item.target.toLocaleString()}`
                      : `$${(item.current / 1000).toFixed(1)}k / $${(item.target / 1000).toFixed(1)}k`
                    }
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: item.color,
                      fontWeight: 600,
                      backgroundColor: theme.palette.mode === 'light' 
                        ? `${item.color}15` 
                        : `${item.color}25`,
                      px: 1,
                      py: 0.25,
                      borderRadius: '4px',
                      minWidth: '40px',
                      textAlign: 'center',
                    }}
                  >
                    {progress.toFixed(0)}%
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ position: 'relative' }}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: theme.palette.mode === 'light'
                      ? `${item.color}20`
                      : `${item.color}15`,
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 4,
                      backgroundColor: item.color,
                    },
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default TargetReality;