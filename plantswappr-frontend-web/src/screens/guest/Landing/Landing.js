import React from 'react';
import { CssBaseline, Grid, Container, Paper } from '@material-ui/core';
import Copyright from '../../../components/UI/Footer/Copyright.js';
import LandingContent from '../../../components/Landing/LandingContent.js';
import LanguagePicker from '../../../components/UI/LanguagePicker/LanguagePicker.js';

function Landing() {
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
          <LandingContent />
          <Copyright />
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default Landing;
