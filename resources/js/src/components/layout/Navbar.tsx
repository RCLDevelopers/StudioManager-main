import React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Avatar,
  Badge,
  useMediaQuery,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import ThemeToggle from './ThemeToggle';
import { useThemeContext } from '@/theme/ThemeContext';

interface NavbarProps {
  onSidebarToggle: () => void;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[1],
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  minHeight: 56,
}));

const SearchWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '6px',
  backgroundColor: theme.palette.mode === 'light' ? '#F1F5F9' : 'rgba(255, 255, 255, 0.05)',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light' ? '#F8FAFC' : 'rgba(255, 255, 255, 0.1)',
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(2),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

const StyledInput = styled('input')(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: '6px 8px 6px 0',
  paddingLeft: `calc(1em + ${theme.spacing(3)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  height: '32px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  fontSize: '0.813rem',
  '&::placeholder': {
    color: theme.palette.text.secondary,
    opacity: 1,
  },
  [theme.breakpoints.up('md')]: {
    width: '32ch',
  },
}));

const LanguageButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.mode === 'light' ? '#F1F5F9' : 'rgba(255, 255, 255, 0.05)',
  borderRadius: '6px',
  padding: '4px 8px',
  minHeight: 32,
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light' ? '#F8FAFC' : 'rgba(255, 255, 255, 0.1)',
  },
}));

const Navbar = ({ onSidebarToggle }: NavbarProps) => {
  const theme = useTheme();
  const { mode } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ minHeight: 56, px: { xs: 1, sm: 2 } }}>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={onSidebarToggle}
          sx={{
            mr: 1,
            color: theme.palette.text.secondary,
            padding: '6px',
            '&:hover': {
              backgroundColor: theme.palette.mode === 'light' ? '#F1F5F9' : 'rgba(255, 255, 255, 0.05)',
            },
          }}
        >
          <MenuIcon sx={{ fontSize: '1.25rem' }} />
        </IconButton>

        {!isMobile && (
          <SearchWrapper>
            <SearchIconWrapper>
              <SearchIcon sx={{ fontSize: '1.125rem' }} />
            </SearchIconWrapper>
            <StyledInput
              placeholder="Search..."
              aria-label="search"
            />
          </SearchWrapper>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ThemeToggle />
          
          {!isMobile && (
            <LanguageButton
              startIcon={<LanguageIcon sx={{ fontSize: '1.125rem' }} />}
              endIcon={<KeyboardArrowDownIcon sx={{ fontSize: '1.125rem' }} />}
              size="small"
            >
              English
            </LanguageButton>
          )}
          
          <IconButton
            size="small"
            sx={{
              color: theme.palette.text.secondary,
              backgroundColor: theme.palette.mode === 'light' ? '#F1F5F9' : 'rgba(255, 255, 255, 0.05)',
              padding: '6px',
              '&:hover': {
                backgroundColor: theme.palette.mode === 'light' ? '#F8FAFC' : 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Badge 
              badgeContent={4} 
              color="error"
              sx={{
                '& .MuiBadge-badge': {
                  fontSize: '0.688rem',
                  height: 16,
                  minWidth: 16,
                  padding: '0 4px',
                },
              }}
            >
              <NotificationsIcon sx={{ fontSize: '1.25rem' }} />
            </Badge>
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: theme.palette.primary.main,
                fontSize: '0.875rem',
              }}
            >
              A
            </Avatar>
            {!isMobile && (
              <>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                      fontSize: '0.813rem',
                      lineHeight: 1.2,
                    }}
                  >
                    Admin User
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: '0.688rem',
                      lineHeight: 1.2,
                    }}
                  >
                    Administrator
                  </Typography>
                </Box>
                <IconButton
                  size="small"
                  sx={{
                    color: theme.palette.text.secondary,
                    padding: '4px',
                  }}
                >
                  <KeyboardArrowDownIcon sx={{ fontSize: '1.125rem' }} />
                </IconButton>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;