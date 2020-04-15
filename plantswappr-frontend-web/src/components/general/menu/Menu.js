import React from 'react';
import { Box, Flex, Image, IconButton } from '@chakra-ui/core';
import { MdAccountCircle } from 'react-icons/md';
import { GiOakLeaf } from 'react-icons/gi';

import logoFull from 'assets/images/green-full.png';

import DrawerMenu from 'components/general/menu/drawer/DrawerMenu';
import MenuLink from './MenuLink/MenuLink';
import LanguagePicker from '../language-picker/LanguagePicker';

function Menu() {
  return (
    <Flex
      position="sticky"
      zIndex="1"
      top={0}
      left={0}
      bg="gray.200"
      w="100%"
      px={3}
      py={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <DrawerMenu />
      </Box>
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <MenuLink path="/plantswappr" textKey="menu.link.about-plantswappr" />
        <Image src={logoFull} alt="Logo" size="100px" />
        <MenuLink path="/todo" textKey="todo" />
      </Flex>
      <Box>
        <LanguagePicker />
        <IconButton
          variant="ghost"
          variantColor="gray"
          size="md"
          fontSize="25px"
          icon={GiOakLeaf}
          aria-label="Planned swaps"
          title="Planned swaps"
          isRound="true"
        />
        <IconButton
          variant="ghost"
          variantColor="gray"
          size="md"
          fontSize="25px"
          icon={MdAccountCircle}
          aria-label="User menu"
          isRound="true"
        />
      </Box>
    </Flex>
  );
}

export default Menu;
