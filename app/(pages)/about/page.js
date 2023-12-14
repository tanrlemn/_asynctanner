'use client';

// images
import aboutTanner from '@/public/images/aboutTanner.webp';

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
  Tag,
  HStack,
  UnorderedList,
  ListItem,
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
      p={'3rem'}>
      <Box
        mb={'4rem'}
        h={'fit-content'}
        position={'relative'}>
        <Box>
          <Box
            maxW={'250px'}
            mb={'2rem'}>
            <Image
              src={aboutTanner.src}
              alt={'Tanner Lemon'}
              w={'100%'}
              h={'auto'}
              borderRadius={'1rem'}
              boxShadow={'0 0 10px 5px var(--darkGray)'}
            />
          </Box>
          <Stack
            mb={'3rem'}
            w={'100%'}
            justify={'space-between'}>
            <HStack mb={'2rem'}>
              <Tag colorScheme={'teal'}>Full Stack Developer</Tag>
              <Tag colorScheme={'yellow'}>UX/UI Designer</Tag>
              <Tag colorScheme={'blue'}>Artist</Tag>
              <Tag colorScheme={'red'}>Musician</Tag>
            </HStack>
            <Heading
              mb={'1rem'}
              size={'4xl'}
              fontWeight={800}>
              Some words about me.
            </Heading>
            <Heading
              size={'md'}
              mb={'1rem'}
              color={'var(--lightGray)'}>
              Welcome to my brain – a world where technology meets artistry.
            </Heading>
            <Text maxW={'750px'}>
              I am Tanner Lemon, a versatile Full Stack Developer, an intuitive
              UX/UI Designer, a passionate artist, and a creative musician. My
              journey is a blend of precise coding, innovative design,
              expressive art, and soulful music.
            </Text>
          </Stack>
          <Box maxW={'800px'}>
            <Heading
              mb={'1rem'}
              size={'lg'}>
              My Story
            </Heading>
            <Heading
              mb={'1.5rem'}
              size={'sm'}
              color={'var(--teal)'}>
              Crafting Code and Design
            </Heading>
            <UnorderedList>
              <ListItem mb={'1rem'}>
                With a foundation in full stack development, I’ve spent years
                weaving the web of functional and aesthetic digital experiences.
                My expertise lies in turning complex coding challenges into
                elegant, user-friendly solutions.
              </ListItem>
              <ListItem>
                As a UX/UI Designer, I am committed to creating interfaces that
                are not just user-centric but also visually striking. I believe
                that a great design is the one that speaks to users, guiding
                them seamlessly through their digital journey.
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
