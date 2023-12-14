'use client';

// chakra-ui
import { Box, Flex, Text } from '@chakra-ui/react';

export default function ExperienceCard() {
  return (
    <Box
      w={'100%'}
      h={'fit-content'}
      p={'1rem'}
      bg={'var(--lightGray)'}
      borderRadius={'0.5rem'}
      boxShadow={'0px 0px 10px var(--midGray)'}>
      <Flex
        w={'100%'}
        justify={'space-between'}
        align={'center'}>
        <Flex
          direction={'column'}
          align={'flex-start'}>
          <Text
            fontSize={'0.9rem'}
            fontWeight={500}
            color={'var(--darkGray)'}
            mb={'0.5rem'}>
            Company
          </Text>
          <Text
            fontSize={'0.9rem'}
            fontWeight={300}
            color={'var(--darkGray)'}
            mb={'0.5rem'}>
            Position
          </Text>
          <Text
            fontSize={'0.9rem'}
            fontWeight={300}
            color={'var(--darkGray)'}
            mb={'0.5rem'}>
            Start - End
          </Text>
        </Flex>
        <Flex
          direction={'column'}
          align={'flex-end'}>
          <Text
            fontSize={'0.9rem'}
            fontWeight={500}
            color={'var(--darkGray)'}
            mb={'0.5rem'}>
            Location
          </Text>
          <Text
            fontSize={'0.9rem'}
            fontWeight={300}
            color={'var(--darkGray)'}
            mb={'0.5rem'}>
            Description
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
