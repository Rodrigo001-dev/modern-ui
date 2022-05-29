import React from 'react';

import unitedImg from '../../assets/united.png';

import { Container, Image, Title, Foundation } from './styles';

export function Card() {
  return (
    <Container
      animation="slideInDown"
      duration={2000} // 2 seconds
    >
      <Image 
        source={unitedImg}
        // o contain vai deixar a imagem ajustada em relação o Container
        resizeMode="contain"
        animation="pulse"
        delay={100}
        duration={600} // 600ms
        direction="alternate"
        iterationCount="infinite"
      />

      <Title>Manchester United</Title>
      <Foundation>1878</Foundation>
    </Container>
  );
}