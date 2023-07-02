import React, { useState } from 'react';
import { Grid, Spacer, Button } from '@nextui-org/react';
import Layout from '../../components/layout';
import SelectAnswer from '../../components/SelectAnswer';

const QuestionPage = () => {
  const publicUrl = process.env.PUBLIC_URL;
  const [answer1, setAnswer1] = useState('3');
  const [answer2, setAnswer2] = useState('3');
  const [answer3, setAnswer3] = useState('3');
  const [answer4, setAnswer4] = useState('3');
  const [answer5, setAnswer5] = useState('3');
  const [answer6, setAnswer6] = useState('3');
  const [answer7, setAnswer7] = useState('3');
  const [answer8, setAnswer8] = useState('3');
  const [answer9, setAnswer9] = useState('3');
  const [answer10, setAnswer10] = useState('3');

  return (
    <Layout>
      <Grid.Container direction="column" alignItems="center" css={{ p: '$10' }}>
        <SelectAnswer
          title="あなたはリスクを冒すことに抵抗がある"
          value={answer1}
          setValue={setAnswer1}
        />
        <Spacer y={1} />
        <SelectAnswer
          title="非常に変則的な勤務時間やシフト制に対して柔軟性がある"
          value={answer2}
          setValue={setAnswer2}
        />
        <Spacer y={1} />
        <SelectAnswer
          title="高いストレス環境下でも冷静に対応できる"
          value={answer3}
          setValue={setAnswer3}
        />
        <Spacer y={1} />
        <SelectAnswer
          title="他人の指示に従い、指示通りの作業をすることが得意"
          value={answer4}
          setValue={setAnswer4}
        />
        <Spacer y={1} />
        <SelectAnswer
          title="長時間の立ち仕事など高い身体的な負荷に耐えることができる"
          value={answer5}
          setValue={setAnswer5}
        />
        <Spacer y={1} />
        <SelectAnswer
          title="高い責任感やストレス耐性を持っている"
          value={answer6}
          setValue={setAnswer6}
        />
        <Spacer y={1} />
        <SelectAnswer
          title="複数の仕事を同時にこなすことに慣れている"
          value={answer7}
          setValue={setAnswer7}
        />
        <Spacer y={1} />
        <SelectAnswer
          title="夜間や深夜の勤務に対して抵抗がある"
          value={answer8}
          setValue={setAnswer8}
        />
        <Spacer y={1} />
        <SelectAnswer
          title="長期間にわたって同じ仕事を続けることに飽きや疲れを感じる"
          value={answer9}
          setValue={setAnswer9}
        />
        <Spacer y={1} />
        <SelectAnswer
          title="違法な活動に関わることへの道徳的な懸念がある"
          value={answer10}
          setValue={setAnswer10}
        />
        <Spacer y={2} />
        <Button
          as="a"
          shadow
          color="gradient"
          auto
          size="xl"
          css={{ w: '100%', '@xs': { w: '30%' } }}
          href={`${publicUrl}/result`}
        >
          診断結果へ
        </Button>
      </Grid.Container>
    </Layout>
  );
};

export default QuestionPage;
