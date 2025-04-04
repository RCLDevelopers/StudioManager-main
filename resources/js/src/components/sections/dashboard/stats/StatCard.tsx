import React from 'react';
import { Box, Paper, Typography, useTheme, useMediaQuery } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { styled } from '@mui/material/styles';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: number;
  bgColor: string;
  iconColor: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const IconWrapper = styled(Box)<{ bgcolor: string }>(({ theme, bgcolor }) => ({
  width: 48,
  height: 48,
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: bgcolor,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    width: 40,
    height: 40,
    '& > svg': {
      fontSize: '1.25rem',
    },
  },
}));

const StatCard = ({ icon, title, value, change, bgColor, iconColor }: StatCardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isPositive = change >= 0;

  return (
    <StyledPaper>
      <IconWrapper bgcolor={bgColor}>
        <Box sx={{ color: iconColor, '& > svg': { fontSize: isMobile ? 20 : 24 } }}>
          {icon}
        </Box>
      </IconWrapper>
      <Typography 
        variant="subtitle2" 
        sx={{
          fontSize: isMobile ? '0.75rem' : '0.875rem',
          color: '#64748B',
          mb: 0.5,
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="h4" 
        sx={{
          fontSize: isMobile ? '1.5rem' : '1.75rem',
          fontWeight: 600,
          color: '#1E293B',
          mb: 1,
        }}
      >
        {value}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {isPositive ? (
          <TrendingUpIcon sx={{ color: '#22C55E', fontSize: isMobile ? 16 : 20 }} />
        ) : (
          <TrendingDownIcon sx={{ color: '#EF4444', fontSize: isMobile ? 16 : 20 }} />
        )}
        <Typography 
          variant="body2" 
          sx={{ 
            fontSize: isMobile ? '0.75rem' : '0.875rem',
            color: isPositive ? '#22C55E' : '#EF4444',
            fontWeight: 500,
          }}
        >
          {Math.abs(change)}% {isPositive ? 'increase' : 'decrease'}
        </Typography>
      </Box>
    </StyledPaper>
  );
};

export default StatCard;