'use client';

// images
import colorfulTanner from '@/public/images/aiColorfulTanner.webp';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// chakra-ui
import {
  Heading,
  Text,
  Flex,
  Image,
  Stack,
  Button,
  VStack,
  Box,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

// local components
import TannerTypes from './_components/sections/tannerTypes';
import DeveloperIcon from './_components/icons/developerIcon';
import DesignerIcon from './_components/icons/designerIcon';
import ArtistIcon from './_components/icons/artistIcon';
import MusicianIcon from './_components/icons/musicianIcon';

export default function Home() {
  const { loading, setLoading } = useContext(LoadingContext);
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  const tannerTypes = [
    {
      heading: 'As a Developer',
      text: 'I thrive in the realm of possibilities, transforming complex problems into elegant software solutions. My journey in full stack development, UX/UI design, and digital marketing is marked by a commitment to excellence and innovation.',
      boldText: 'I thrive in the realm of possibilities,',
      icon: <DeveloperIcon />,
      color: 'var(--neonBlue)',
    },
    {
      heading: 'As a Designer',
      text: 'I bring ideas to life with meticulous detail and creative flair. My approach blends the principles of UX/UI design with my artistic eye for aesthetics, crafting interfaces that are not only functional but also visually captivating.',
      boldText:
        'I bring ideas to life with meticulous detail and creative flair.',
      icon: <DesignerIcon />,
      color: 'var(--neonGreen)',
    },
    {
      heading: 'As an Artist',
      text: 'Beyond the pixels and algorithms, I explore the vivid textures of oil painting, where each stroke tells a story and captures emotions in color.',
      boldText: 'Beyond the pixels and algorithms,',
      icon: <ArtistIcon />,
      color: 'var(--lightNeonPurple)',
    },
    {
      heading: 'As a Musician',
      text: 'My musical endeavors harmonize the rhythm of coding with the melodies of life, reflecting my belief that the best creations arise from a symphony of diverse talents.',
      boldText: 'My musical endeavors harmonize the rhythm of coding',
      icon: <MusicianIcon />,
      color: 'var(--orangeAlt)',
    },
  ];

  return (
    <Box pt={'2rem'}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        color={'var(--white)'}
        align={'center'}
        justify={'space-between'}
        background={'var(--darkGray)'}>
        <Stack
          maxW={{ base: '100%', md: '500px' }}
          p={'2rem'}
          mb={{ base: '1rem', md: '4rem' }}>
          <Heading
            mb={'1rem'}
            size={'4xl'}
            fontWeight={800}>
            Not your average developer.
          </Heading>
          <VStack
            align={'flex-start'}
            mb={'2rem'}>
            <Text>
              I am Tanner Lemon, a Full Stack Developer with a passion for
              building beautiful, functional, and accessible (things)...
            </Text>
            <Button
              _hover={{
                color: 'var(--orangeAlt)',
                textDecoration: 'underline',
              }}
              m={0}
              textAlign={'left'}
              onClick={() => router.push('/about')}
              variant={'link'}
              color={'var(--neonGreen)'}>
              but there&apos;s more.
            </Button>
          </VStack>
          <Button
            size={'lg'}
            _hover={{
              background: 'var(--neonGreen)',
            }}
            onClick={() => router.push('/timeline')}
            mr={'1rem'}
            color={'var(--darkGray)'}
            rightIcon={<ArrowForwardIcon />}
            background={'var(--neonBlue)'}>
            View my work
          </Button>
        </Stack>
        <Stack
          m={'1rem'}
          mr={'-3rem'}
          background={'var(--neonBlue)'}
          p={'1rem'}
          borderRadius={'9px'}>
          <Flex
            alignItems={'center'}
            overflow={'hidden'}
            borderRadius={'9px'}>
            <Image
              src={colorfulTanner.src}
              alt={'Tanner Lemon, full stack developer'}
              borderRadius={'9px'}
              width={'100%'}
            />
          </Flex>
        </Stack>
      </Flex>
      <Box p={'4rem 0'}>
        <Flex
          flexWrap={'wrap'}
          justify={'center'}
          w={'100%'}>
          {tannerTypes.map((type) => (
            <TannerTypes
              key={type.heading}
              heading={type.heading}
              text={type.text}
              boldText={type.boldText}
              icon={type.icon}
              color={type.color}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
