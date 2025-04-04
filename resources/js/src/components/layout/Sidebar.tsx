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
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
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
  padding: '8px 12px',
  borderRadius: '6px',
  transition: 'all 0.2s ease',
  '&.Mui-selected': {
    backgroundColor: '#6366F1',
    color: '#fff',
    boxShadow: '0 1px 3px 0 rgba(99, 102, 241, 0.2)',
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
  { text: 'Dashboard', icon: <DashboardIcon fontSize="small" />, path: '/' },
  { text: 'Studios', icon: <CameraIcon fontSize="small" />, path: '/studios' },
  { text: 'Bookings', icon: <EventIcon fontSize="small" />, path: '/bookings' },
  { text: 'Equipment', icon: <PhotoCameraIcon fontSize="small" />, path: '/equipment' },
  { text: 'Payments', icon: <PaymentIcon fontSize="small" />, path: '/payments' },
  { text: 'Reports', icon: <AssessmentIcon fontSize="small" />, path: '/reports' },
  { text: 'Settings', icon: <SettingsIcon fontSize="small" />, path: '/settings' },
];

const Sidebar = ({ open, onToggle, isMobile }: SidebarProps) => {
  const theme = useTheme();
  const location = useLocation();

  const sidebarContent = (
    <Box sx={{ overflow: 'auto', height: '100%', py: 1.5 }}>
      <Box sx={{ 
        px: { xs: 1, sm: 1.5 }, 
        mb: 2, 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: open ? 'flex-start' : 'center',
        ml: open ? 1 : 0,
      }}>
        <img 
          src="/logo.png" 
          alt="Logo" 
          style={{ 
            height: '32px',
            width: 'auto',
          }} 
        />
        {open && (
          <Box sx={{ ml: 1.5, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ 
              fontSize: '1.125rem', 
              fontWeight: 600,
              color: '#6366F1',
              lineHeight: 1.2,
            }}>
              Studio
            </Box>
            <Box sx={{ 
              fontSize: '0.75rem',
              color: '#64748B',
              lineHeight: 1.2,
            }}>
              Manager
            </Box>
          </Box>
        )}
      </Box>

      <List sx={{ px: 0 }}>
        {menuItems.map((item) => {
          const StyledLink = styled(Link)({
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            width: '100%',
          });

          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <StyledLink to={item.path}>
                <StyledListItemButton
                  selected={location.pathname === item.path}
                  sx={{
                    minHeight: 40,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2,
                    width: '100%',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1.5 : 'auto',
                      justifyContent: 'center',
                      color: location.pathname === item.path ? '#fff' : '#64748B',
                      fontSize: '1.25rem',
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
                          fontSize: '0.813rem',
                          fontWeight: location.pathname === item.path ? 600 : 500,
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
            boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
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