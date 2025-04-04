import { createTheme } from '@mui/material/styles';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';
import ThemeProvider, { useThemeContext } from './ThemeContext';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export { 
  lightTheme, 
  darkTheme,
  ThemeProvider,
  useThemeContext,
  theme as default
};