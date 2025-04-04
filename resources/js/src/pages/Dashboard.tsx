import { Box, Container, Grid, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import StatCard from '@/components/sections/dashboard/stats/StatCard';
import VisitorInsights from '@/components/sections/dashboard/visitor-insights/VisitorInsights';
import TotalRevenue from '@/components/sections/dashboard/total-revenue/TotalRevenue';
import CustomerSatisfaction from '@/components/sections/dashboard/customer-satisfaction/CustomerSatisfaction';
import TargetReality from '@/components/sections/dashboard/target-reality/TargetReality';
import ProductPerformance from '@/components/sections/dashboard/product-performance/ProductPerformance';
import WorldMap from '@/components/sections/dashboard/world-map/WorldMap';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: { xs: 2, sm: 3 },
        px: { xs: 1, sm: 3 },
        marginLeft: { xs: '72px', sm: '240px' },
        transition: theme.transitions.create(['margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Container maxWidth={false}>
        <Box 
          sx={{ 
            mb: { xs: 2, sm: 4 }, 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between', 
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Box>
            <Typography 
              variant="h4" 
              component="h1"
              sx={{ 
                fontWeight: 600,
                color: theme.palette.text.primary,
                mb: 1,
                fontSize: { xs: '1.5rem', sm: '2rem' },
              }}
            >
              Today's Sales
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: theme.palette.text.secondary,
                fontWeight: 400,
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              Sales Summary
            </Typography>
          </Box>
          <Button
            variant="outlined"
            startIcon={<FileDownloadIcon />}
            sx={{ 
              borderRadius: '0.75rem',
              textTransform: 'none',
              px: { xs: 2, sm: 3 },
              py: { xs: 0.75, sm: 1 },
              borderColor: theme.palette.divider,
              color: theme.palette.text.primary,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              '&:hover': {
                borderColor: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.main + '0A'
              }
            }}
          >
            Export
          </Button>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<ShowChartIcon />}
              title="Total Sales"
              value="$1k"
              change={8}
              bgColor="#FEE2E2"
              iconColor="#EF4444"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<ShoppingCartIcon />}
              title="Total Order"
              value="300"
              change={5}
              bgColor="#FEF3C7"
              iconColor="#F59E0B"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<LocalOfferIcon />}
              title="Sold"
              value="5"
              change={-2}
              bgColor="#DCFCE7"
              iconColor="#22C55E"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<PeopleIcon />}
              title="Customers"
              value="8"
              change={12}
              bgColor="#F3E8FF"
              iconColor="#9333EA"
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <VisitorInsights />
          </Grid>
          <Grid item xs={12} md={4}>
            <CustomerSatisfaction />
          </Grid>

          <Grid item xs={12} md={8}>
            <TotalRevenue />
          </Grid>
          <Grid item xs={12} md={4}>
            <TargetReality />
          </Grid>

          <Grid item xs={12} md={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12} md={4}>
            <WorldMap />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;