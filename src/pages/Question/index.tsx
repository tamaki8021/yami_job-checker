import React from 'react';
import { Grid, Spacer, Button } from '@nextui-org/react';
import Layout from '../../components/layout';
import SelectAnswer from '../../components/SelectAnswer';

const QuestionPage = () => (
  <Layout>
    <Grid.Container direction="column" alignItems="center" css={{ p: '$10' }}>
      <SelectAnswer title="あなたはリスクを冒すことに抵抗がある" />
      <Spacer y={1} />
      <SelectAnswer title="非常に変則的な勤務時間やシフト制に対して柔軟性がある" />
      <Spacer y={1} />
      <SelectAnswer title="高いストレス環境下でも冷静に対応できる" />
      <Spacer y={1} />
      <SelectAnswer title="他人の指示に従い、指示通りの作業をすることが得意" />
      <Spacer y={1} />
      <SelectAnswer title="長時間の立ち仕事など高い身体的な負荷に耐えることができる" />
      <Spacer y={1} />
      <SelectAnswer title="高い責任感やストレス耐性を持っている" />
      <Spacer y={1} />
      <SelectAnswer title="複数の仕事を同時にこなすことに慣れている" />
      <Spacer y={1} />
      <SelectAnswer title="夜間や深夜の勤務に対して抵抗がある" />
      <Spacer y={1} />
      <SelectAnswer title="長期間にわたって同じ仕事を続けることに飽きや疲れを感じる" />
      <Spacer y={1} />
      <SelectAnswer title="違法な活動に関わることへの道徳的な懸念がある" />
      <Spacer y={2} />
      <Button
        shadow
        color="gradient"
        auto
        size="xl"
        css={{ w: '100%', '@xs': { w: '30%' } }}
      >
        診断結果へ
      </Button>
    </Grid.Container>
  </Layout>
);

export default QuestionPage;
