import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/About';
import TopPage from '../pages/Top';
import ContactPage from '../pages/Contact';
import QuestionPage from '../pages/Question';
import ResultPage from '../pages/Result';

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
    {
      path: 'result',
      element: <ResultPage />,
    },
  ],
  { basename: process.env.PUBLIC_URL },
);

export default router;
