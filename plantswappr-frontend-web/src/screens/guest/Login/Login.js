import React from 'react';
import { CssBaseline, Grid, Container, Paper } from '@material-ui/core';
import LanguagePicker from '../../../components/UI/LanguagePicker/LanguagePicker.js';
import Copyright from '../../../components/UI/Footer/Copyright.js';
import LoginForm from '../../../components/Login/LoginForm.js';

function Login() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
        <LanguagePicker />
      </Grid>
      <Container component="main" maxWidth="sm">
        <Paper elevation={3}>
          <LoginForm />
          <Copyright />
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default Login;
