import React from 'react';
import { Flex, Image } from '@chakra-ui/core';
import background from 'assets/images/jungle-banner.jpg';

function Banner() {
  return (
    <Flex w="100%" h="100px">
      <Image src={background} objectFit="cover" alt="Banner top" />
    </Flex>
  );
}

export default Banner;
