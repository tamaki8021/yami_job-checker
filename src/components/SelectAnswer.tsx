import React, { useState } from 'react';
import { Radio, Text } from '@nextui-org/react';
import Box from './common/Box';

type Props = {
  title: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const SelectAnswer: React.FC<Props> = ({ title, value, setValue }) => {
  return (
    <Box css={{ textAlign: 'center', w: '100%' }}>
      <Text size="$lg" weight="bold">
        {title}
      </Text>

      <Radio.Group
        orientation="horizontal"
        value={value}
        onChange={setValue}
        css={{ alignItems: 'center', mt: '$5' }}
      >
        <Radio value="1" color="secondary" size="xl" />
        <Radio value="2" color="secondary" size="lg" />
        <Radio value="3" />
        <Radio value="4" color="error" size="lg" />
        <Radio value="5" color="error" size="xl" />
      </Radio.Group>
      <Box
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          maxW: '300px',
          mx: 'auto',
        }}
      >
        <Text color="secondary">同意する</Text>
        <Text color="error">同意しない</Text>
      </Box>
    </Box>
  );
};

export default SelectAnswer;
