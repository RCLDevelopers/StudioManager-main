import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import TaskIcon from '@mui/icons-material/Task';
import { useThemeContext } from '@/theme/ThemeContext';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  variant: 'permanent' | 'persistent' | 'temporary';
}

const menuItems = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <DashboardIcon />,
    children: [],
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <CalendarMonthIcon />,
    children: [],
  },
  {
    title: 'Clients',
    path: '/clients',
    icon: <PeopleIcon />,
    children: [
      { title: 'Client List', path: '/clients' },
      { title: 'Add Client', path: '/clients/add' },
      { title: 'Client Groups', path: '/clients/groups' },
    ],
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <LayersIcon />,
    children: [
      { title: 'Project List', path: '/projects' },
      { title: 'Add Project', path: '/projects/add' },
      { title: 'Project Categories', path: '/projects/categories' },
    ],
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: <ShoppingCartIcon />,
    children: [
      { title: 'Order List', path: '/orders' },
      { title: 'Add Order', path: '/orders/add' },
      { title: 'Order Status', path: '/orders/status' },
    ],
  },
  {
    title: 'Tasks',
    path: '/tasks',
    icon: <TaskIcon />,
    children: [],
  },
  {
    title: 'Email',
    path: '/email',
    icon: <EmailIcon />,
    children: [],
  },
  {
    title: 'Chat',
    path: '/chat',
    icon: <ChatIcon />,
    children: [],
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: <BarChartIcon />,
    children: [],
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />,
    children: [],
  },
];

const Sidebar = ({ open, onClose, variant }: SidebarProps) => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode } = useThemeContext();
  const isDark = mode === 'dark';
  
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenuClick = (title: string) => {
    setOpenSubMenu(openSubMenu === title ? null : title);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isParentActive = (item: any) => {
    if (isActive(item.path)) return true;
    if (item.children.length > 0) {
      return item.children.some((child: any) => isActive(child.path));
    }
    return false;
  };

  const drawerWidth = 260;

  const drawer = (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%',
      backgroundColor: theme.palette.background.paper,
    }}>
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            fontWeight: 700, 
            color: theme.palette.primary.main,
            fontSize: '1.25rem',
            letterSpacing: '0.5px',
          }}
        >
          Studio Manager
        </Typography>
      </Box>
      <Box sx={{ 
        flexGrow: 1, 
        overflow: 'auto',
        py: 2,
        px: 1.5,
      }}>
        <List component="nav" sx={{ width: '100%' }}>
          {menuItems.map((item) => (
            <React.Fragment key={item.title}>
              <ListItemButton
                component={item.children.length > 0 ? 'div' : Link}
                to={item.children.length > 0 ? undefined : item.path}
                onClick={() => item.children.length > 0 ? handleSubMenuClick(item.title) : null}
                sx={{
                  mb: 0.5,
                  borderRadius: '6px',
                  py: 1,
                  color: isParentActive(item) 
                    ? '#fff' 
                    : theme.palette.text.primary,
                  backgroundColor: isParentActive(item) 
                    ? theme.palette.primary.main 
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: isParentActive(item) 
                      ? theme.palette.primary.dark 
                      : isDark 
                        ? 'rgba(255, 255, 255, 0.05)' 
                        : 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <ListItemIcon sx={{ 
                  minWidth: 40,
                  color: isParentActive(item) 
                    ? '#fff' 
                    : theme.palette.text.secondary,
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.title} 
                  primaryTypographyProps={{ 
                    fontSize: '0.875rem',
                    fontWeight: isParentActive(item) ? 600 : 500,
                  }}
                />
                {item.children.length > 0 && (
                  openSubMenu === item.title ? <ExpandLess /> : <ExpandMore />
                )}
              </ListItemButton>
              {item.children.length > 0 && (
                <Collapse in={openSubMenu === item.title} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <ListItemButton
                        key={child.title}
                        component={Link}
                        to={child.path}
                        sx={{
                          pl: 6,
                          py: 0.75,
                          mb: 0.5,
                          borderRadius: '6px',
                          color: isActive(child.path) 
                            ? theme.palette.primary.main 
                            : theme.palette.text.secondary,
                          backgroundColor: isActive(child.path) 
                            ? isDark 
                              ? 'rgba(99, 102, 241, 0.15)' 
                              : 'rgba(99, 102, 241, 0.08)' 
                            : 'transparent',
                          '&:hover': {
                            backgroundColor: isActive(child.path) 
                              ? isDark 
                                ? 'rgba(99, 102, 241, 0.2)' 
                                : 'rgba(99, 102, 241, 0.12)' 
                              : isDark 
                                ? 'rgba(255, 255, 255, 0.05)' 
                                : 'rgba(0, 0, 0, 0.04)',
                          },
                        }}
                      >
                        <ListItemText 
                          primary={child.title} 
                          primaryTypographyProps={{ 
                            fontSize: '0.813rem',
                            fontWeight: isActive(child.path) ? 600 : 400,
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box sx={{ 
        p: 2, 
        borderTop: `1px solid ${theme.palette.divider}`,
        textAlign: 'center',
      }}>
        <Typography variant="caption" color="text.secondary">
          2023 Studio Manager
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
    >
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={open}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              borderRight: `1px solid ${theme.palette.divider}`,
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
            },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Drawer
          variant={variant}
          open={open}
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              borderRight: `1px solid ${theme.palette.divider}`,
              boxShadow: theme.shadows[1],
              transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;