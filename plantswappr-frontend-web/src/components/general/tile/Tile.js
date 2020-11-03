import { Flex, Stack, Text } from '@chakra-ui/core';
import React from 'react';
import './tile.css';

const Tile = ({img, text, spaced, detail}) => {
    return (
        <Flex width="25%" height="40vh" className={`container ${spaced ? "spaced" : ""}`}>
            <Flex width="100%" height="40vh" justify="center" align="center" backgroundImage={img} backgroundSize="cover" backgroundPosition="center" className="holder">
                <Stack position="relative" width="100%" height="100%" justify="center" align="center" textAlign="center" backgroundColor="rgba(0,0,0,0.3)" className="overlay">
                    <Text fontFamily="Raleway" fontSize="3xl" color="white" textShadow="3px 3px 5px black" zIndex="50" wordBreak>{text}</Text>
                    { detail ? <Text fontFamily="Raleway" fontSize="2xl" color="white" backgroundColor="black" boxShadow="5px 5px 1px 1px rgba(255,255,255,1)" textShadow="3px 3px 5px black" zIndex="50" wordBreak>{detail}</Text> : "" }
                </Stack>
            </Flex>
        </Flex>
    )
}

export default Tile;
