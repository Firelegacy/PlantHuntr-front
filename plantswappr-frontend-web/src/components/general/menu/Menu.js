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
      top={0}
      left={0}
      bg="gray.200"
      w="100%"
      px={3}
      py={1}
      justifyContent="space-between"
      alignItems="center"
      boxShadow="0px 3px 25px 0px rgba(46,49,49,0.3)"
      zIndex="75"
    >
      <Box>
        <DrawerMenu />
      </Box>
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <MenuLink path="/home" textKey="menu.link.home" />
        <MenuLink path="/store" textKey="menu.link.store" />
        <Image src={logoFull} alt="Logo" size="100px" />
        <MenuLink path="/info" textKey="menu.link.info" />
        <MenuLink path="/contact" textKey="menu.link.contact" />
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
