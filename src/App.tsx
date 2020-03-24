import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState'; 

import Header from './components/header';
import Slider from './components/slider';
import About from './components/about';
import Skills from './components/skills';

import GlobalStyled from './styles/global';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyled />
        <Header toogleTheme={toogleTheme} />
        <Slider/>
        <About/>
        <Skills/>
      </div>
    </ThemeProvider>
  );
}

export default App;
