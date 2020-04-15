import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Image,
  Badge,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AspectRatioBox,
  Flex
} from '@chakra-ui/core';
import { AiOutlineSwap } from 'react-icons/ai';
import img from 'assets/images/alocasia.jpg';

function PlantCard() {
  const [isOpen, setIsOpen] = useState();
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
  const { t } = useTranslation();

  const plant = {
    imageUrl: img,
    imageAlt: 'alocasia macrorrhizos',
    postedDate: new Date(2020, 2, 1),
    title: 'Alocasia macrorrhizos',
    owner: 'GreenMama',
    formattedPrice: '$1,900.00',
    propositionCount: 5,
    wanted: ['Philodendron Birkin', 'Alocasia Cuprea']
  };

  return (
    <Box rounded="sm" overflow="hidden" backgroundColor="gray.200">
      <AspectRatioBox ratio={6 / 5}>
        <Image src={plant.imageUrl} alt={plant.imageAlt} objectFit="cover" />
      </AspectRatioBox>

      <Box p={2}>
        <Flex>
          <Badge px={2} mr={1} variant="solid" variantColor="red">
            New
          </Badge>
          <Badge px={2} mr={1} variant="outline" variantColor="green">
            Wishlist
          </Badge>
          <Badge px={2} mr={1} variant="solid" variantColor="green">
            Match
          </Badge>
        </Flex>

        <Box
          mt={1}
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
        >
          {plant.postedDate.toLocaleDateString()}
        </Box>

        <Box
          mt={1}
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {plant.title}
        </Box>

        <Box fontSize="md" fontWeight="500">
          <Box as="span" color="gray.600" fontSize="sm">
            Posted by{' '}
          </Box>
          {plant.owner}
        </Box>

        <Flex mt="2" justifyContent="center">
          <Button
            size="sm"
            leftIcon={AiOutlineSwap}
            variantColor="green"
            onClick={() => setIsOpen(true)}
          >
            SWAP
          </Button>
        </Flex>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button variantColor="red" onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
    </Box>
  );
}

export default PlantCard;
