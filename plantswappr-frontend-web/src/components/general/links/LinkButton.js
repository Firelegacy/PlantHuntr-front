import React from 'react';
import { Link } from '@reach/router';
import { Button } from '@chakra-ui/core';

export default function LinkButton({ value, to }) {
  return (
    <Link to={to}>
      <Button type="button" fullWidth variant="contained" color="primary">
        {value}
      </Button>
    </Link>
  );
}
