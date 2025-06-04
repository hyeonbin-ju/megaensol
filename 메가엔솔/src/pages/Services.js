import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const services = [
  {
    title: '클린룸 설계',
    description: '고객의 요구사항에 맞는 최적의 클린룸 설계 서비스를 제공합니다. 공기흐름 분석, 온습도 제어, 청정도 관리 등 종합적인 설계를 수행합니다.',
    image: '/images/design.jpg'
  },
  {
    title: '클린룸 시공',
    description: '설계된 클린룸의 완벽한 구현을 위한 전문 시공 서비스를 제공합니다. 첨단 장비와 숙련된 기술자들이 고품질의 시공을 보장합니다.',
    image: '/images/construction.jpg'
  },
  {
    title: '클린룸 유지보수',
    description: '클린룸의 지속적인 성능 유지를 위한 정기적인 점검 및 유지보수 서비스를 제공합니다. 24시간 긴급 대응 서비스도 함께 제공됩니다.',
    image: '/images/maintenance.jpg'
  },
  {
    title: '클린룸 컨설팅',
    description: '클린룸 구축에 필요한 전문적인 자문 서비스를 제공합니다. 비용 최적화, 에너지 효율화, 규정 준수 등 다양한 측면의 컨설팅을 제공합니다.',
    image: '/images/consulting.jpg'
  }
];

const Services = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        서비스
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        메가엔솔(주)는 클린룸 관련 토탈 솔루션을 제공합니다
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{ height: 200 }}
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services; 