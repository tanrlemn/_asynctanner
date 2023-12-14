'use client';

// chakra-ui
import {
  Link,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Flex,
  VStack,
  Heading,
} from '@chakra-ui/react';

// local components
import Logo from '../brandElements/logo';
import EmailIcon from '../icons/emailIcon';

export default function ContactDrawer({ isOpen, onClose }) {
  return (
    <Drawer
      size={'xs'}
      isOpen={isOpen}
      placement='bottom'
      onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Logo />
        </DrawerHeader>

        <DrawerBody w={'100%'}>
          <VStack
            align={'flex-start'}
            w={'100%'}>
            <Heading size={'lg'}>Contact Me</Heading>
            <Heading
              mb={'1rem'}
              size={'md'}
              fontWeight={400}>
              I&apos;m currently open to new opportunities. If you&apos;d like
              to get in touch, please send me an email at:
            </Heading>
            <Link
              href={'mailto:contact@asynctanner.com'}
              target='_blank'
              _hover={{ textDecoration: 'none' }}>
              <Flex
                _hover={{
                  background: 'var(--darkGrayAlt)',
                }}
                background={'var(--darkGray)'}
                borderRadius={'9px'}
                p={'1rem 2rem'}
                align={'center'}
                w={'100%'}>
                <EmailIcon />
                <Text
                  ml={'1rem'}
                  fontSize={'1.2rem'}
                  fontWeight={500}>
                  contact@asynctanner.com
                </Text>
              </Flex>
            </Link>
          </VStack>
        </DrawerBody>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
