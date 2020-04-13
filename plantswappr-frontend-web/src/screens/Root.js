import React from 'react';
import { Router } from '@reach/router';

import NotFound from 'components/general/errors/NotFound';
import Landing from 'screens/guest/Landing/Landing';
import Login from 'screens/guest/Login/Login';
import Register from 'screens/guest/Register/Register';

function Root() {
  return (
    <Router>
      <NotFound default />
      <Landing path="/" />
      <Login path="/login" />
      <Register path="/register" />
    </Router>
  );
}

export default Root;
