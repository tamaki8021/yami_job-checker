import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/About';
import TopPage from '../pages/Top';
import ContactPage from '../pages/Contact';

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
    {
      path: 'contact',
      element: <ContactPage />,
    },
  ],
  { basename: process.env.PUBLIC_URL },
);

export default router;
