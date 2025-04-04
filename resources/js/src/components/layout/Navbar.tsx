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
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  padding: theme.spacing(1, 0),
}));

const SearchWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  backgroundColor: '#F1F5F9',
  '&:hover': {
    backgroundColor: '#F8FAFC',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
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
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  height: '40px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  fontSize: '0.875rem',
  '&::placeholder': {
    color: '#64748B',
    opacity: 1,
  },
  [theme.breakpoints.up('md')]: {
    width: '40ch',
  },
}));

const LanguageButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: '#64748B',
  backgroundColor: '#F1F5F9',
  borderRadius: '8px',
  padding: '6px 12px',
  '&:hover': {
    backgroundColor: '#F8FAFC',
  },
}));

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{
            mr: 2,
            color: '#64748B',
            '&:hover': {
              backgroundColor: '#F1F5F9',
            },
          }}
        >
          <MenuIcon />
        </IconButton>

        {!isMobile && (
          <SearchWrapper>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInput
              placeholder="Search..."
              aria-label="search"
            />
          </SearchWrapper>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {!isMobile && (
            <LanguageButton
              startIcon={<LanguageIcon />}
              endIcon={<KeyboardArrowDownIcon />}
            >
              English
            </LanguageButton>
          )}
          
          <IconButton
            sx={{
              color: '#64748B',
              backgroundColor: '#F1F5F9',
              '&:hover': {
                backgroundColor: '#F8FAFC',
              },
            }}
          >
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: '#6366F1',
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
                    }}
                  >
                    Admin User
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#64748B',
                    }}
                  >
                    Administrator
                  </Typography>
                </Box>
                <IconButton
                  size="small"
                  sx={{
                    color: '#64748B',
                  }}
                >
                  <KeyboardArrowDownIcon />
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