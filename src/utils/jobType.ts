/* eslint-disable */
// 質問とスコアの定義
type Question = {
  title: string;
  score: number;
};

interface JobTypeInfo {
  name: string;
  description: string;
  reward: string;
  crime: string;
}

// 各闇バイトの種類に対する質問とスコアのマッピング
const jobTypes: { [key: string]: Question[] } = {
  出会い系サイトのサクラ: [
    { title: 'あなたはリスクを冒すことに抵抗がある', score: 3 },
    { title: '非常に変則的な勤務時間やシフト制に対して柔軟性がある', score: 2 },
    { title: '高いストレス環境下でも冷静に対応できる', score: 4 },
    { title: '他人の指示に従い、指示通りの作業をすることが得意', score: 2 },
    {
      title: '長時間の立ち仕事など高い身体的な負荷に耐えることができる',
      score: 3,
    },
    { title: '高い責任感やストレス耐性を持っている', score: 4 },
    { title: '複数の仕事を同時にこなすことに慣れている', score: 2 },
    { title: '夜間や深夜の勤務に対して抵抗がある', score: 1 },
    {
      title: '長期間にわたって同じ仕事を続けることに飽きや疲れを感じる',
      score: 1,
    },
    { title: '違法な活動に関わることへの道徳的な懸念がある', score: 5 },
  ],
  'パチンコ・スロットの打ち子': [
    { title: 'あなたはリスクを冒すことに抵抗がある', score: 3 },
    { title: '非常に変則的な勤務時間やシフト制に対して柔軟性がある', score: 4 },
    { title: '高いストレス環境下でも冷静に対応できる', score: 2 },
    { title: '他人の指示に従い、指示通りの作業をすることが得意', score: 3 },
    {
      title: '長時間の立ち仕事など高い身体的な負荷に耐えることができる',
      score: 4,
    },
    { title: '高い責任感やストレス耐性を持っている', score: 3 },
    { title: '複数の仕事を同時にこなすことに慣れている', score: 2 },
    { title: '夜間や深夜の勤務に対して抵抗がある', score: 3 },
    {
      title: '長期間にわたって同じ仕事を続けることに飽きや疲れを感じる',
      score: 2,
    },
    { title: '違法な活動に関わることへの道徳的な懸念がある', score: 5 },
  ],
  '口座レンタル（名義貸し）': [
    { title: 'あなたはリスクを冒すことに抵抗がある', score: 4 },
    { title: '非常に変則的な勤務時間やシフト制に対して柔軟性がある', score: 3 },
    { title: '高いストレス環境下でも冷静に対応できる', score: 2 },
    { title: '他人の指示に従い、指示通りの作業をすることが得意', score: 3 },
    {
      title: '長時間の立ち仕事など高い身体的な負荷に耐えることができる',
      score: 2,
    },
    { title: '高い責任感やストレス耐性を持っている', score: 3 },
    { title: '複数の仕事を同時にこなすことに慣れている', score: 1 },
    { title: '夜間や深夜の勤務に対して抵抗がある', score: 4 },
    {
      title: '長期間にわたって同じ仕事を続けることに飽きや疲れを感じる',
      score: 3,
    },
    { title: '違法な活動に関わることへの道徳的な懸念がある', score: 5 },
  ],
  出し子: [
    { title: 'あなたはリスクを冒すことに抵抗がある', score: 3 },
    { title: '非常に変則的な勤務時間やシフト制に対して柔軟性がある', score: 4 },
    { title: '高いストレス環境下でも冷静に対応できる', score: 4 },
    { title: '他人の指示に従い、指示通りの作業をすることが得意', score: 2 },
    {
      title: '長時間の立ち仕事など高い身体的な負荷に耐えることができる',
      score: 4,
    },
    { title: '高い責任感やストレス耐性を持っている', score: 3 },
    { title: '複数の仕事を同時にこなすことに慣れている', score: 3 },
    { title: '夜間や深夜の勤務に対して抵抗がある', score: 2 },
    {
      title: '長期間にわたって同じ仕事を続けることに飽きや疲れを感じる',
      score: 2,
    },
    { title: '違法な活動に関わることへの道徳的な懸念がある', score: 5 },
  ],
  受け子: [
    { title: 'あなたはリスクを冒すことに抵抗がある', score: 2 },
    { title: '非常に変則的な勤務時間やシフト制に対して柔軟性がある', score: 1 },
    { title: '高いストレス環境下でも冷静に対応できる', score: 3 },
    { title: '他人の指示に従い、指示通りの作業をすることが得意', score: 4 },
    {
      title: '長時間の立ち仕事など高い身体的な負荷に耐えることができる',
      score: 2,
    },
    { title: '高い責任感やストレス耐性を持っている', score: 3 },
    { title: '複数の仕事を同時にこなすことに慣れている', score: 3 },
    { title: '夜間や深夜の勤務に対して抵抗がある', score: 2 },
    {
      title: '長期間にわたって同じ仕事を続けることに飽きや疲れを感じる',
      score: 1,
    },
    { title: '違法な活動に関わることへの道徳的な懸念がある', score: 5 },
  ],
  看板貼りバイト: [
    { title: 'あなたはリスクを冒すことに抵抗がある', score: 2 },
    { title: '非常に変則的な勤務時間やシフト制に対して柔軟性がある', score: 1 },
    { title: '高いストレス環境下でも冷静に対応できる', score: 3 },
    { title: '他人の指示に従い、指示通りの作業をすることが得意', score: 2 },
    {
      title: '長時間の立ち仕事など高い身体的な負荷に耐えることができる',
      score: 4,
    },
    { title: '高い責任感やストレス耐性を持っている', score: 3 },
    { title: '複数の仕事を同時にこなすことに慣れている', score: 2 },
    { title: '夜間や深夜の勤務に対して抵抗がある', score: 2 },
    {
      title: '長期間にわたって同じ仕事を続けることに飽きや疲れを感じる',
      score: 2,
    },
    { title: '違法な活動に関わることへの道徳的な懸念がある', score: 1 },
  ],
  運び屋: [
    { title: 'あなたはリスクを冒すことに抵抗がある', score: 3 },
    { title: '非常に変則的な勤務時間やシフト制に対して柔軟性がある', score: 2 },
    { title: '高いストレス環境下でも冷静に対応できる', score: 3 },
    { title: '他人の指示に従い、指示通りの作業をすることが得意', score: 4 },
    {
      title: '長時間の立ち仕事など高い身体的な負荷に耐えることができる',
      score: 4,
    },
    { title: '高い責任感やストレス耐性を持っている', score: 3 },
    { title: '複数の仕事を同時にこなすことに慣れている', score: 3 },
    { title: '夜間や深夜の勤務に対して抵抗がある', score: 2 },
    {
      title: '長期間にわたって同じ仕事を続けることに飽きや疲れを感じる',
      score: 2,
    },
    { title: '違法な活動に関わることへの道徳的な懸念がある', score: 1 },
  ],
  '強盗・窃盗などの実行犯': [
    { title: 'あなたはリスクを冒すことに抵抗がある', score: 5 },
    { title: '非常に変則的な勤務時間やシフト制に対して柔軟性がある', score: 3 },
    { title: '高いストレス環境下でも冷静に対応できる', score: 4 },
    { title: '他人の指示に従い、指示通りの作業をすることが得意', score: 5 },
    {
      title: '長時間の立ち仕事など高い身体的な負荷に耐えることができる',
      score: 3,
    },
    { title: '高い責任感やストレス耐性を持っている', score: 4 },
    { title: '複数の仕事を同時にこなすことに慣れている', score: 2 },
    { title: '夜間や深夜の勤務に対して抵抗がある', score: 4 },
    {
      title: '長期間にわたって同じ仕事を続けることに飽きや疲れを感じる',
      score: 2,
    },
    { title: '違法な活動に関わることへの道徳的な懸念がある', score: 1 },
  ],
};

const jobTypesInfo: Array<JobTypeInfo> = [
  {
    name: '出会い系サイトのサクラ',
    description:
      '出会いを求めている女性のフリをして、男性会員にポイントを使わせるように工作を行う。',
    reward:
      'メールが1通返ってきたら2円、投稿した写真画を見てもらえたら5円、写真付きのメールが来たら5円など。',
    crime:
      '詐欺罪（共犯）。詐欺罪の刑罰は重く、10年以下の懲役。また、被害者から損害賠償請求を受ける可能性もある。',
  },
  {
    name: 'パチンコ・スロットの打ち子',
    description:
      '業者やパチプロに雇われてパチンコを打ち、儲けたお金のいくらかを分前としてもらうアルバイト。',
    reward: '『軍資金+勝ち分の3分の1』',
    crime:
      '台の設定を知らされている場合は違法。業務上横領罪や窃盗の共謀共同正犯になると考えられる。窃盗であれば10人以下の懲役、または50万円以下の罰金、業務上横領であれば10年以下の懲役です。',
  },
  {
    name: '口座レンタル（名義貸し）',
    description: '自分自身の口座を他人に貸し出す仕事。',
    reward: '5万円',
    crime:
      '預金口座は「名義人本品の使用」が前提になっているので、第三者に貸すということは、金融機関を騙していることになるので詐欺罪に該当する。',
  },
  {
    name: '出し子',
    description:
      'オレオレ詐欺や架空請求詐欺で騙し取ったお金を、口座から引き出す仕事のこと。',
    reward: '引き出した金額の1割。引き出した金額が50万円なら5万円。',
    crime: '詐欺罪の共犯として罪に問われる。',
  },
  {
    name: '受け子',
    description:
      '詐欺事件で、お金を騙し取る相手から、現金を直接受け取ったり、宅配便などで送られてきた現金の入った荷物を受け取る役割をするアルバイト。',
    reward: '1回あたり5万円から10万円程度が相場。',
    crime: '詐欺罪の共犯として罪に問われる。',
  },
  {
    name: '看板貼りバイト',
    description:
      '許可を得ていない場所に看板（チラシ）を貼るバイト。貼る枚数は100〜200枚ほど。',
    reward: '時給1800円。交通費等の手当はない。',
    crime:
      '私有地に侵入した場合は住居侵入罪に該当する可能性がある。立てた看板の状況によっては、器物破損罪が成立する恐れがある。住居侵入罪・器物破損罪ともに3年以下の懲役または10万円以下の罰金が課せられる。',
  },
  {
    name: '運び屋',
    description:
      '違法薬物や銃器などを通常、国境や港湾、空港などで受け取り、受け渡し地点まで運ぶ仕事。',
    reward: '報酬は情報に記載されていません。',
    crime:
      '麻薬取締法違反、国際的な麻薬取引の関与など。銃器取締法違反、銃器の違法所持や取引の関与など。',
  },
  {
    name: '強盗・窃盗などの実行犯',
    description: '',
    reward: '',
    crime: '強盗罪及び窃盗罪',
  },
];

// 質問に対する回答のスコアを計算する
function calculateScore(answers: number[]): number {
  let totalScore = 0;
  for (let i = 0; i < answers.length; i++) {
    totalScore += answers[i];
  }
  return totalScore;
}

// スコアが一定の範囲に入る闇バイトの種類を取得する
const getMatchingJobTypes = (answers: number[]): JobTypeInfo => {
  const matchingJobTypes: string[] = [];

  for (const jobType in jobTypes) {
    const questions = jobTypes[jobType];
    const score = calculateScore(answers);
    const minScore =
      questions.reduce((total, question) => total + question.score, 0) * 0.5;

    const maxScore =
      questions.reduce((total, question) => total + question.score, 0) * 0.8;
    if (score >= minScore && score <= maxScore) {
      matchingJobTypes.push(jobType);
    }
  }

  if (matchingJobTypes.length === 0) {
    const jobTypeKeys = Object.keys(jobTypes);
    const randomJobType =
      jobTypeKeys[Math.floor(Math.random() * jobTypeKeys.length)];
    matchingJobTypes.push(randomJobType);
  }
  const jobName = matchingJobTypes[0];
  const info =
    jobTypesInfo.find((job) => job.name === jobName) ?? jobTypesInfo[0];

  return info;
};

export { getMatchingJobTypes, jobTypesInfo };
