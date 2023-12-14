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
          <Flex
            w={'100%'}
            justify={'center'}
            p={'2rem 1rem 1rem 1rem'}>
            <Text
              fontSize={'0.8rem'}
              fontWeight={300}
              color={'var(--lighterGray)'}>
              © 2024 Tanner Lemon, All Rights reserved
            </Text>
          </Flex>
        </footer>
      )}
    </>
  );
}
