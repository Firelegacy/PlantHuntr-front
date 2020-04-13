import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Link,
  Checkbox,
  Icon
} from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';

function LoginForm() {
  const { handleSubmit, errors, register, formState } = useForm();
  const { t } = useTranslation();

  function validateName(value) {
    let error;
    if (!value) {
      error = 'Name is required';
    } else if (value !== 'Naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error || true;
  }

  function onSubmit(values) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  }

  return (
    <Box m={3}>
      <Box>
        <Icon name="lock" size="32px" color="red.500" />
      </Box>
      <p>{t('login.asklogin')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">{t('login.username.label')}</FormLabel>
          <Input
            name="email"
            placeholder={t('login.username.label')}
            ref={register({ validate: validateName })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">{t('login.password.label')}</FormLabel>
          <Input
            name="password"
            placeholder={t('login.password.label')}
            ref={register({ validate: validateName })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Box>
          <Checkbox value="remember" color="primary" />
          {t('login.keepconnection')}
        </Box>
        <Button
          mt={4}
          variantColor="teal"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          {t('login.ready')}
        </Button>
        <Box>
          <Box>
            <Link href="#" variant="body2">
              {t('login.password.forgotten')}
            </Link>
          </Box>
          <Box>
            <Link href="#" variant="body2">
              {t('login.register')}
            </Link>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default LoginForm;
