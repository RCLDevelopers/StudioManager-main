import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItemButton,
  Collapse,
  IconButton,
} from '@mui/material';
import { styled, useTheme, alpha } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StudioIcon from '@mui/icons-material/Camera';
import BookingsIcon from '@mui/icons-material/CalendarMonth';
import PaymentsIcon from '@mui/icons-material/Payments';
import EquipmentIcon from '@mui/icons-material/PhotoCamera';
import ReportsIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';

const DRAWER_WIDTH = 260;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  gap: theme.spacing(1),
  '& img': {
    height: 32,
  },
  '& .logo-text': {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: theme.palette.primary.main,
  }
}));

const StyledListItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  borderRadius: '0.5rem',
  marginBottom: '4px',
  padding: '10px 12px',
  margin: '0 8px',
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  backgroundColor: active ? alpha(theme.palette.primary.main, 0.08) : 'transparent',
  '&:hover': {
    backgroundColor: active 
      ? alpha(theme.palette.primary.main, 0.12)
      : alpha(theme.palette.primary.main, 0.04),
  },
  '& .MuiListItemIcon-root': {
    minWidth: 40,
    color: 'inherit',
  },
  '& .MuiListItemText-primary': {
    fontSize: '0.875rem',
    fontWeight: active ? 600 : 500,
  },
}));

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Studios', icon: <StudioIcon />, path: '/studios' },
  { text: 'Bookings', icon: <BookingsIcon />, path: '/bookings' },
  { text: 'Equipment', icon: <EquipmentIcon />, path: '/equipment' },
  { text: 'Payments', icon: <PaymentsIcon />, path: '/payments' },
  { text: 'Reports', icon: <ReportsIcon />, path: '/reports' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

const Sidebar = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <StyledDrawer
      variant="permanent"
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          width: open ? DRAWER_WIDTH : theme.spacing(9),
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      <Logo>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src="/logo.svg" alt="Logo" style={{ height: 32 }} />
          {open && (
            <Typography variant="h6" className="logo-text" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
              Studio Manager
            </Typography>
          )}
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Logo>

      <List sx={{ px: 1, pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <StyledListItem
              active={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: 'inherit',
                }}
              >
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </StyledListItem>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;