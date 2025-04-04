import React, { useState, useEffect } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const DashboardLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

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
      overflow: 'hidden',
      position: 'relative',
    }}>
      <Box
        sx={{
          position: { xs: 'absolute', md: 'relative' },
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: theme.zIndex.drawer,
        }}
      >
        <Sidebar open={sidebarOpen} onToggle={toggleSidebar} isMobile={isMobile} />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: '100%',
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          ...((!isMobile && sidebarOpen) && {
            marginLeft: '240px',
            width: `calc(100% - 240px)`,
          }),
          ...((!isMobile && !sidebarOpen) && {
            marginLeft: '72px',
            width: `calc(100% - 72px)`,
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
            display: 'flex',
            flexDirection: 'column',
            minHeight: `calc(100vh - 56px)`, // Subtract navbar height
          }}
        >
          <Box sx={{ 
            maxWidth: '100%',
            margin: '0 auto',
            flexGrow: 1,
          }}>
            <Outlet />
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;