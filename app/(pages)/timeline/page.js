'use client';

// context
import { LoadingContext } from '@/app/lib/context/LoadingProvider';

// hooks
import { useEffect, useState, useContext, useRef } from 'react';

// chakra-ui
import {
  Box,
  Heading,
  Image,
  Text,
  Grid,
  GridItem,
  VStack,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

// local components
import TimelineItemCard from '@/app/_components/cards/timelineItemCard';
import TimelineItemPopover from '@/app/_components/cards/timelineItemPopover';

export default function Timeline() {
  const { setLoading } = useContext(LoadingContext);

  const dataTypesRef = useRef(null);

  const [timelineItems, setTimelineItems] = useState(null);
  const [timelineDataTypes, setTimelineDataTypes] = useState(null);

  const [maxDataTypeWidth, setMaxDataTypeWidth] = useState(150);

  useEffect(() => {
    const getTimelineItems = async () => {
      const res = await fetch('/api/supabase/getTimelineItems');
      const data = await res.json();

      console.log(data);
      setTimelineItems(data.timeline_items);
    };

    const getTimelineDataTypes = async () => {
      const res = await fetch('/api/supabase/getTimelineDataTypes');
      const data = await res.json();
      setTimelineDataTypes(data.timeline_data_types);
    };

    if (timelineItems === null) {
      setLoading(true);
      getTimelineItems();
    }

    if (timelineDataTypes === null) {
      getTimelineDataTypes();
    }

    if (timelineItems !== null && timelineDataTypes !== null) {
      setLoading(false);
    }
  }, [timelineItems, timelineDataTypes, setLoading]);

  const getMaxDataTypeWidth = (index) => {
    if (dataTypesRef.current !== null) {
      const dataTypeWidth = dataTypesRef.current.children[index].offsetWidth;

      if (dataTypeWidth > maxDataTypeWidth) {
        setMaxDataTypeWidth(dataTypeWidth);
      }
    }
  };

  return (
    <Box p={'1rem 2rem'}>
      <VStack gap={0}>
        {/* data types row */}
        <Grid
          w={'100%'}
          templateColumns='repeat(3, 1fr)'
          gap={0}>
          {/* spacer */}
          <GridItem
            w={'100%'}
            h={'100%'}
          />
          {/* data types */}
          <GridItem
            w={'100%'}
            h={'100%'}>
            {timelineDataTypes !== null && (
              <Flex
                ref={dataTypesRef}
                w={'100%'}
                h={'100%'}>
                {timelineDataTypes.map((dataType, index) => (
                  <HStack
                    ref={getMaxDataTypeWidth(index)}
                    key={dataType.id}
                    p={'0.5rem'}
                    m={'0 0.5rem'}
                    justify={'center'}
                    w={maxDataTypeWidth}
                    h={'fit-content'}
                    borderRadius={'var(--mainBorderRadius)'}
                    cursor={'pointer'}
                    border={'1px solid var(--grayAlt)'}
                    position={'relative'}>
                    <Image
                      src={dataType.icon}
                      alt={dataType.name}
                      boxSize={'1.25rem'}
                      objectFit={'contain'}
                    />
                    <Heading
                      textTransform={'uppercase'}
                      fontWeight={400}
                      fontSize={'0.8rem'}
                      color={'var(--grayAlt)'}>
                      {dataType.short_name}
                    </Heading>
                  </HStack>
                ))}
              </Flex>
            )}
          </GridItem>
          {/* spacer */}
          <GridItem
            w={'100%'}
            h={'100%'}
          />
        </Grid>
        {/* title row */}
        <Grid
          w={'100%'}
          templateColumns='repeat(2, 1fr)'
          gap={0}>
          {/* title item */}
          <GridItem
            w={'100%'}
            h={'100%'}>
            <Flex
              align={'center'}
              justify={'flex-end'}
              w={'100%'}
              h={'100%'}>
              <Box
                p={'3rem 2rem'}
                textAlign={'right'}
                w={'100%'}
                maxW={'350px'}
                h={'fit-content'}
                position={'relative'}>
                <Heading
                  textTransform={'uppercase'}
                  fontWeight={500}
                  size={'sm'}
                  color={'var(--grayAlt)'}>
                  Interactive Timeline
                </Heading>
                <Heading>Explore my journey.</Heading>
              </Box>
            </Flex>
          </GridItem>
          {/* divider */}
          <GridItem
            w={'100%'}
            h={'100%'}>
            <Flex
              w={'100%'}
              h={'100%'}
              align={'center'}
              justify={'flex-start'}>
              <Box
                h={'100%'}
                w={'1px'}
                background={'var(--neonBlue)'}></Box>
            </Flex>
          </GridItem>
        </Grid>
        {/* center row */}
        <Grid
          w={'100%'}
          templateColumns='repeat(5, 1fr)'
          gap={0}>
          {/* left arrow */}
          <GridItem
            w='100%'
            h='100%'>
            <Flex
              w={'100%'}
              h={'100%'}
              align={'center'}
              justify={'flex-end'}>
              <Flex
                align={'center'}
                justify={'center'}
                borderRadius={'var(--mainBorderRadius)'}
                cursor={'pointer'}
                border={'1px solid var(--neonBlue)'}
                color={'var(--neonBlue)'}
                h={'3rem'}
                w={'3rem'}>
                <ArrowBackIcon boxSize={'1.2rem'} />
              </Flex>
            </Flex>
          </GridItem>
          {/* divider */}
          <GridItem
            w='100%'
            h='100%'>
            <Flex
              w={'100%'}
              h={'100%'}
              align={'center'}
              justify={'center'}>
              <Box
                w={'100%'}
                h={'1px'}
                background={'var(--neonBlue)'}></Box>
            </Flex>
          </GridItem>
          {/* center image item */}
          <GridItem
            w='100%'
            h='100%'>
            <Box
              p={'0.5rem'}
              borderRadius={'var(--mainBorderRadius)'}
              background={'var(--neonBlue)'}>
              <Image
                src={'https://i.imgur.com/RpcnhfXl.png'}
                alt={'placeholder'}
                w={'100%'}
                h={'100%'}
                objectFit={'cover'}
                borderRadius={'var(--mainBorderRadius)'}
              />
            </Box>
          </GridItem>
          {/* divider */}
          <GridItem
            w={'100%'}
            h={'100%'}>
            <Flex
              w={'100%'}
              h={'100%'}
              align={'center'}
              justify={'center'}>
              <Box
                w={'100%'}
                h={'1px'}
                background={'var(--neonBlue)'}></Box>
            </Flex>
          </GridItem>
          {/* right arrow */}
          <GridItem
            w={'100%'}
            h={'100%'}>
            <Flex
              w={'100%'}
              h={'100%'}
              align={'center'}
              justify={'flex-start'}>
              <Flex
                align={'center'}
                justify={'center'}
                borderRadius={'var(--mainBorderRadius)'}
                cursor={'pointer'}
                border={'1px solid var(--neonBlue)'}
                color={'var(--neonBlue)'}
                h={'3rem'}
                w={'3rem'}>
                <ArrowForwardIcon boxSize={'1.2rem'} />
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
        {/* fourth row */}
        <Grid
          w={'100%'}
          templateColumns='repeat(2, 1fr)'
          gap={0}>
          {/* divider */}
          <GridItem
            w={'100%'}
            h={'100%'}>
            <Flex
              w={'100%'}
              h={'100%'}
              align={'center'}
              justify={'flex-end'}>
              <Box
                h={'100%'}
                w={'1px'}
                background={'var(--neonBlue)'}></Box>
            </Flex>
          </GridItem>
          {/* main item */}
          <GridItem
            pb={'2rem'}
            w={'100%'}
            h={'100%'}>
            <Box
              p={'2rem'}
              maxW={'400px'}>
              <Heading
                mb={'0.5rem'}
                size={'md'}>
                Full Stack Developer
              </Heading>
              <Text color={'var(--lightGray)'}>
                A short description about whatever this thing is exactly.
              </Text>
            </Box>
          </GridItem>
        </Grid>
        {/* timeline row */}
        {timelineItems !== null && (
          <Grid
            position={'fixed'}
            bottom={0}
            background={'var(--darkGrayAlt)'}
            pb={'1rem'}
            w={'100%'}
            templateColumns={`repeat(${timelineItems.length}, 1fr)`}
            gap={0}>
            <Box
              w={'100%'}
              h={'1px'}
              position={'absolute'}
              zIndex={1}
              background={'var(--neonBlue)'}></Box>
            {timelineItems.map((item) => (
              <Grid
                templateColumns={`repeat(3, 1fr)`}
                key={item.id}
                justify={'space-around'}>
                <GridItem
                  w={'100%'}
                  h={'100%'}>
                  <Flex justify={'center'}>
                    <Box
                      w={'1px'}
                      h={'0.5rem'}
                      background={'var(--grayAlt)'}
                    />
                  </Flex>
                </GridItem>
                <GridItem
                  w={'100%'}
                  h={'100%'}>
                  <Flex justify={'center'}>
                    <TimelineItemPopover item={item} />
                  </Flex>
                </GridItem>
                <GridItem
                  w={'100%'}
                  h={'100%'}>
                  <Flex justify={'center'}>
                    <Box
                      w={'1px'}
                      h={'0.5rem'}
                      background={'var(--grayAlt)'}
                    />
                  </Flex>
                </GridItem>
              </Grid>
            ))}
          </Grid>
        )}
      </VStack>
    </Box>
  );
}
