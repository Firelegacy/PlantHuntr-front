import React, { Fragment } from 'react';

import Menu from 'components/general/menu/Menu';
import Banner from 'components/general/banner/Banner';
import Footer from 'components/general/footer/Footer';
import { Box } from '@chakra-ui/core';

function Base(props) {
  return (
    <Fragment>
      <Menu />
      <Banner />
      <Box minHeight="calc(100vh - 429px)">{props.children}</Box>
      <Footer />
    </Fragment>
  );
}

export default Base;
