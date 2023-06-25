import React from 'react';
import { Text, Spacer } from '@nextui-org/react';
import Layout from '../../components/layout';
import Box from '../../components/common/Box';

const AboutPage = () => (
  <Layout>
    <Box css={{ px: '$12', mt: '$14', textAlign: 'center', h: '100vh' }}>
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
        闇バイトとは？
      </Text>
      <Spacer y={2} />
      <Text size="$lg" css={{ textAlign: 'start', '@sm': { px: '$20' } }}>
        {/* eslint-disable max-len */}
        闇バイトとは、法的に制定された労働基準に反する、違法な労働環境や条件で働くことを指します。一般的な労働法や就業規則に従わず、労働者の権利や安全を軽視した労働形態です。
        {/* eslint-enable max-len */}
      </Text>
      <Spacer y={1} />
      <Text size="$lg" css={{ textAlign: 'start', '@sm': { px: '$20' } }}>
        {/* eslint-disable max-len */}
        闇バイトでは、適切な労働条件が提供されず、労働時間や休憩時間が適切に確保されないことがあります。給与が不当に低く設定され、違法な控除や未払いもしばしば見られます。労働者の健康や安全を脅かす労働環境や労働内容も問題となります。
        {/* eslint-enable max-len */}
      </Text>
      <Spacer y={1} />
      <Text size="$lg" css={{ textAlign: 'start', '@sm': { px: '$20' } }}>
        {/* eslint-disable max-len */}
        闇バイトは非常にリスクが高く、労働者の権利が侵害される可能性があります。また、違法な労働環境で働くことは社会的な信用や将来のキャリアにも悪影響を与える可能性があります。
        {/* eslint-enable max-len */}
      </Text>
      <Spacer y={1} />
      <Text size="$lg" css={{ textAlign: 'start', '@sm': { px: '$20' } }}>
        {/* eslint-disable max-len */}
        法律や労働基準を守り、正規の雇用形態で働くことが重要です。適切な労働条件や福利厚生を享受し、自身の権利を守ることができる正規の雇用は、安心して働くための基盤となります。
        {/* eslint-enable max-len */}
      </Text>
      <Spacer y={1} />
      <Text size="$lg" css={{ textAlign: 'start', '@sm': { px: '$20' } }}>
        {/* eslint-disable max-len */}
        闇バイトは社会問題として認識されており、政府や労働団体などが違法労働の撲滅や労働環境の改善に取り組んでいます。闇バイトを選択する前に、適切な労働条件と法的な保護を提供する正規の雇用を探すことが重要です。
        {/* eslint-enable max-len */}
      </Text>
    </Box>
  </Layout>
);

export default AboutPage;
