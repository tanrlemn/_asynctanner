'use client';

// chakra-ui
import { Box, Flex, Text } from '@chakra-ui/react';

export default function TimelineItemCard({ item }) {
  return (
    <Box
      w={'100%'}
      h={'fit-content'}
      p={'1rem'}
      borderRadius={'0.5rem'}
      bg={'var(--darkGray)'}>
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
          {item.title}
        </Text>
        {/* <Text
          fontSize={'1rem'}
          fontWeight={300}
          color={'var(--lighterGray)'}
          mb={'0.5rem'}>
          {item.description}
        </Text> */}
      </Flex>
    </Box>
  );
}
