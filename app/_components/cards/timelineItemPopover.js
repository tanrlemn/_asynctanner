'use client';

// chakra-ui
import {
  Box,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  GridItem,
  Heading,
  Image,
} from '@chakra-ui/react';

export default function TimelineItemPopover({ item }) {
  return (
    <GridItem
      position={'relative'}
      w={'100%'}
      h={'100%'}
      key={item.id}>
      <Flex
        w={'100%'}
        justify={'center'}>
        <Popover>
          <PopoverTrigger>
            <Button
              background={'var(--midGray)'}
              borderRadius={'0 0 9px 9px'}
              p={'0.75rem'}
              w={'fit-content'}
              h={'fit-content'}
              minH={'fit-content'}
              minW={'fit-content'}>
              <Image
                boxSize={'1rem'}
                src={item.icon}
                alt={item.type}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <Flex align={'center'}>
                <Image
                  boxSize={'1.25rem'}
                  src={item.icon}
                  alt={item.type}
                  mr={'0.5rem'}
                />
                <Heading size={'sm'}>{item.title}</Heading>
              </Flex>
            </PopoverHeader>
            <PopoverBody>
              <Text
                fontSize={'0.8rem'}
                fontWeight={500}>
                {item.start}
              </Text>
              <Text
                fontSize={'0.8rem'}
                fontWeight={500}>
                {item.company}
              </Text>
              <Button
                mt={'0.5rem'}
                size={'xs'}>
                Learn More
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </GridItem>
  );
}
