import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Box } from '@material-ui/core';
import Title from './Title';
import Logo from './Logo';
import logo from '../../assets/images/leaf.png';
import ExpansionPanel from './ExpansionPanel';
import Link from '../UI/Links/Link';
import LinkButton from '../UI/Links/LinkButton';

function LandingContent() {
  const { t } = useTranslation();

  return (
    <Box m={3}>
      <Grid container>
        <Grid item xs={12}>
          <Logo src={logo} alt="logo" />
        </Grid>
        <Grid item xs={12}>
          <Title />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Box marginY={1} textAlign="justify">
            <Typography component="p">
              {t('landing.presentation.question')}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Box marginY={1}>
            <ExpansionPanel />
          </Box>
        </Grid>
      </Grid>
      <Box marginY={1}>
        <LinkButton to="/register" value={t('landing.register')} />
      </Box>
      <Grid container justify="flex-end">
        <Grid item>
          <Link value={t('landing.login')} path="/login" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default LandingContent;
