import { Flex, Heading, Stack } from '@chakra-ui/core';
import Tile from 'components/general/tile/Tile';
import React from 'react';
import image from '../../../../assets/images/auction.jpg';

const Genuses = () => {
  const genuses = [ //todo replace by real data
    { name: 'Philodendron', img: `url(${image})` },
    { name: 'Monstera', img: `url(${image})` },
    { name: 'Anthurium', img: `url(${image})` },
    { name: 'Hoya', img: `url(${image})` }
  ];
  return (
    <Stack align="center" paddingY="5vh">
      <Heading size="2xl" paddingBottom="5vh">Genuses</Heading>
      <Flex
        align="center"
        height="40vh"
        id="menuTiles"
        justifyContent="space-between"
        width="100%"
      >
        {genuses.map((genus, index) => {
          return <Tile key={index} img={genus.img} text={genus.name} spaced={true} />;
        })}
      </Flex>
    </Stack>
  );
};

export default Genuses;
