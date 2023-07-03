import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TopPage from '../pages/Top';
import QuestionPage from '../pages/Question';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import ResultPage from '../pages/Result';
import usePageTracking from '../utils/hooks/useTracking';

const Root = () => {
  usePageTracking();

  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="question" element={<QuestionPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="result" element={<ResultPage />} />
    </Routes>
  );
};

export default Root;
