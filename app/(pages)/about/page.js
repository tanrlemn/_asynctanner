'use client';

// images
import tannerDancing from '@/public/images/aiTannerDancing.webp';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useContext } from 'react';

// chakra-ui
import {
  Box,
  Flex,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function About() {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <Box
      background={'var(--darkGrayAlt)'}
      color={'var(--lighterGray)'}
      p={'2rem'}
      pt={'10rem'}>
      <Box
        mb={'4rem'}
        h={'fit-content'}
        position={'relative'}>
        <VStack>
          <Stack
            mb={'4rem'}
            w={'100%'}
            justify={'space-between'}>
            <Heading
              mb={'1rem'}
              size={'4xl'}
              fontWeight={800}>
              Some words about me.
            </Heading>
            <Text>
              Tanner Lemon is a designer and developer with a passion for
              building appliations that are innovative, scalable, and user
              friendly. He has a background in UX design and is currently
              working as a full stack developer, web designer, and marketing
              specialist for his own company, Thought Co.
            </Text>
          </Stack>
          <Box></Box>
        </VStack>
      </Box>
    </Box>
  );
}
