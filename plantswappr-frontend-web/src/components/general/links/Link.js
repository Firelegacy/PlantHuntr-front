import React from 'react';
import { Link as ReachLink } from '@reach/router';
import { Link as ChakraLink } from '@chakra-ui/core';

const InnerLink = React.forwardRef((props, ref) => (
  <ReachLink innerRef={ref} {...props} />
));

export default function Link({ value, path }) {
  return (
    <ChakraLink component={InnerLink} to={path}>
      {value}
    </ChakraLink>
  );
}
