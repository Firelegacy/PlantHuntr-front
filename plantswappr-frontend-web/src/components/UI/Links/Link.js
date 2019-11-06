import React from 'react';
import { Link as ReachLink } from '@reach/router';
import { Link as MaterialLink } from '@material-ui/core';

const InnerLink = React.forwardRef((props, ref) => (
  <ReachLink innerRef={ref} {...props} />
));

export default function Link({ value, path }) {
  return (
    <MaterialLink component={InnerLink} to={path}>
      {value}
    </MaterialLink>
  );
}
