'use client';

// context
import { LoadingContext } from '../lib/context/LoadingProvider';

// hooks
import { useContext } from 'react';

// components
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Button,
  Link,
  VStack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function Footer() {
  const { loading } = useContext(LoadingContext);

  return (
    <>
      {!loading && (
        <footer
          style={{
            background: 'var(--darkGray)',
            borderTop: '1px solid var(--midGray)',
          }}>
          <VStack
            fontSize={'0.8rem'}
            fontWeight={300}
            color={'var(--lighterGray)'}
            w={'100%'}
            justify={'center'}
            p={'2rem 1rem 1rem 1rem'}>
            <Text>© 2024 Tanner Lemon, All Rights reserved</Text>
            <Link
              href='https://github.com/tanrlemn/_asynctanner'
              color={'var(--neonBlue)'}>
              View this repo on GitHub
            </Link>
          </VStack>
        </footer>
      )}
    </>
  );
}
