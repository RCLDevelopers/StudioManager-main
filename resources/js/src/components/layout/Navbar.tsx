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

interface NavbarProps {
  onMenuClick: () => void;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fff',
  color: '#1E293B',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  minHeight: 56,
}));

const SearchWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '6px',
  backgroundColor: '#F1F5F9',
  '&:hover': {
    backgroundColor: '#F8FAFC',
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
  color: '#64748B',
}));

const StyledInput = styled('input')(({ theme }) => ({
  color: '#1E293B',
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
    color: '#64748B',
    opacity: 1,
  },
  [theme.breakpoints.up('md')]: {
    width: '32ch',
  },
}));

const LanguageButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: '#64748B',
  backgroundColor: '#F1F5F9',
  borderRadius: '6px',
  padding: '4px 8px',
  minHeight: 32,
  '&:hover': {
    backgroundColor: '#F8FAFC',
  },
}));

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ minHeight: 56, px: { xs: 1, sm: 2 } }}>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{
            mr: 1,
            color: '#64748B',
            padding: '6px',
            '&:hover': {
              backgroundColor: '#F1F5F9',
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
              color: '#64748B',
              backgroundColor: '#F1F5F9',
              padding: '6px',
              '&:hover': {
                backgroundColor: '#F8FAFC',
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
                bgcolor: '#6366F1',
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
                      color: '#1E293B',
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
                      color: '#64748B',
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
                    color: '#64748B',
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