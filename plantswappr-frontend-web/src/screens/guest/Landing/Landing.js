import React from 'react';
import Base from 'screens/general/Base';
import PlantCard from 'components/general/cards/PlantCard';
import { SimpleGrid } from '@chakra-ui/core';

function Landing() {
  return (
    <Base>
      <SimpleGrid
        columns={{ sm: 2, md: 4, lg: 6, xl: 10 }}
        spacing={2}
        padding={2}
      >
        {[...Array(10)].map((x, i) => (
          <PlantCard key={i} />
        ))}
      </SimpleGrid>
    </Base>
  );
}

export default Landing;
