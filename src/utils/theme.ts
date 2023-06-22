import { createTheme } from '@nextui-org/react';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      twitterColor: '#1DA1F2',
      facebookColor: '#4267B2',
    },
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',
      background: '#1b1b1b',
      twitterColor: '#1DA1F2',
      facebookColor: '#4267B2',
    },
  },
});

export { lightTheme, darkTheme };
