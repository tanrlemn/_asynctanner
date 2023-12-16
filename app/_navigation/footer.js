'use client';

// context
import { LoadingContext } from '../lib/context/LoadingProvider';

// hooks
import { useContext } from 'react';
import { usePathname } from 'next/navigation';

// components
import { Text, Link, VStack } from '@chakra-ui/react';

export default function Footer() {
  const { loading } = useContext(LoadingContext);
  const pathname = usePathname();

  const isTimeline = pathname === '/timeline';

  return (
    <>
      {!loading && !isTimeline && (
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
