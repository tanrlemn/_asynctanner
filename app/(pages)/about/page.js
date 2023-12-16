'use client';

// images
import aboutTanner from '@/public/images/aboutTanner.webp';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';
import { ContactContext } from '@/app/lib/context/ContactProvider';

// hooks
import { useEffect, useContext } from 'react';

// chakra-ui
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Tag,
  Link,
  Container,
  Button,
} from '@chakra-ui/react';
import ListSection from '@/app/_components/sections/listSection';

export default function About() {
  const { setLoading } = useContext(LoadingContext);
  const { contactOnOpen } = useContext(ContactContext);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <Box
      background={'var(--darkGrayAlt)'}
      color={'var(--lighterGray)'}
      p={{ base: '3rem 0', md: '6rem 3rem' }}>
      <Container
        maxW={'680px'}
        mb={'4rem'}
        h={'fit-content'}
        position={'relative'}>
        <Flex
          direction={{ base: 'column' }}
          pb={'5rem'}
          borderBottom={'1px solid var(--gray)'}
          mb={'4rem'}
          w={'100%'}>
          <Stack pb={'3rem'}>
            <Heading
              maxW={'550px'}
              mb={'1rem'}
              size={'4xl'}
              fontWeight={800}>
              Some words about me.
            </Heading>
            <Flex
              mb={'2rem'}
              flexWrap={'wrap'}
              gap={'1rem'}>
              <Tag
                colorScheme={'teal'}
                maxW={'fit-content'}>
                Full Stack Developer
              </Tag>
              <Tag
                colorScheme={'yellow'}
                maxW={'fit-content'}>
                UX/UI Designer
              </Tag>
              <Tag
                colorScheme={'blue'}
                maxW={'fit-content'}>
                Artist
              </Tag>
              <Tag
                colorScheme={'red'}
                maxW={'fit-content'}>
                Musician
              </Tag>
            </Flex>
            <Heading
              size={'md'}
              mb={'0.5rem'}
              color={'var(--lightGray)'}>
              Welcome to my brain – a world where technology meets artistry.
            </Heading>
            <Text
              maxW={'750px'}
              fontSize={'1.1rem'}>
              I am Tanner Lemon, a versatile Full Stack Developer, an intuitive
              UX/UI Designer, a passionate artist, and a creative musician. My
              journey is a blend of precise coding, innovative design,
              expressive art, and soulful music.
            </Text>
          </Stack>
          <Image
            src={aboutTanner.src}
            alt={'Tanner Lemon'}
            w={{ base: '100%', md: '450px' }}
            borderRadius={'1rem'}
            boxShadow={'0 0 10px 5px var(--darkGray)'}
          />
        </Flex>

        <Box
          borderBottom={'1px solid var(--gray)'}
          mb={'3rem'}>
          <Heading
            mb={'1.5rem'}
            size={'lg'}>
            My Story
          </Heading>
          <ListSection
            color={'var(--teal)'}
            subheading={'Crafting Code and Design'}
            listItems={[
              'With a foundation in full stack development, I’ve spent years weaving the web of functional and aesthetic digital experiences. My expertise lies in turning complex coding challenges into elegant, user-friendly solutions.',
              'As a UX/UI Designer, I am committed to creating interfaces that are not just user-centric but also visually striking. I believe that a great design is the one that speaks to users, guiding them seamlessly through their digital journey.',
            ]}
          />
          <ListSection
            color={'var(--yellow)'}
            subheading={'Artistic Pursuits'}
            listItems={[
              'Away from the keyboard, I dive into the world of oil painting. Each canvas is a playground where emotions are expressed through vibrant colors and bold strokes. My art is a reflection of my perspective, an exploration of creativity beyond the digital realm.',
              'Music is another avenue where I express my creativity. Whether it’s composing, playing, or just experimenting with melodies, music allows me to harmonize my technical skills with my artistic sensibilities.',
            ]}
          />
        </Box>
        <Box
          borderBottom={'1px solid var(--gray)'}
          mb={'3rem'}>
          <Heading
            mb={'1.5rem'}
            size={'lg'}>
            Professional Path
          </Heading>
          <ListSection
            color={'var(--neonBlue)'}
            subheading={'Full Stack Developer'}
            listItems={[
              'My career is a tapestry of diverse experiences, from developing complex web applications to designing user-centric interfaces and leading digital marketing strategies.',
              'I have collaborated with various teams, guided projects to fruition, and embraced leadership roles, always with a commitment to excellence and innovation.',
              'My portfolio is a testament to my adaptability and skill in managing multifaceted projects, all while pushing the boundaries of technology and design.',
            ]}
          />
        </Box>
        <Box
          borderBottom={'1px solid var(--gray)'}
          mb={'3rem'}>
          <Heading
            mb={'1.5rem'}
            size={'lg'}>
            Beyond Work
          </Heading>
          <ListSection
            color={'var(--orangeAlt)'}
            subheading={'A Glimpse into My World'}
            listItems={[
              'When not coding or designing, you’ll find me lost in a world of paints, or composing music for the playlist of my life.',
              'I believe in continuous learning and regularly engage in professional development activities, keeping abreast of the latest in technology, design, and arts.',
            ]}
          />
        </Box>
        <Heading
          mb={'1.5rem'}
          size={'2xl'}>
          Let&apos;s Connect
        </Heading>
        <Text>
          I am always eager to collaborate on exciting projects, explore new
          opportunities, or simply have a chat about technology, art, or music.
          Feel free to{' '}
          <Button
            display={'inline'}
            _hover={{
              color: 'var(--orangeAlt)',
              textDecoration: 'underline',
            }}
            m={0}
            textDecoration={'underline'}
            fontWeight={400}
            textAlign={'left'}
            onClick={contactOnOpen}
            variant={'link'}
            color={'var(--neonGreen)'}>
            reach out to me.
          </Button>
        </Text>
      </Container>
    </Box>
  );
}
