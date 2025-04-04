import React from 'react';
import { Box, Card, CardContent, Typography, LinearProgress, useTheme } from '@mui/material';

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
    <Card sx={{ 
      height: '100%',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    }}>
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Target vs Reality
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Progress towards business goals
          </Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          {targets.map((item, index) => {
            const progress = (item.current / item.target) * 100;
            return (
              <Box key={item.name} sx={{ mb: index < targets.length - 1 ? 4 : 0 }}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  mb: 1,
                }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle2" color="text.primary" sx={{ fontWeight: 600 }}>
                    {item.name === 'Customers' 
                      ? `${item.current.toLocaleString()} / ${item.target.toLocaleString()}`
                      : `$${(item.current / 1000).toFixed(1)}k / $${(item.target / 1000).toFixed(1)}k`
                    }
                  </Typography>
                </Box>
                <Box sx={{ position: 'relative' }}>
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: `${item.color}20`,
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 4,
                        backgroundColor: item.color,
                      },
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      position: 'absolute',
                      right: 0,
                      top: -20,
                      color: item.color,
                      fontWeight: 600,
                    }}
                  >
                    {progress.toFixed(0)}%
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TargetReality;