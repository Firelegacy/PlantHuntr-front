// Application Router
import React from 'react';
import { Router } from '@reach/router';

import NotFound from '../components/UI/errors/NotFound/NotFound';
import Landing from './guest/Landing/Landing';
import Login from './guest/Login/Login';
import Register from './guest/Register/Register';

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
