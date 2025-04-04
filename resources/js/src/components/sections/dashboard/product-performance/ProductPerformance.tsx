import React from 'react';
import {
  Box,
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
import { getCommonHeaderStyle } from '@/utils/chartStyles';

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
    <>
      <Box sx={getCommonHeaderStyle()}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
          Product Performance
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Revenue by product category
        </Typography>
      </Box>
      <Box sx={{ 
        flexGrow: 1, 
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: theme.palette.mode === 'light' ? '#CBD5E1' : '#475569',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: theme.palette.mode === 'light' ? '#94A3B8' : '#64748B',
        },
      }}>
        <TableContainer sx={{ minWidth: '100%' }}>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  backgroundColor: theme.palette.background.paper,
                  py: 1.5,
                }}>
                  Product
                </TableCell>
                <TableCell align="right" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  backgroundColor: theme.palette.background.paper,
                  py: 1.5,
                }}>
                  Sales
                </TableCell>
                <TableCell align="right" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  backgroundColor: theme.palette.background.paper,
                  py: 1.5,
                }}>
                  Revenue
                </TableCell>
                <TableCell align="right" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  backgroundColor: theme.palette.background.paper,
                  py: 1.5,
                }}>
                  Growth
                </TableCell>
                <TableCell align="right" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  backgroundColor: theme.palette.background.paper,
                  py: 1.5,
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
                    py: 1.5,
                  }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                      {product.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="right" sx={{ 
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    py: 1.5,
                  }}>
                    {product.sales.toLocaleString()}
                  </TableCell>
                  <TableCell align="right" sx={{ 
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    py: 1.5,
                  }}>
                    ${product.revenue.toLocaleString()}
                  </TableCell>
                  <TableCell align="right" sx={{ 
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    py: 1.5,
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
                    py: 1.5,
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
      </Box>
    </>
  );
};

export default ProductPerformance;