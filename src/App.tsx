import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import { RouterProvider } from 'react-router-dom';
import { darkTheme, lightTheme } from './utils/theme';
import { AnswerProvider } from './provider/AnswerProvider';
import router from './router';

const App = () => {
  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <AnswerProvider>
        <RouterProvider router={router} />
      </AnswerProvider>
    </NextUIProvider>
  );
};

export default App;
