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
      <Box
        minHeight="calc(100vh - 429px)"
        background="linear-gradient(180deg, rgba(237,242,247,1) 0%, rgba(160,174,192,1) 24%, rgba(26,32,44,1) 72%);"
      >
        {props.children}
      </Box>
      <Footer />
    </Fragment>
  );
}

export default Base;
