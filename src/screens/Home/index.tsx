import React from 'react';

import { Container, Header } from './styles';

import coverImg from '../../assets/cover.png';

export function Home() {
  return (
    <Container>
      <Header source={coverImg} />
    </Container>
  );
}