import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import { RouterProvider } from 'react-router-dom';
import { darkTheme, lightTheme } from './utils/theme';
import router from './router';

const App = () => {
  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
};

export default App;
