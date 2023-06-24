import React, { ReactNode } from 'react';
import Box from '../common/Box';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => (
  <Box
    css={{
      maxW: '100%',
    }}
  >
    <Header />
    {children}
    <Footer />
  </Box>
);

export default Layout;
