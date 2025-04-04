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
  padding: theme.spacing(2),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
}));

const IconWrapper = styled(Box)<{ bgcolor: string }>(({ theme, bgcolor }) => ({
  width: 40,
  height: 40,
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: bgcolor,
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    width: 32,
    height: 32,
    marginBottom: theme.spacing(1),
    '& > svg': {
      fontSize: '1.125rem',
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
        <Box sx={{ color: iconColor, '& > svg': { fontSize: isMobile ? 16 : 20 } }}>
          {icon}
        </Box>
      </IconWrapper>
      <Typography 
        variant="subtitle2" 
        sx={{
          fontSize: isMobile ? '0.688rem' : '0.75rem',
          color: '#64748B',
          mb: 0.25,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="h4" 
        sx={{
          fontSize: isMobile ? '1.125rem' : '1.25rem',
          fontWeight: 600,
          color: '#1E293B',
          mb: 0.5,
          lineHeight: 1.2,
        }}
      >
        {value}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
        {isPositive ? (
          <TrendingUpIcon sx={{ color: '#22C55E', fontSize: isMobile ? 14 : 16 }} />
        ) : (
          <TrendingDownIcon sx={{ color: '#EF4444', fontSize: isMobile ? 14 : 16 }} />
        )}
        <Typography 
          variant="body2" 
          sx={{ 
            fontSize: isMobile ? '0.688rem' : '0.75rem',
            color: isPositive ? '#22C55E' : '#EF4444',
            fontWeight: 500,
            whiteSpace: 'nowrap',
          }}
        >
          {Math.abs(change)}% {isPositive ? 'increase' : 'decrease'}
        </Typography>
      </Box>
    </StyledPaper>
  );
};

export default StatCard;