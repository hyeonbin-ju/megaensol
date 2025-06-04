import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="메가엔솔 로고" style={{ height: '40px', marginRight: '10px' }} />
              <Typography variant="h6" component="div">
                메가엔솔(주)
              </Typography>
            </Box>
          </Link>
        </Box>
        <Button color="inherit" component={Link} to="/">
          회사소개
        </Button>
        <Button color="inherit" component={Link} to="/services">
          서비스
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          연락처
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 