import { Divider } from '@chakra-ui/core';
import React from 'react';
import Base from 'screens/general/Base';
import Genuses from './genuses/Genuses';
import Hunt from './hunt/Hunt';
import Introduction from './introduction/Introduction';
import { MenuTiles } from './menu-tiles/MenuTiles';
import Trends from './trends/Trends';
import WelcomeParallax from './welcome-parallax/WelcomeParallax';

function Landing() {
  return (
    <Base>
      <WelcomeParallax />
      <Introduction />
      <MenuTiles />
      <Genuses />
      <Divider borderColor="black" borderWidth="5px" />
      <Hunt />
      <Trends />
    </Base>
  );
}

export default Landing;
