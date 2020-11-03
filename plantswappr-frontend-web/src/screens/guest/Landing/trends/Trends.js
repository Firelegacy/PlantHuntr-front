import { Flex, Heading, Stack } from '@chakra-ui/core';
import Tile from 'components/general/tile/Tile';
import React from 'react';
import image from '../../../../assets/images/deals.jpg';

const Trends = () => {
  const plants = [
    {
      name: 'Philodendron White Princess',
      img: `url(${image})`,
      detail: '126 searches yesterday'
    },
    { name: 'Monstera Dubia', img: `url(${image})`, detail: '116 searches yesterday' },
    { name: 'Anthurium Queen', img: `url(${image})`, detail: '100 searches yesterday' },
    { name: 'Hoya Carnosa', img: `url(${image})`, detail: '80 searches yesterday' },
    { name: 'Anthurium Queen', img: `url(${image})`, detail: '73 searches yesterday' },
    { name: 'Hoya Carnosa', img: `url(${image})`, detail: '53 searches yesterday' }
  ];
  return (
    <Stack align="center" paddingY="5vh">
      <Heading size="2xl" paddingBottom="5vh">
        Trending plants
      </Heading>
      <Flex
        align="center"
        height="40vh"
        id="menuTiles"
        justifyContent="space-between"
        width="100%"
      >
        {plants.map((plant, index) => {
          return (
            <Tile
              key={index}
              img={plant.img}
              text={plant.name}
              spaced={true}
              detail={plant.detail}
            />
          );
        })}
      </Flex>
    </Stack>
  );
};

export default Trends;
