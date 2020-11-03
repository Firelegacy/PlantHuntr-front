import React from 'react';
import { Flex } from "@chakra-ui/core";
import auction from 'assets/images/auction.jpg';
import deals from 'assets/images/deals.jpg'
import sale from 'assets/images/sale.jpg'
import sweetDeal from 'assets/images/sweet-deal.jpg'
import Tile from '../../../../components/general/tile/Tile';

export function MenuTiles(){
    return (
        <Flex align="center"  height="40vh" bg="grey" id="menuTiles">
            <Tile img={`url(${auction})`} text="Auctions" />
            <Tile img={`url(${deals})`} text="Deals" />
            <Tile img={`url(${sale})`} text="Sales"/>
            <Tile img={`url(${sweetDeal})`} text="Best of both worlds"/>
        </Flex>
    );
}