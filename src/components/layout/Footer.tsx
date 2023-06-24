import React from 'react';
import { Text } from '@nextui-org/react';
import Box from '../common/Box';

const Footer = () => (
  <Box
    css={{
      textAlign: 'center',
      mt: '$12',
      py: '$10',
      borderTop: 'solid',
      borderWidth: '1px',
    }}
  >
    <Text size={12}>Copyright © 闇バイト診断サイト</Text>
  </Box>
);

export default Footer;
