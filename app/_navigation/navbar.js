'use client';

// hooks
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';

// chakra-ui
import { Flex, Box } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

// local components
import Logo from '../_components/brandElements/logo';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';

export default function Navbar() {
  const isMobile = useIsMobile();

  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About Me',
      path: '/about',
    },
    {
      name: 'Timeline',
      path: '/timeline',
    },
    {
      name: 'GitHub',
      path: 'https://github.com/tanrlemn',
      icon: (
        <Box
          position={{ base: 'relative', md: 'absolute' }}
          right={'-0.3rem'}
          top={'0.2rem'}
          transform={'rotate(-45deg)'}
          pb={'0.2rem'}
          ml={{ base: '0.5rem', md: '0.2rem' }}
          maxW={'fit-content'}
          maxH={'fit-content'}>
          <ArrowForwardIcon />
        </Box>
      ),
      target: '_blank',
    },
  ];

  return (
    <Box
      zIndex={1000}
      position={'sticky'}
      top={'0'}>
      <Flex
        zIndex={1000}
        background={'var(--darkGray)'}
        backdropFilter={'blur(10px) saturate(100%)'}
        w={'100%'}
        p={'0.75rem'}
        borderBottom={'1px solid var(--midGray)'}>
        <Flex
          w={'100%'}
          align={'center'}
          justify={{ base: 'space-between' }}>
          <Logo />
          {isMobile ? (
            <MobileNav routes={routes} />
          ) : (
            <DesktopNav routes={routes} />
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
