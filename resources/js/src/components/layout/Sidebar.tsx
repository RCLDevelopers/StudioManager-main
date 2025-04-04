import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, SwipeableDrawer, useTheme } from '@mui/material';
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
  isMobile: boolean;
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
    backgroundColor: '#fff',
    overflowX: 'hidden',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
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
  margin: '4px 12px',
  padding: '10px 12px',
  borderRadius: '8px',
  '&.Mui-selected': {
    backgroundColor: '#6366F1',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#4F46E5',
    },
    '& .MuiListItemIcon-root': {
      color: '#fff',
    },
  },
  '&:hover': {
    backgroundColor: '#F1F5F9',
  },
}));

interface NavItem {
  text: string;
  icon: JSX.Element;
  path: string;
}

const menuItems: NavItem[] = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Studios', icon: <CameraIcon />, path: '/studios' },
  { text: 'Bookings', icon: <EventIcon />, path: '/bookings' },
  { text: 'Equipment', icon: <PhotoCameraIcon />, path: '/equipment' },
  { text: 'Payments', icon: <PaymentIcon />, path: '/payments' },
  { text: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

const Sidebar = ({ open, onToggle, isMobile }: SidebarProps) => {
  const theme = useTheme();
  const location = useLocation();

  const sidebarContent = (
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
              color: '#6366F1',
              lineHeight: 1.2,
            }}>
              Studio
            </Box>
            <Box sx={{ 
              fontSize: '0.875rem',
              color: '#64748B',
            }}>
              Manager
            </Box>
          </Box>
        )}
      </Box>

      <List>
        {menuItems.map((item) => {
          const StyledLink = styled(Link)({
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            width: '100%',
          });

          return (
            <ListItem key={item.text} disablePadding>
              <StyledLink to={item.path}>
                <StyledListItemButton
                  selected={location.pathname === item.path}
                  sx={{
                    minHeight: 44,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    width: '100%',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : 'auto',
                      justifyContent: 'center',
                      color: location.pathname === item.path ? '#fff' : '#64748B',
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
                          color: location.pathname === item.path ? '#fff' : '#64748B',
                        },
                      }}
                    />
                  )}
                </StyledListItemButton>
              </StyledLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  if (isMobile) {
    return (
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={onToggle}
        onOpen={onToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: '#fff',
            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          },
        }}
      >
        {sidebarContent}
      </SwipeableDrawer>
    );
  }

  return (
    <StyledDrawer
      variant="permanent"
      className={open ? '' : 'collapsed'}
    >
      {sidebarContent}
    </StyledDrawer>
  );
};

export default Sidebar;