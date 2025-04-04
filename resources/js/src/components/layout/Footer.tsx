import React from 'react';
import { Box, Link, Typography, useTheme, Container } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 1.5, sm: 2 },
        backgroundColor: 'transparent',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, rgba(100, 116, 139, 0.05), rgba(100, 116, 139, 0.2), rgba(100, 116, 139, 0.05))',
        }
      }}
    >
      <Container maxWidth={false}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#64748B',
              fontSize: { xs: '0.75rem', sm: '0.813rem' },
              lineHeight: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              flexWrap: 'wrap',
            }}
          >
            {currentYear} Studio Manager. All rights reserved.
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: '#64748B',
              fontSize: { xs: '0.75rem', sm: '0.813rem' },
              lineHeight: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              flexWrap: 'wrap',
            }}
          >
            Designed & Developed with
            <FavoriteIcon
              sx={{
                fontSize: 'inherit',
                color: '#EF4444',
                animation: 'pulse 1.5s ease infinite',
                '@keyframes pulse': {
                  '0%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.2)' },
                  '100%': { transform: 'scale(1)' },
                },
              }}
            />
            by
            <Link
              href="https://zanticsdigital.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#6366F1',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'all 0.2s',
                '&:hover': {
                  color: '#4F46E5',
                  textDecoration: 'underline',
                },
              }}
            >
              Zangtics Digital
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
