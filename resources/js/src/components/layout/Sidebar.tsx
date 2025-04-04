import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SecurityIcon from '@mui/icons-material/Security';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation } from 'react-router-dom';

const DRAWER_WIDTH = 280;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
}));

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

interface StyledListItemProps {
  active?: boolean;
}

const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'active',
})<StyledListItemProps>(({ theme, active }) => ({
  margin: theme.spacing(0.5, 2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: active ? theme.palette.primary.main : 'transparent',
  color: active ? theme.palette.common.white : theme.palette.text.primary,
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.action.hover,
  },
  '& .MuiListItemIcon-root': {
    color: active ? theme.palette.common.white : theme.palette.text.primary,
  },
}));

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Authentication', icon: <SecurityIcon />, path: '/auth' },
  { text: 'Leaderboard', icon: <LeaderboardIcon />, path: '/leaderboard' },
  { text: 'Order', icon: <ShoppingCartIcon />, path: '/order' },
  { text: 'Products', icon: <InventoryIcon />, path: '/products' },
  { text: 'Sales Report', icon: <AssessmentIcon />, path: '/sales' },
  { text: 'Messages', icon: <ChatIcon />, path: '/messages' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <StyledDrawer variant="permanent">
      <Logo>
        <Box
          component="img"
          src="/path-to-logo.svg"
          alt="Dabang"
          sx={{ width: 40, height: 40 }}
        />
        <Typography variant="h4" color="primary">
          Dabang
        </Typography>
      </Logo>
      <List sx={{ flexGrow: 1, py: 2 }}>
        {menuItems.map((item) => (
          <StyledListItem
            key={item.text}
            component={Link}
            to={item.path}
            active={location.pathname === item.path}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </StyledListItem>
        ))}
      </List>
      <List>
        <StyledListItem component="button" onClick={() => {}}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </StyledListItem>
      </List>
    </StyledDrawer>
  );
};

export default Sidebar; 