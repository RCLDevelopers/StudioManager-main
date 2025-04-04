import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  useTheme,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const products = [
  {
    id: 1,
    name: 'Wedding Photography',
    sales: 123,
    revenue: 45000,
    growth: 12.5,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Portrait Session',
    sales: 98,
    revenue: 32000,
    growth: -5.2,
    status: 'Active',
  },
  {
    id: 3,
    name: 'Event Coverage',
    sales: 78,
    revenue: 28000,
    growth: 8.4,
    status: 'Active',
  },
  {
    id: 4,
    name: 'Family Photoshoot',
    sales: 65,
    revenue: 22000,
    growth: 15.8,
    status: 'Active',
  },
  {
    id: 5,
    name: 'Commercial Photography',
    sales: 45,
    revenue: 18000,
    growth: -2.3,
    status: 'Inactive',
  },
];

const ProductPerformance = () => {
  const theme = useTheme();

  return (
    <Card sx={{ 
      height: '100%',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    }}>
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Product Performance
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Revenue by product category
          </Typography>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                }}>
                  Product
                </TableCell>
                <TableCell align="right" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                }}>
                  Sales
                </TableCell>
                <TableCell align="right" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                }}>
                  Revenue
                </TableCell>
                <TableCell align="right" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                }}>
                  Growth
                </TableCell>
                <TableCell align="right" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} hover>
                  <TableCell sx={{ 
                    borderBottom: `1px solid ${theme.palette.divider}`,
                  }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                      {product.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="right" sx={{ 
                    borderBottom: `1px solid ${theme.palette.divider}`,
                  }}>
                    {product.sales.toLocaleString()}
                  </TableCell>
                  <TableCell align="right" sx={{ 
                    borderBottom: `1px solid ${theme.palette.divider}`,
                  }}>
                    ${product.revenue.toLocaleString()}
                  </TableCell>
                  <TableCell align="right" sx={{ 
                    borderBottom: `1px solid ${theme.palette.divider}`,
                  }}>
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      gap: 0.5,
                      color: product.growth >= 0 ? theme.palette.success.main : theme.palette.error.main,
                    }}>
                      {product.growth >= 0 ? (
                        <TrendingUpIcon sx={{ fontSize: 16 }} />
                      ) : (
                        <TrendingDownIcon sx={{ fontSize: 16 }} />
                      )}
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {Math.abs(product.growth)}%
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right" sx={{ 
                    borderBottom: `1px solid ${theme.palette.divider}`,
                  }}>
                    <Chip
                      label={product.status}
                      size="small"
                      sx={{
                        backgroundColor: product.status === 'Active' 
                          ? `${theme.palette.success.main}20`
                          : `${theme.palette.error.main}20`,
                        color: product.status === 'Active'
                          ? theme.palette.success.main
                          : theme.palette.error.main,
                        fontWeight: 500,
                        fontSize: '0.75rem',
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default ProductPerformance;