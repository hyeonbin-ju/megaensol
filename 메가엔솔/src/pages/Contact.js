import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';

const Contact = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        연락처
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        언제든지 문의해 주시면 친절하게 답변 드리겠습니다
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              회사 정보
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <BusinessIcon sx={{ mr: 2 }} />
              <Typography>메가엔솔(주)</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ mr: 2 }} />
              <Typography>서울특별시 강남구 테헤란로 123 메가빌딩 8층</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 2 }} />
              <Typography>02-123-4567</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 2 }} />
              <Typography>info@megaensol.com</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              영업 시간
            </Typography>
            <Typography paragraph>
              평일: 오전 9:00 - 오후 6:00
            </Typography>
            <Typography paragraph>
              토요일: 오전 9:00 - 오후 1:00
            </Typography>
            <Typography>
              일요일 및 공휴일: 휴무
            </Typography>
            <Typography sx={{ mt: 4 }} color="text.secondary">
              * 긴급 상황 시 24시간 대응 가능
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ mt: 4, p: 4 }}>
        <Typography variant="h5" gutterBottom>
          찾아오시는 길
        </Typography>
        <Box sx={{ mt: 2, height: '300px', bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>지도가 들어갈 공간입니다</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact; 