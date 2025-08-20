import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Contact', path: '/contact' },
];

 function Header() {
  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Perfect Cleaning
        </Typography>
        <Box>
          {navLinks.map(({ title, path }) => (
            <Button
              key={title}
              component={NavLink}
              to={path}
              sx={{
                color: 'white',
                '&.active': {
                  borderBottom: '2px solid #ff6600',
                },
                marginLeft: 2,
                textTransform: 'none',
                fontWeight: '600',
              }}
              end={path === '/'}
            >
              {title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header