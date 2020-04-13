import React from 'react';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

import 'assets/styles/global-style.css';
import { customTheme } from './assets/themes/theme.js';
import 'config/i18n.js';

import Root from './screens/Root';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ColorModeProvider>
        <Root />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
