import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Trans } from 'react-i18next';

function Title() {
  return (
    <Typography component="div" variant="h2">
      <Box fontFamily="Raleway" letterSpacing={6} fontSize="h2.fontSize">
        <Trans i18nKey="landing.welcome" />
      </Box>
      <Box fontFamily="Pacifico" fontSize="h1.fontSize" pb={3}>
        PlantSwappr
      </Box>
    </Typography>
  );
}

export default Title;
