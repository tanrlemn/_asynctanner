'use client';

// chakra-ui
import { Box, Flex, Text } from '@chakra-ui/react';

export default function ProjectCard({ project }) {
  return (
    <Box
      w={'100%'}
      h={'fit-content'}
      p={'1rem'}
      borderRadius={'0.5rem'}
      bg={'var(--darkGray)'}
      boxShadow={'0px 0px 10px 0px rgba(0,0,0,0.25)'}>
      <Flex
        w={'100%'}
        h={'fit-content'}
        direction={'column'}
        align={'center'}>
        <Text
          fontSize={'1.5rem'}
          fontWeight={500}
          color={'var(--lightGray)'}
          mb={'0.5rem'}>
          {project.name}
        </Text>
        <Text
          fontSize={'1rem'}
          fontWeight={300}
          color={'var(--lighterGray)'}
          mb={'0.5rem'}>
          {project.description}
        </Text>
        <Text
          fontSize={'0.8rem'}
          fontWeight={300}
          color={'var(--lighterGray)'}
          mb={'0.5rem'}>
          {project.technologies}
        </Text>
      </Flex>
    </Box>
  );
}
