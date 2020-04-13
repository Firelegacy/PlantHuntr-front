import React from 'react';
import { Box, Link } from '@chakra-ui/core';
import { Link as ReachLink } from '@reach/router';
import { useTranslation } from 'react-i18next';
import './menu-link.css';

function MenuLink({ path, textKey }) {
  const { t } = useTranslation();
  return (
    <Box
      fontFamily="Raleway"
      fontSize="1.3em"
      textTransform="capitalize"
      className="effect"
    >
      <Link
        as={ReachLink}
        to={path}
        _focus={{
          outline: 'none',
          color: 'green.600',
          fontWeight: 500
        }}
        _hover={{
          outline: 'none',
          color: 'green.600',
          fontWeight: 500
        }}
      >
        {t(textKey)}
      </Link>
    </Box>
  );
}

export default MenuLink;
