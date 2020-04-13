import React, { Fragment } from 'react';
import { Link as ReachLink } from '@reach/router';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { IoIosMailOpen } from 'react-icons/io';
import { Flex, Image, Box, Avatar, Text, Link } from '@chakra-ui/core';

import background from 'assets/images/monstera-fern-banner.jpg';
import me from 'assets/images/me.jpg';

import Copyright from './Copyright';

function Footer() {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Flex w="100%" h="80px">
        <Image src={background} objectFit="cover" alt="Banner footer" />
      </Flex>
      <Flex bg="gray.800" pt={3} pb={1}>
        <Flex paddingX={2} alignItems="center">
          <Avatar size="xl" name="Virginia Dabrowski" src={me} />
        </Flex>
        <Box paddingX={2} flex="3 0 0" minWidth="30%">
          <Text color="teal.500">{t('footer.about-me.title')}</Text>
          <Text fontSize="sm" as="cite" color="gray.100">
            {t('footer.about-me.text')}
          </Text>
        </Box>
        <Box paddingX={2} flex="2 1 0" color="gray.100">
          <Text>
            <Link as={ReachLink} to="/faq">
              {t('footer.faq')}
            </Link>
          </Text>
          <Text>
            <Link as={ReachLink} to="/terms-of-use">
              {t('footer.terms-of-use')}
            </Link>
          </Text>
          <Text>
            <Link as={ReachLink} to="/privacy-policy">
              {t('footer.privacy-policy')}
            </Link>
          </Text>
          <Text>
            <Link as={ReachLink} to="">
              {t('footer.todo')}
            </Link>
          </Text>
        </Box>
        <Box paddingX={2} flex="2 1 0" color="gray.100">
          <Flex flexDirection="column" height="100%">
            <Box flexGrow="1">
              <Text>
                <Link as={ReachLink} to="/blog">
                  {t('footer.blog')}
                </Link>
              </Text>
              <Text>
                <Link as={ReachLink} to="/support-us">
                  {t('footer.support-us')}
                </Link>
              </Text>
            </Box>
            <Box>
              <Text textAlign="center">{t('footer.find-us')}</Text>
              <Flex justifyContent="space-around">
                <Box as={FaInstagram} size="30px" color="gray.100" />
                <Box as={FaFacebookSquare} size="30px" color="gray.100" />
                <Box as={FaTwitter} size="30px" color="gray.100" />
                <Box as={IoIosMailOpen} size="30px" color="gray.100" />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex
        bg="gray.800"
        justifyContent="center"
        alignItems="center"
        borderTopWidth="1px"
        borderTopColor="gray.700"
        pb={1}
      >
        <Copyright />
      </Flex>
    </Fragment>
  );
}

export default Footer;
