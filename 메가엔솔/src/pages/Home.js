import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
  color: 'white',
  padding: theme.spacing(15, 0),
  textAlign: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const Home = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            메가엔솔(주)
          </Typography>
          <Typography variant="h5" gutterBottom>
            최첨단 클린룸 솔루션의 리더
          </Typography>
        </Container>
      </HeroSection>

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          회사 소개
        </Typography>
        <Typography variant="body1" paragraph>
          메가엔솔(주)는 첨단 클린룸 설계 및 시공 전문 기업으로서, 
          반도체, 디스플레이, 제약, 바이오, 의료기기 등 다양한 산업 분야에서 
          최고의 클린룸 솔루션을 제공하고 있습니다.
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <StyledPaper elevation={3}>
              <Typography variant="h6" gutterBottom>
                전문성
              </Typography>
              <Typography>
                20년 이상의 클린룸 설계 및 시공 경험을 보유한 전문가 팀
              </Typography>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledPaper elevation={3}>
              <Typography variant="h6" gutterBottom>
                기술력
              </Typography>
              <Typography>
                최신 기술과 장비를 활용한 최적의 클린룸 솔루션 제공
              </Typography>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledPaper elevation={3}>
              <Typography variant="h6" gutterBottom>
                신뢰성
              </Typography>
              <Typography>
                철저한 품질관리와 사후관리로 고객 만족도 극대화
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home; 