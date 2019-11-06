import React from 'react';
import EcoTwoTone from '@material-ui/icons/EcoTwoTone';
import { Typography, Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

function ExpansionPanelList() {
  const { t } = useTranslation();

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid container item xs="auto">
        <Grid item xs={12}>
          <Typography align="left">
            {t('landing.presentation.answer')}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} direction="row">
        <Grid item xs={1}>
          <EcoTwoTone />
        </Grid>
        <Grid item xs>
          <Typography align="left">
            {t('landing.presentation.point1')}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} direction="row">
        <Grid item xs={1}>
          <EcoTwoTone />
        </Grid>
        <Grid item xs>
          <Typography align="left">
            {t('landing.presentation.point2')}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} direction="row">
        <Grid item xs={1}>
          <EcoTwoTone />
        </Grid>
        <Grid item xs>
          <Typography align="left">
            {t('landing.presentation.point3')}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} direction="row">
        <Grid item xs={1}>
          <EcoTwoTone />
        </Grid>
        <Grid item xs>
          <Typography align="left">
            {t('landing.presentation.point4')}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} direction="row">
        <Grid item xs={1}>
          <EcoTwoTone />
        </Grid>
        <Grid item xs>
          <Typography align="left">
            {t('landing.presentation.point5')}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExpansionPanelList;
