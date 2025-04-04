import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      dark: '#7b1fa2',
    },
    success: {
      main: '#2e7d32',
      dark: '#1b5e20',
    },
    info: {
      main: '#0288d1',
      dark: '#01579b',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 500,
    },
  },
});

export default theme; 