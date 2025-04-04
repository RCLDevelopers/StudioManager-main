import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

const App = () => {
  const content = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  );
};

export default App; 