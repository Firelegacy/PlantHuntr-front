const localStorageMiddleware = () => next => action => {
  if (action.type === 'LOGIN_SUCCESS') {
    if (!action.error) {
      const tokenWithBearer = action.payload.user.token;
      window.localStorage.setItem('token', JSON.stringify(tokenWithBearer));
    }
  } else if (action.type === 'LOGOUT') {
    window.localStorage.removeItem('token');
  }
  next(action);
};

export default localStorageMiddleware;
