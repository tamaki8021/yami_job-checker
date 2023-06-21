import React, { ReactNode } from 'react';
import Box from '../common/Box';
import Header from './Header';

const Layout = ({ children }: { children: ReactNode }) => (
  <Box
    css={{
      maxW: '100%',
    }}
  >
    <Header />
    {children}
  </Box>
);

export default Layout;
