import React from 'react';
import { Link, Text, Box } from '@chakra-ui/core';

export default function Copyright() {
  return (
    <Box>
      <Text as="cite" fontSize="md" color="gray.100" fontFamily="Raleway">
        Copyright{' '}
        <Link href="https://github.com/Firelegacy" isExternal>
          Virginia Dabrowski
        </Link>{' '}
        {new Date().getFullYear()}.
      </Text>
    </Box>
  );
}
