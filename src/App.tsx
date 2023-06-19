import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import TopPage from './pages/Top';
import { darkTheme, lightTheme } from './utils/theme';

function App() {
  const darkMode = useDarkMode(false);

  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <TopPage />
    </NextUIProvider>
  );
}

export default App;
