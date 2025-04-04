import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  change: number;
  bgColor: string;
  iconColor: string;
}

const IconWrapper = styled(Box)<{ bgcolor: string }>(({ theme, bgcolor }) => ({
  width: 48,
  height: 48,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: bgcolor,
  marginBottom: theme.spacing(2),
}));

const StatCard = ({ icon, title, value, change, bgColor, iconColor }: StatCardProps) => {
  const isPositive = change >= 0;

  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <IconWrapper bgcolor={bgColor}>
        <Box sx={{ color: iconColor, '& > svg': { fontSize: 24 } }}>
          {icon}
        </Box>
      </IconWrapper>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {value}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {isPositive ? (
          <TrendingUpIcon sx={{ color: 'success.main', fontSize: 20 }} />
        ) : (
          <TrendingDownIcon sx={{ color: 'error.main', fontSize: 20 }} />
        )}
        <Typography
          variant="body2"
          color={isPositive ? 'success.main' : 'error.main'}
        >
          {Math.abs(change)}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last day
        </Typography>
      </Box>
    </Paper>
  );
};

export default StatCard; 