import { Container, Grid } from '@mui/material';
import CustomerSatisfaction from '@/components/sections/dashboard/customer-satisfaction/CustomerSatisfaction';

const Dashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <CustomerSatisfaction />
        </Grid>
        {/* Add more dashboard components here */}
      </Grid>
    </Container>
  );
};

export default Dashboard; 