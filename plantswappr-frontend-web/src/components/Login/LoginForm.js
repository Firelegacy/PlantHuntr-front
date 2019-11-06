import React from 'react';
import {
  Grid,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  TextField,
  Link,
  Box,
  Container
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { textAlign } from '@material-ui/system';

function LoginForm() {
  const { t } = useTranslation();
  return (
    <Box m={3}>
      <Container>
        <LockOutlined />
      </Container>
      <Typography component="h1" variant="h5">
        {t('login.asklogin')}
      </Typography>
      <form noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label={t('login.username.label')}
          name="email"
          autoComplete="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label={t('login.password.label')}
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t('login.keepconnection')}
          />
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary">
          {t('login.ready')}
        </Button>
        <Grid container justify="space-between">
          <Grid item>
            <Link href="#" variant="body2">
              {t('login.password.forgotten')}
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {t('login.register')}
            </Link>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default LoginForm;
