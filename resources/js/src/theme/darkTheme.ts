import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366F1',
      contrastText: '#fff',
    },
    secondary: {
      main: '#64748B',
      contrastText: '#fff',
    },
    background: {
      default: '#0F172A',
      paper: '#1E293B',
    },
    text: {
      primary: '#E2E8F0',
      secondary: '#94A3B8',
    },
    error: {
      main: '#EF4444',
    },
    warning: {
      main: '#F59E0B',
    },
    info: {
      main: '#3B82F6',
    },
    success: {
      main: '#10B981',
    },
    divider: 'rgba(148, 163, 184, 0.12)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
    '0 1px 5px 0 rgba(0, 0, 0, 0.3)',
    '0 1px 8px 0 rgba(0, 0, 0, 0.32)',
    '0 1px 10px 0 rgba(0, 0, 0, 0.34)',
    '0 1px 14px 0 rgba(0, 0, 0, 0.4)',
    '0 1px 18px 0 rgba(0, 0, 0, 0.42)',
    '0 2px 16px 1px rgba(0, 0, 0, 0.2)',
    '0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 1px 18px 0 rgba(0, 0, 0, 0.2)',
    '0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 2px 16px 1px rgba(0, 0, 0, 0.2)',
    '0 5px 26px 4px rgba(0, 0, 0, 0.12), 0 3px 14px 2px rgba(0, 0, 0, 0.2)',
    '0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 3px 16px 2px rgba(0, 0, 0, 0.2)',
    '0 7px 34px 6px rgba(0, 0, 0, 0.12), 0 3px 18px 3px rgba(0, 0, 0, 0.2)',
    '0 7px 38px 6px rgba(0, 0, 0, 0.12), 0 4px 20px 3px rgba(0, 0, 0, 0.2)',
    '0 8px 42px 7px rgba(0, 0, 0, 0.12), 0 4px 22px 3px rgba(0, 0, 0, 0.2)',
    '0 8px 46px 7px rgba(0, 0, 0, 0.12), 0 4px 24px 4px rgba(0, 0, 0, 0.2)',
    '0 9px 50px 8px rgba(0, 0, 0, 0.12), 0 5px 26px 4px rgba(0, 0, 0, 0.2)',
    '0 10px 54px 9px rgba(0, 0, 0, 0.12), 0 5px 28px 4px rgba(0, 0, 0, 0.2)',
    '0 10px 58px 9px rgba(0, 0, 0, 0.12), 0 6px 30px 5px rgba(0, 0, 0, 0.2)',
    '0 11px 62px 10px rgba(0, 0, 0, 0.12), 0 6px 32px 5px rgba(0, 0, 0, 0.2)',
    '0 11px 66px 10px rgba(0, 0, 0, 0.12), 0 6px 34px 6px rgba(0, 0, 0, 0.2)',
    '0 12px 70px 11px rgba(0, 0, 0, 0.12), 0 7px 36px 6px rgba(0, 0, 0, 0.2)',
    '0 12px 74px 11px rgba(0, 0, 0, 0.12), 0 7px 38px 6px rgba(0, 0, 0, 0.2)',
    '0 13px 78px 12px rgba(0, 0, 0, 0.12), 0 7px 40px 7px rgba(0, 0, 0, 0.2)',
    '0 13px 82px 12px rgba(0, 0, 0, 0.12), 0 8px 42px 7px rgba(0, 0, 0, 0.2)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#475569 #1E293B",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#1E293B",
            width: 8,
            height: 8,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 4,
            backgroundColor: "#475569",
            border: "2px solid #1E293B",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#64748B",
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: "#64748B",
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#64748B",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 6,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
          },
        },
        contained: {
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(148, 163, 184, 0.12)',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            opacity: 0.7,
            color: '#94A3B8',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(148, 163, 184, 0.2)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(148, 163, 184, 0.3)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#6366F1',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: '#6366F1',
                opacity: 1,
                border: 0,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: '#6366F1',
              border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: '#333',
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.3,
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
          },
          '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: '#475569',
            opacity: 1,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&.Mui-selected': {
            backgroundColor: '#4F46E5',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#4338CA',
            },
            '& .MuiListItemIcon-root': {
              color: '#fff',
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#94A3B8',
          minWidth: 40,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '0.875rem',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(148, 163, 184, 0.12)',
        },
      },
    },
  },
});

export default darkTheme;
