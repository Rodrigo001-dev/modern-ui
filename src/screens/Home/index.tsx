import React from 'react';

import { Container, Header } from './styles';

import { Input } from '../../components/Input';

import coverImg from '../../assets/cover.png';

export function Home() {
  return (
    <Container>
      <Header source={coverImg}>
        <Input placeholder="Pesquisar..." />
      </Header>
    </Container>
  );
}