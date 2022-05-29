import React from 'react';

import { 
  useFonts, 
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components/native';
import THEME from './src/theme';

import { Home } from "./src/screens/Home";

export default function App() {
  // quando a aplicação executar, vai ser carregado as fontes para ficar
  // disponíveis essas fontes na nossa apliação
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  // enquanto as fontes não forem carregadas é necessário segurar o carregamento
  // da aplicação para garantir que as fontes foram carregadas, porque se a 
  // aplicação iniciar primeiro do que o carregamento das fontes o layout vai
  // aparecer todo zuado
  if (!fontsLoaded) {
    return <AppLoading />
  };

  return (
    <ThemeProvider theme={THEME}>
    <Home />
    </ThemeProvider>
  );
}
