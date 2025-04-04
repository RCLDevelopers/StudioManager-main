import React from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useThemeContext } from '@/theme/ThemeContext';

interface ThemeToggleProps {
  sx?: any;
}

const ThemeToggle = ({ sx = {} }: ThemeToggleProps) => {
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  
  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          color: mode === 'light' ? '#64748B' : '#CBD5E1',
          backgroundColor: mode === 'light' ? '#F1F5F9' : 'rgba(255, 255, 255, 0.05)',
          padding: '6px',
          '&:hover': {
            backgroundColor: mode === 'light' ? '#E2E8F0' : 'rgba(255, 255, 255, 0.1)',
          },
          transition: theme.transitions.create(['background-color', 'color'], {
            duration: theme.transitions.duration.standard,
          }),
          ...sx,
        }}
      >
        {mode === 'light' ? (
          <DarkModeOutlinedIcon sx={{ fontSize: '1.25rem' }} />
        ) : (
          <LightModeOutlinedIcon sx={{ fontSize: '1.25rem' }} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
