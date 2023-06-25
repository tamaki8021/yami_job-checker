import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/About';
import TopPage from '../pages/Top';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <TopPage />,
    },
    {
      path: 'about',
      element: <AboutPage />,
    },
  ],
  { basename: process.env.PUBLIC_URL },
);

export default router;
