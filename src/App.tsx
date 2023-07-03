import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import { RouterProvider } from 'react-router-dom';
import { darkTheme, lightTheme } from './utils/theme';
import router from './router';
import { AnswerProvider } from './provider/AnswerProvider';
import usePageTracking from './utils/hooks/useTracking';

const App = () => {
  const darkMode = useDarkMode(false);
  usePageTracking();

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <AnswerProvider>
        <RouterProvider router={router} />
      </AnswerProvider>
    </NextUIProvider>
  );
};

export default App;
