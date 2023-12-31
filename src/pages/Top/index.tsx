import React, { useState } from 'react';
import { Text, Spacer, Button, Grid, Card } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share';
import Layout from '../../components/layout';
import backgroundimgDark from '../../assets/images/top-bg-img-dark.png';
import backgroundimgLight from '../../assets/images/top-bg-img-light.png';
import riskImg from '../../assets/images/risk_img.svg';
import supportImg from '../../assets/images/support_img.svg';
import understandingImg from '../../assets/images/understanding_img.svg';
import Box from '../../components/common/Box';
import { RightArrowIcon } from '../../components/common/icons';
import Trail from '../../components/common/Trail';

const TopPage = () => {
  const darkMode = useDarkMode(false);
  const [open, setOpen] = useState(true);
  const URL = 'https://tamaki8021.github.io/yami_job-checker/';
  const QUOTE = '【闇バイト診断サービス】自分の闇バイトリスクを診断しよう！';
  const HASHTAGS = [
    '闇バイト',
    '診断サービス',
    'キャリア選択',
    'リスク回避',
    '将来の選択',
  ];
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <Layout>
      <Box>
        <Box
          css={{
            backgroundImage: `url(${
              darkMode.value ? backgroundimgDark : backgroundimgLight
            })`,
            backgroundPosition: 'center',
            backgroundTepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '@md': {
              minHeight: '90vh',
            },
          }}
        >
          <Box
            css={{
              px: '$12',
              mt: '$8',
              maxW: '1450px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '60vh',
            }}
            onClick={() => {
              setOpen((state) => !state);
            }}
          >
            <Trail open={open}>
              <Text size="$md">
                Sed eu semper nulla. Sed non risus purus. Sed auctor lorem non
                ex congue lobortis. Aliquam erat volutpat. Duis convallis,
                libero nec varius efficitur, neque elit bibendum elit, eget
                vulputate turpis felis nec lectus. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia Curae;
                Suspendisse ullamcorper mauris eu ex eleifend rutrum. Quisque
                vulputate rhoncus elit, at dapibus leo aliquet et. Sed eu ligula
                vitae orci lobortis consectetur. Phasellus malesuada elit et
                odio interdum, id rutrum tortor tincidunt. Integer tincidunt
                gravida justo, a commodo est malesuada ac. Mauris lobortis, erat
                eu tristique facilisis, justo nulla luctus felis, vitae posuere
                velit eros vitae orci.
              </Text>
              <Text size="$lg" css={{ mt: '$10' }}>
                Phasellus sed enim eget odio accumsan tristique. Mauris
                efficitur libero vel gravida cursus. Nullam vel fermentum
                lectus. Sed convallis tincidunt nisi, vel feugiat mi lacinia
                non. Fusce efficitur neque ut posuere fringilla. Vestibulum
                elementum, arcu nec laoreet vestibulum, enim massa mollis
                mauris, nec tempus libero elit a lectus. Ut a enim libero.
                Mauris sit amet ipsum consectetur, scelerisque quam at,
                consectetur lectus. Pellentesque pellentesque velit sit amet
                finibus sollicitudin.
              </Text>
              <Text size="$lg" css={{ mt: '$10' }}>
                Donec posuere gravida risus, nec pharetra purus elementum ac.
                Suspendisse potenti. Mauris vestibulum, massa at bibendum
                bibendum, mi lorem eleifend lorem, id convallis diam elit eu
                dui. In hac habitasse platea dictumst. Integer et nunc neque.
                Phasellus ut faucibus velit. Mauris vel sem a metus venenatis
                tristique nec sed risus. Nam ullamcorper, justo vitae fermentum
                lobortis, magna justo facilisis est, eget pretium purus est eget
                sem. Sed tincidunt justo non semper consectetur. Morbi fermentum
                magna ac risus suscipit, nec venenatis ligula bibendum.
              </Text>
              <Text css={{ mt: '$10' }}>
                Etiam ultricies ante vel posuere interdum. Nulla commodo, metus
                nec tristique lacinia, velit lacus blandit turpis, sed congue
                sapien purus vel neque. Sed nec volutpat est. In nec eros eget
                lacus consectetur vestibulum. Sed congue fringilla justo, a
                lacinia lacus mollis et. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Morbi
                facilisis, sem id congue bibendum, turpis lorem ullamcorper
                dolor, eget tristique lectus dui auctor turpis. Aenean dignissim
                ligula mauris, non consectetur neque fermentum sed. Fusce
                rhoncus posuere nisl ut posuere. Suspendisse eu tortor lectus.
                Sed congue tempor tellus, ac rhoncus metus commodo nec. Nulla
                facilisi. Suspendisse potenti
              </Text>
            </Trail>
          </Box>
          <Button
            as="a"
            color="gradient"
            size="xl"
            auto
            ghost
            rounded
            shadow
            css={{ mt: '$10' }}
            iconRight={<RightArrowIcon />}
            href={`${publicUrl}/question`}
          >
            テストを受ける
          </Button>
          <Grid.Container gap={2} justify="center" alignItems="center">
            <Grid>
              <FacebookShareButton url={URL} quote={QUOTE}>
                <FacebookIcon size={36} round />
              </FacebookShareButton>
            </Grid>
            <Grid>
              <TwitterShareButton url={URL} title={QUOTE} hashtags={HASHTAGS}>
                <TwitterIcon size={36} round />
              </TwitterShareButton>
            </Grid>
          </Grid.Container>
        </Box>
        <Spacer y={3} />
        <Box css={{ px: '$12', mt: '$14', textAlign: 'center' }}>
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
            闇バイト診断サービスとは？
          </Text>
          <Spacer y={2} />
          <Text size="$lg" css={{ textAlign: 'start', '@sm': { px: '$20' } }}>
            {/* eslint-disable max-len */}
            闇バイト診断サービスは、あなたの性格や嗜好に基づいて、いくつかの質問に答えるだけで該当する闇バイトの種類を診断するユニークなサービスです。診断結果では、あなたの性格特性や志向性に基づいて、該当する闇バイトの種類や特徴が詳細に解説されます。
            {/* eslint-enable max-len */}
          </Text>
          <Spacer y={1} />
          <Text css={{ textAlign: 'start', '@sm': { px: '$20' } }}>
            {/* eslint-disable max-len */}
            このサービスの目標は、あなたが自分自身や将来のキャリアについてより良い選択をすることです。闇バイト診断サービスを通じて、あなたの安全と幸福をサポートするお手伝いをさせていただきます。
            {/* eslint-enable max-len */}
          </Text>
        </Box>
        <Spacer y={3} />
        <Box css={{ px: '$12', mt: '$14', textAlign: 'center' }}>
          <Text
            h3
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
            }}
          >
            なぜ闇バイト診断サービスを利用するのか？
          </Text>
          <Spacer y={2} />
          <Grid.Container
            gap={2}
            justify="center"
            alignItems="center"
            direction="column"
            css={{ '@xs': { flexDirection: 'row' } }}
          >
            <Grid xs>
              <Card variant="bordered">
                <Card.Header>
                  <Card.Image
                    src={understandingImg}
                    objectFit="cover"
                    alt="Card image background"
                    height={140}
                  />
                </Card.Header>
                <Card.Body>
                  <Text b size="$lg" css={{ textAlign: 'center' }}>
                    自己理解を深める
                  </Text>
                  <Text size="sm">
                    闇バイト診断サービスは、あなたの性格や適性を明らかにする手助けをします。
                    自分自身をよりよく知ることで、自己理解を深め、適切な職業選択や将来のキャリアプランに役立てることができます。
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs>
              <Card variant="bordered">
                <Card.Header>
                  <Card.Image
                    src={riskImg}
                    objectFit="cover"
                    alt="Card image background"
                    height={140}
                  />
                </Card.Header>
                <Card.Body>
                  <Text b size="$lg" css={{ textAlign: 'center' }}>
                    リスクを回避する
                  </Text>
                  <Text size="sm">
                    闇バイトは合法的な労働環境とは異なり、身体的、精神的な健康に悪影響を及ぼす可能性があります。
                    当サービスは、闇バイトのリスクを回避するための情報提供やアドバイスを提供します。
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs>
              <Card variant="bordered">
                <Card.Header>
                  <Card.Image
                    src={supportImg}
                    objectFit="cover"
                    alt="Card image background"
                    height={140}
                  />
                </Card.Header>
                <Card.Body>
                  <Text b size="$lg" css={{ textAlign: 'center' }}>
                    選択をサポート
                  </Text>
                  <Text size="sm">
                    闇バイト診断サービスは、あなたの性格や嗜好に基づいて、適切な職業や業界を提案します。これにより、将来の選択においてより的確な意思決定ができるようサポートします。
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
        </Box>
        <Spacer y={3} />
        <Box css={{ px: '$12', mt: '$14', textAlign: 'center' }}>
          <Text
            h3
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
            }}
            weight="bold"
          >
            今すぐ闇バイト診断サービスを利用しよう！
          </Text>
          <Text css={{ '@sm': { px: '$40' } }}>
            あなた自身の闇バイトに対するリスクを知り、適切なキャリア選択をするために、ぜひ当サービスをご利用ください。
            簡単な診断で、あなたの闇バイトの傾向や注意すべき点を明らかにします。安心して将来を見据えるための第一歩を踏み出しましょう。
          </Text>
          <Spacer y={1} />
          <Button
            as="a"
            color="gradient"
            size="xl"
            auto
            ghost
            rounded
            shadow
            css={{ mt: '$10', maxW: '1450px', mx: 'auto' }}
            iconRight={<RightArrowIcon />}
            href={`${publicUrl}/question`}
          >
            テストを受ける
          </Button>
          <Spacer y={1} />
          <Text size="$sm" css={{ textAlign: 'center', '@sm': { px: '$20' } }}>
            もし質問や疑問がありましたら、お気軽にお問い合わせください。当サービスの専門チームがお手伝いいたします。
          </Text>
          <Text size="$sm" css={{ textAlign: 'center', '@sm': { px: '$20' } }}>
            ※本サービスは闇バイトを奨励するものではありません。あくまでリスク回避や適切なキャリア選択のサポートを目的としています。
          </Text>
        </Box>
        <Spacer y={3} />
      </Box>
    </Layout>
  );
};

export default TopPage;
