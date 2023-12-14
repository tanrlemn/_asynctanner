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
    <Box
      p={'1rem 2rem'}
      maxH={'90vh'}>
      <VStack gap={0}>
        {/* first row */}
        <Grid
          w={'100%'}
          templateColumns='repeat(3, 1fr)'
          gap={0}>
          <GridItem
            w={'100%'}
            h={'100%'}
          />
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
          <GridItem
            w={'100%'}
            h={'100%'}
          />
        </Grid>
        {/* second row */}
        <Grid
          w={'100%'}
          templateColumns='repeat(2, 1fr)'
          gap={0}>
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
          {/* center item */}
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
          {/* center item */}
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
        {/* fifth row */}
        <Grid
          w={'100%'}
          templateColumns='repeat(5, 1fr)'
          gap={0}>
          <GridItem
            w={'100%'}
            h={'100%'}
            minH={10}
            bg='blue.500'
          />
          <GridItem
            w={'100%'}
            h={'100%'}
            minH={10}
            bg='yellow.500'
          />
          <GridItem
            w={'100%'}
            h={'100%'}
            minH={10}
            bg='orange.500'
          />
          <GridItem
            w={'100%'}
            h={'100%'}
            minH={10}
            bg='green.500'
          />
          <GridItem
            w={'100%'}
            h={'100%'}
            minH={10}
            bg='purple.500'
          />
        </Grid>
      </VStack>
    </Box>
  );
}
