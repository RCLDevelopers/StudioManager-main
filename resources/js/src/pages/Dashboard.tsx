import { Box, Container, Grid, Typography, Button } from '@mui/material';
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
  return (
    <Container maxWidth={false}>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" component="h1">
          Today's Sales
        </Typography>
        <Button
          variant="outlined"
          startIcon={<FileDownloadIcon />}
          sx={{ borderRadius: 2 }}
        >
          Export
        </Button>
      </Box>
      <Typography variant="subtitle1" sx={{ mb: 3 }}>
        Sales Summary
      </Typography>
      <Grid container spacing={3}>
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
            change={-1.2}
            bgColor="#D1FAE5"
            iconColor="#10B981"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<PeopleIcon />}
            title="Customers"
            value="8"
            change={0.5}
            bgColor="#E0E7FF"
            iconColor="#6366F1"
          />
        </Grid>
        <Grid item xs={12}>
          <WorldMap />
        </Grid>
        <Grid item xs={12}>
          <ProductPerformance />
        </Grid>
        <Grid item xs={12} lg={8}>
          <TotalRevenue />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CustomerSatisfaction />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TargetReality />
        </Grid>
      </Grid>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1 }}>
        <Typography variant="body2" color="text.secondary">
          Made with ❤️ by ThemeWagon
        </Typography>
      </Box>
    </Container>
  );
};

export default Dashboard; 