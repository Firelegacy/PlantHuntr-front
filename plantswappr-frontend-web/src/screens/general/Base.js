import React, { Fragment } from "react";

import Menu from "components/general/menu/Menu";
import Footer from "components/general/footer/Footer";
import { Box } from "@chakra-ui/core";

function Base(props) {
  return (
    <Fragment>
      <Menu />
      <Box minHeight="calc(100vh - 329px)">{props.children}</Box>
      <Footer />
    </Fragment>
  );
}

export default Base;
