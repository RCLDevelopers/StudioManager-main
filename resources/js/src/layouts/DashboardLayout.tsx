import React, { useState, useEffect } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';

const DashboardLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  // Auto-close sidebar on mobile
  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      minHeight: '100vh',
      backgroundColor: '#F1F5F9',
      overflow: 'hidden', // Prevent horizontal scrollbar
    }}>
      <Sidebar open={sidebarOpen} onToggle={toggleSidebar} isMobile={isMobile} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: '100%',
          marginLeft: {
            xs: 0,
            md: sidebarOpen ? '240px' : '72px',
          },
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Navbar onMenuClick={toggleSidebar} />
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            p: { xs: 0.5, sm: 1 }, 
            backgroundColor: '#F1F5F9',
            overflow: 'auto',
            width: '100%',
            maxWidth: '100%',
          }}
        >
          <Box sx={{ 
            maxWidth: '100%',
            margin: '0 auto',
          }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;