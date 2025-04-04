import React from 'react';
import { Box, Paper, Typography, styled, useTheme } from '@mui/material';
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

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  borderRadius: '1rem',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
}));

const IconWrapper = styled(Box)<{ bgcolor: string }>(({ theme, bgcolor }) => ({
  width: 52,
  height: 52,
  borderRadius: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: bgcolor,
  marginBottom: theme.spacing(2),
  transition: 'transform 0.2s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    width: 40,
    height: 40,
    borderRadius: '0.75rem',
    marginBottom: theme.spacing(1.5),
    '& > svg': {
      fontSize: '1.25rem !important',
    },
  },
}));

const StatCard = ({ icon, title, value, change, bgColor, iconColor }: StatCardProps) => {
  const theme = useTheme();
  const isPositive = change >= 0;

  return (
    <StyledPaper>
      <IconWrapper bgcolor={bgColor}>
        <Box sx={{ 
          color: iconColor, 
          '& > svg': { 
            fontSize: 28,
            [theme.breakpoints.down('sm')]: {
              fontSize: 20,
            },
          } 
        }}>
          {icon}
        </Box>
      </IconWrapper>
      <Typography 
        variant="subtitle2" 
        color="text.secondary" 
        sx={{ 
          mb: 0.5,
          [theme.breakpoints.down('sm')]: {
            fontSize: '0.75rem',
          },
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 1,
          [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
          },
        }}
      >
        {value}
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 0.5,
        [theme.breakpoints.down('sm')]: {
          gap: 0.25,
        },
      }}>
        {isPositive ? (
          <TrendingUpIcon sx={{ 
            color: 'success.main', 
            fontSize: 20,
            [theme.breakpoints.down('sm')]: {
              fontSize: 16,
            },
          }} />
        ) : (
          <TrendingDownIcon sx={{ 
            color: 'error.main', 
            fontSize: 20,
            [theme.breakpoints.down('sm')]: {
              fontSize: 16,
            },
          }} />
        )}
        <Typography 
          variant="body2" 
          color={isPositive ? 'success.main' : 'error.main'}
          sx={{
            [theme.breakpoints.down('sm')]: {
              fontSize: '0.75rem',
            },
          }}
        >
          {Math.abs(change)}% {isPositive ? 'increase' : 'decrease'}
        </Typography>
      </Box>
    </StyledPaper>
  );
};

export default StatCard;