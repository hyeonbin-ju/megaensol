import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          메가엔솔(주)
        </Typography>
        <Typography variant="body2" gutterBottom>
          주소: 서울특별시 강남구 테헤란로 123 메가빌딩 8층
        </Typography>
        <Typography variant="body2" gutterBottom>
          전화: 02-123-4567 | 이메일: info@megaensol.com
        </Typography>
        <Typography variant="body2" gutterBottom>
          사업자등록번호: 123-45-67890
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} 메가엔솔(주). All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 