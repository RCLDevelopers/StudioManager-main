import React from 'react';
import { Box, Container, Grid, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import StatCard from '@/components/sections/dashboard/stats/StatCard';
import TotalRevenue from '@/components/sections/dashboard/total-revenue/TotalRevenue';
import CustomerSatisfaction from '@/components/sections/dashboard/customer-satisfaction/CustomerSatisfaction';
import VisitorInsights from '@/components/sections/dashboard/visitor-insights/VisitorInsights';
import ProductPerformance from '@/components/sections/dashboard/product-performance/ProductPerformance';
import WorldMap from '@/components/sections/dashboard/world-map/WorldMap';
import TargetReality from '@/components/sections/dashboard/target-reality/TargetReality';
import { getCommonCardStyle } from '@/utils/chartStyles';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const stats = [
  {
    icon: <ShoppingCartIcon />,
    title: 'Total Orders',
    value: '2,456',
    change: 14.5,
    bgColor: 'rgba(99, 102, 241, 0.1)',
    iconColor: '#6366F1',
  },
  {
    icon: <LocalOfferIcon />,
    title: 'Total Sales',
    value: '$12,456',
    change: -3.2,
    bgColor: 'rgba(249, 115, 22, 0.1)',
    iconColor: '#F97316',
  },
  {
    icon: <PeopleIcon />,
    title: 'Total Customers',
    value: '1,256',
    change: 8.1,
    bgColor: 'rgba(34, 197, 94, 0.1)',
    iconColor: '#22C55E',
  },
  {
    icon: <AccountBalanceWalletIcon />,
    title: 'Total Revenue',
    value: '$18,456',
    change: 4.3,
    bgColor: 'rgba(168, 85, 247, 0.1)',
    iconColor: '#A855F7',
  },
];

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: '100%',
      overflow: 'hidden',
      pb: 3,
    }}>
      <Container 
        maxWidth={false}
        disableGutters 
        sx={{
          px: { xs: 1.5, sm: 2, md: 3 }, 
          maxWidth: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 1, sm: 0 },
            mb: { xs: 2, sm: 3 }, 
            width: '100%',
            px: { xs: 0.5, sm: 0 }, 
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' }, 
                fontWeight: 600,
                color: theme.palette.text.primary,
                mb: 0.5,
                lineHeight: 1.2,
              }}
            >
              Dashboard
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: '0.75rem', sm: '0.813rem' }, 
                lineHeight: 1.5,
              }}
            >
              Welcome back! Here's what's happening with your business today.
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<FileDownloadIcon sx={{ fontSize: '1.125rem' }} />}
            sx={{
              display: { xs: 'none', sm: 'flex' },
              bgcolor: theme.palette.primary.main,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
              },
              textTransform: 'none',
              fontSize: '0.813rem',
              fontWeight: 500,
              borderRadius: '6px',
              boxShadow: theme.shadows[1],
              py: 0.75, 
              px: 1.5,
              height: 36,
              lineHeight: 1,
            }}
          >
            Download Report
          </Button>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}> 
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <StatCard {...stat} />
            </Grid>
          ))}

          <Grid item xs={12} md={8}>
            <Box sx={{ 
              ...getCommonCardStyle(theme),
              height: { xs: 320, sm: 380, md: 400 },
              p: { xs: 1.5, sm: 2 },
            }}> 
              <TotalRevenue />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              ...getCommonCardStyle(theme),
              height: { xs: 320, sm: 380, md: 400 },
              p: { xs: 1.5, sm: 2 },
            }}>
              <CustomerSatisfaction />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ 
              ...getCommonCardStyle(theme),
              height: { xs: 320, sm: 350, md: 380 },
              p: { xs: 1.5, sm: 2 },
            }}>
              <VisitorInsights />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ 
              ...getCommonCardStyle(theme),
              height: { xs: 320, sm: 350, md: 380 },
              p: { xs: 1.5, sm: 2 },
            }}>
              <ProductPerformance />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              ...getCommonCardStyle(theme),
              height: { xs: 320, sm: 350, md: 380 },
              p: { xs: 1.5, sm: 2 },
            }}>
              <TargetReality />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ 
              ...getCommonCardStyle(theme),
              height: { xs: 320, sm: 350, md: 380 },
              p: { xs: 1.5, sm: 2 },
            }}>
              <WorldMap />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;