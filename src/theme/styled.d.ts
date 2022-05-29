import 'styled-components';
import THEME from '.';

// sobrescrevendo o padrão do styled-components
declare module 'styled-components' {
  // eu quero que seja utilizado um type chamado ThemeType que essa tipagem seja
  // exatamente igual ao meu arquivo de tema
  // o typeof vai olhar para o conteúdo do THEME e básiado nesse conteúdo ele
  // vai inferir, vai entendar qual é a tipagem necessária.
  type ThemeType = typeof THEME;

  // o DefaultTheme é do styled-components, eu estou pedindo para o
  // styled-components também herdar a tipagem que eu criei 
  export interface DefaultTheme extends ThemeType {}
}