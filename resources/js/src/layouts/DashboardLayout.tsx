import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';

const DashboardLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar open={sidebarOpen} onToggle={toggleSidebar} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          marginLeft: {
            xs: sidebarOpen ? '240px' : '72px',
            sm: sidebarOpen ? '240px' : '72px',
          },
          transition: theme.transitions.create(['margin'], {
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
            p: { xs: 2, sm: 3 },
            backgroundColor: theme.palette.background.default,
            overflow: 'auto',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;