import { Button, Divider, Stack, Text } from '@chakra-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Hunt = () => {
  const { t } = useTranslation();
  return (
    <Stack
      align="center"
      width="100%"
      backgroundColor="black"
      color="white"
      p="3vh"
    >
      <Text fontSize="3xl">{t('landing.hunt.title')}</Text>
      <Text fontSize="lg">{t('landing.hunt.presentation')}</Text>
      <Button m="3vh" size="lg" backgroundColor="white" color="black">
        {t('landing.hunt.button')}
      </Button>
      <Divider mt="3vh" borderColor="white" borderWidth="3px" width="70%" />
    </Stack>
  );
};

export default Hunt;
