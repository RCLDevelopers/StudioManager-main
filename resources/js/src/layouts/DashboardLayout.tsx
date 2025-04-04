import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Add your Sidebar component here */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout; 