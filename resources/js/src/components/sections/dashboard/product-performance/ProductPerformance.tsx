import React from 'react';
import {
  Paper,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  InputBase,
  Pagination,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  maxWidth: '300px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    backgroundColor: '#F1F5F9',
    borderRadius: theme.shape.borderRadius,
  },
}));

interface ProjectData {
  assigned: {
    name: string;
    role: string;
  };
  name: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  budget: string;
}

const projects: ProjectData[] = [
  {
    assigned: {
      name: 'Andrew McDawnland',
      role: 'Project Manager',
    },
    name: 'Real Homes WP Theme',
    priority: 'Medium',
    budget: '$24.5k',
  },
  {
    assigned: {
      name: 'Sunil Joshi',
      role: 'Web Designer',
    },
    name: 'Elite Admin',
    priority: 'Low',
    budget: '$3.9k',
  },
  {
    assigned: {
      name: 'Christopher Jamil',
      role: 'Project Manager',
    },
    name: 'MedicalPro WP Theme',
    priority: 'High',
    budget: '$12.8k',
  },
  {
    assigned: {
      name: 'Nirav Joshi',
      role: 'Frontend Engineer',
    },
    name: 'Hosting Press HTML',
    priority: 'Critical',
    budget: '$2.4k',
  },
  {
    assigned: {
      name: 'Amy Adams',
      role: 'Backend Developer',
    },
    name: 'Ecommerce Platform',
    priority: 'High',
    budget: '$15k',
  },
];

const getPriorityColor = (priority: ProjectData['priority']) => {
  const colors = {
    Low: '#22C55E',
    Medium: '#3B82F6',
    High: '#EF4444',
    Critical: '#F59E0B',
  };
  return colors[priority];
};

const getPriorityBgColor = (priority: ProjectData['priority']) => {
  const colors = {
    Low: '#DCFCE7',
    Medium: '#DBEAFE',
    High: '#FEE2E2',
    Critical: '#FEF3C7',
  };
  return colors[priority];
};

const ProductPerformance = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Product Performance</Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Assigned</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell align="right">Budget</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.name} hover>
                <TableCell>
                  <Box>
                    <Typography variant="subtitle1">{project.assigned.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.assigned.role}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{project.name}</TableCell>
                <TableCell>
                  <Chip
                    label={project.priority}
                    size="small"
                    sx={{
                      backgroundColor: getPriorityBgColor(project.priority),
                      color: getPriorityColor(project.priority),
                      fontWeight: 500,
                    }}
                  />
                </TableCell>
                <TableCell align="right">{project.budget}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Showing 1-5 of 14
        </Typography>
        <Pagination count={3} shape="rounded" />
      </Box>
    </Paper>
  );
};

export default ProductPerformance; 