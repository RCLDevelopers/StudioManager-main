import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';

const DashboardLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
    }}>
      <Sidebar 
        open={sidebarOpen} 
        onClose={handleSidebarToggle}
        variant={isMobile ? 'temporary' : 'permanent'}
      />
      
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%', md: `calc(100% - 260px)` },
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <Navbar onSidebarToggle={handleSidebarToggle} />
        
        <Box sx={{ 
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 2, sm: 3 },
        }}>
          <Box sx={{ 
            maxWidth: '100%',
            margin: '0 auto',
            flexGrow: 1,
            width: '100%',
          }}>
            <Outlet />
          </Box>
        </Box>
        
        <Footer />
      </Box>
    </Box>
  );
};

export default DashboardLayout;