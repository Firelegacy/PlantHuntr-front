import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import './assets/styles/global-style.css';
import theme from './assets/themes/index';
import './config/i18n.js';

import Root from './screens/Root';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
