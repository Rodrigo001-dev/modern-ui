import React from 'react';

import unitedImg from '../../assets/united.png';

import { Container, Image, Title, Foundation } from './styles';

export function Card() {
  return (
    <Container>
      <Image 
        source={unitedImg}
        // o contain vai deixar a imagem ajustada em relação o Container
        resizeMode="contain"
      />

      <Title>Manchester United</Title>
      <Foundation>1878</Foundation>
    </Container>
  );
}