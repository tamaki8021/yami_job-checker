import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import Layout from '../../components/layout';
import Box from '../../components/common/Box';

const ContactPage = () => {
  // 初回表示か否かを判定するステートを定義しておく
  const [isFirst, setIsFirst] = useState(true);

  // フォーム回答後はリダイレクトさせる
  const loader = () => {
    // 初回表示時はリダイレクトさせない
    if (isFirst) {
      setIsFirst(false);
      return;
    }

    // リダイレクト先のページ
    redirect('/contact');
  };

  return (
    <Layout>
      <Box css={{ textAlign: 'center', px: '$10', mt: '$14' }}>
        <iframe
          title="apply"
          src="https://docs.google.com/forms/d/e/1FAIpQLSc2aWYxCqz-u7G2MSn7dX88M5wIRByaaJ6CxMHkRVIzY6TY_Q/viewform?embedded=true"
          height="689"
          onLoad={loader}
        >
          読み込んでいます…
        </iframe>
      </Box>
    </Layout>
  );
};

export default ContactPage;
