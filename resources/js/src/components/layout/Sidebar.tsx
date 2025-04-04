import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, useTheme, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CameraIcon from '@mui/icons-material/Camera';
import EventIcon from '@mui/icons-material/Event';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PaymentIcon from '@mui/icons-material/Payment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

const drawerWidth = 240;
const collapsedWidth = 72;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: '#F8FAFC',
    overflowX: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  '&.collapsed .MuiDrawer-paper': {
    width: collapsedWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  margin: '4px 8px',
  padding: '10px 16px',
  borderRadius: '12px',
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    '& .MuiListItemIcon-root': {
      color: '#fff',
    },
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Studios', icon: <CameraIcon />, path: '/studios' },
  { text: 'Bookings', icon: <EventIcon />, path: '/bookings' },
  { text: 'Equipment', icon: <PhotoCameraIcon />, path: '/equipment' },
  { text: 'Payments', icon: <PaymentIcon />, path: '/payments' },
  { text: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

const Sidebar = ({ open, onToggle }: SidebarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const drawer = (
    <Box sx={{ overflow: 'auto', height: '100%', py: 2 }}>
      <Box sx={{ 
        px: { xs: 1, sm: 2 }, 
        mb: 4, 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img 
          src="/logo.png" 
          alt="Logo" 
          style={{ 
            height: '40px',
            width: 'auto',
          }} 
        />
        {open && (
          <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ 
              fontSize: '1.25rem', 
              fontWeight: 600,
              color: theme.palette.primary.main,
              lineHeight: 1.2,
            }}>
              Studio
            </Box>
            <Box sx={{ 
              fontSize: '0.875rem',
              color: theme.palette.text.secondary,
            }}>
              Manager
            </Box>
          </Box>
        )}
      </Box>

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <StyledListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              {open && (
                <ListItemText 
                  primary={item.text}
                  sx={{
                    opacity: 1,
                    '& .MuiListItemText-primary': {
                      fontSize: '0.875rem',
                      fontWeight: location.pathname === item.path ? 600 : 400,
                    },
                  }}
                />
              )}
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledDrawer
      variant="permanent"
      className={open ? '' : 'collapsed'}
    >
      {drawer}
    </StyledDrawer>
  );
};

export default Sidebar;