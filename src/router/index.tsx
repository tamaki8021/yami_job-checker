import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/About';
import TopPage from '../pages/Top';
import ContactPage from '../pages/Contact';
import QuestionPage from '../pages/Question';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <TopPage />,
    },
    { path: 'question', element: <QuestionPage /> },
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
