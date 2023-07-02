import React from 'react';
import { Text, Spacer, Image } from '@nextui-org/react';
import Layout from '../../components/layout';
import Box from '../../components/common/Box';
import { getMatchingJobTypes } from '../../utils/jobType';

const ResultPage = () => {
  const userAnswers = [1, 5, 2, 3, 5, 3, 2, 4, 3, 5];
  const matchingJobType = getMatchingJobTypes(userAnswers);

  return (
    <Layout>
      <Box css={{ textAlign: 'center', p: '$10', h: '100%' }}>
        <Text h1>あなたの診断結果</Text>
        <Text
          h2
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
            '@sm': {
              fontSize: 30,
            },
            '@md': {
              fontSize: 40,
            },
          }}
          weight="bold"
        >
          {matchingJobType.name}
        </Text>
        <Spacer y={2} />
        <Image
          width={320}
          src={matchingJobType.imagePath}
          alt={matchingJobType.name}
          objectFit="cover"
        />
        <Spacer y={2} />
        <Text
          size="$lg"
          weight="semibold"
          css={{ '@sm': { px: '$20' }, mb: '$3' }}
        >
          {`${matchingJobType.name}とは`}
        </Text>
        <Text size="$lg" css={{ '@sm': { px: '$20' } }}>
          {matchingJobType.description}
        </Text>
        <Spacer y={2} />
        <Text
          size="$lg"
          weight="semibold"
          css={{ '@sm': { px: '$20' }, mb: '$3' }}
        >
          報酬
        </Text>
        <Text size="$lg" css={{ '@sm': { px: '$20' } }}>
          {matchingJobType.reward}
        </Text>
        <Spacer y={2} />
        <Text
          size="$lg"
          weight="semibold"
          css={{ '@sm': { px: '$20' }, mb: '$3' }}
        >
          どのような罪に問われるのか
        </Text>
        <Text size="$lg" css={{ '@sm': { px: '$20' } }}>
          {matchingJobType.crime}
        </Text>
      </Box>
    </Layout>
  );
};

export default ResultPage;
