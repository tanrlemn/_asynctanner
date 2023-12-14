// chakra-ui
import { extendTheme } from '@chakra-ui/react';

const config = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  global: {
    html: {
      background: 'var(--darkGray)',
      color: 'var(--white)',
    },
    body: {
      background: 'var(--darkGray)',
      color: 'var(--white)',
    },
  },
});

export const theme = extendTheme({ config });
