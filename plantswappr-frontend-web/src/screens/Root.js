import React from 'react';
import { Router } from '@reach/router';

import NotFound from 'components/general/errors/NotFound';
import Landing from 'screens/guest/Landing/Landing';
import Login from 'screens/guest/Login/Login';
import Register from 'screens/guest/Register/Register';
import Home from './guest/Home/Home';
import Store from './guest/Store/Store';
import Info from './guest/Info/Info';
import Contact from './guest/Contact/Contact';

function Root() {
  return (
    <Router>
      <NotFound default />
      <Landing path="/" />
      <Home path="/home" />
      <Store path="/store" />
      <Info path="/info" />
      <Contact path="/contact" />
      <Login path="/login" />
      <Register path="/register" />
    </Router>
  );
}

export default Root;
