'use client';

// images
import aiFlowerFace from '@/public/images/aiFlowerFace.webp';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useState, useContext } from 'react';

// chakra-ui
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

// components
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// local components
import ProjectCard from '@/app/_components/cards/timelineItemCard';

export default function Projects() {
  const { setLoading } = useContext(LoadingContext);

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch('/api/supabase/getProjects');
      const data = await res.json();
      setProjects(data.projects);

      console.log(data.projects);
    };

    if (projects === null) {
      setLoading(true);
      getProjects();
    } else {
      setLoading(false);
    }
  }, [projects, setLoading]);

  return (
    <Box p={'2rem'}>
      <Flex
        align={'center'}
        justify={'space-between'}
        background={'var(--darkGray)'}>
        <Stack
          m={'1rem'}
          ml={'-10rem'}
          mr={'2rem'}
          mt={'-3rem'}
          background={'var(--neonGreen)'}
          p={'1rem'}
          borderRadius={'0 0 9px 0'}>
          <Flex
            alignItems={'center'}
            overflow={'hidden'}
            borderRadius={'0 0 9px 0'}>
            <Image
              src={aiFlowerFace.src}
              alt={'Tanner Lemon, full stack developer'}
              borderRadius={'0 0 9px 0'}
              width={'100%'}
            />
          </Flex>
        </Stack>
        <VStack
          align={'flex-start'}
          textAlign={'left'}
          w={'100%'}
          mb={'2rem'}
          position={'relative'}>
          <Heading
            textTransform={'uppercase'}
            fontWeight={500}
            size={'sm'}
            color={'var(--lightGray)'}>
            Projects
          </Heading>
          <Heading>These are some of my favorite projects.</Heading>
          <Text>
            These projects range in creation date from early 2019 to the
            present.
          </Text>
        </VStack>
      </Flex>

      <Box p={'1rem'}>
        {projects && (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter={'0.75rem'}>
              {projects.map((project) => {
                console.log(project);
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        )}
      </Box>
    </Box>
  );
}
