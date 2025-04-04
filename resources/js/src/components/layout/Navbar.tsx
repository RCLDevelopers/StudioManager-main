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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

interface NavbarProps {
  onMenuClick: () => void;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  padding: theme.spacing(1, 0),
}));

const SearchWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
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
  color: theme.palette.text.secondary,
}));

const StyledInput = styled('input')(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  height: '40px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  [theme.breakpoints.up('md')]: {
    width: '40ch',
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
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{
            mr: 2,
            color: theme.palette.text.secondary,
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
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar
            sx={{
              width: 40,
              height: 40,
              cursor: 'pointer',
              bgcolor: theme.palette.primary.main,
            }}
          >
            A
          </Avatar>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;