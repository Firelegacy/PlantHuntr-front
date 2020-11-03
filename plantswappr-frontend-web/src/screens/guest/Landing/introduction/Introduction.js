import { Heading, IconButton, Link, Stack, Text } from '@chakra-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
  const { t } = useTranslation();
  return (
    <Stack spacing={3} p="2vh" bg="black" align="center">
      <Heading fontSize="xl" color="white">
        {t('landing.introduction.title')}
      </Heading>
      <Text fontSize="md" color="white">
        {t('landing.introduction.text')}
      </Text>
      <Link href="#menuTiles" color="white">
        <IconButton
          variant="ghost"
          variantColor="white"
          aria-label="Discover"
          icon="arrow-down"
        />
      </Link>
    </Stack>
  );
};

export default Introduction;
