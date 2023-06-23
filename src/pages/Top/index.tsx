import React from 'react';
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

const TopPage = () => {
  const darkMode = useDarkMode(false);
  const URL = 'https://example.com/';
  const QUOTE = '【闇バイト診断サービス】自分の闇バイトリスクを診断しよう！';
  const HASHTAGS = [
    '闇バイト',
    '診断サービス',
    'キャリア選択',
    'リスク回避',
    '将来の選択',
  ];

  return (
    <Layout>
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
        <Box css={{ px: '$12', mt: '$8', maxW: '1450px' }}>
          <Text size="$md">
            Sed eu semper nulla. Sed non risus purus. Sed auctor lorem non ex
            congue lobortis. Aliquam erat volutpat. Duis convallis, libero nec
            varius efficitur, neque elit bibendum elit, eget vulputate turpis
            felis nec lectus. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Suspendisse ullamcorper
            mauris eu ex eleifend rutrum. Quisque vulputate rhoncus elit, at
            dapibus leo aliquet et. Sed eu ligula vitae orci lobortis
            consectetur. Phasellus malesuada elit et odio interdum, id rutrum
            tortor tincidunt. Integer tincidunt gravida justo, a commodo est
            malesuada ac. Mauris lobortis, erat eu tristique facilisis, justo
            nulla luctus felis, vitae posuere velit eros vitae orci.
          </Text>
          <Spacer y={1} />
          <Text size="$lg" hideIn="xs">
            Phasellus sed enim eget odio accumsan tristique. Mauris efficitur
            libero vel gravida cursus. Nullam vel fermentum lectus. Sed
            convallis tincidunt nisi, vel feugiat mi lacinia non. Fusce
            efficitur neque ut posuere fringilla. Vestibulum elementum, arcu nec
            laoreet vestibulum, enim massa mollis mauris, nec tempus libero elit
            a lectus. Ut a enim libero. Mauris sit amet ipsum consectetur,
            scelerisque quam at, consectetur lectus. Pellentesque pellentesque
            velit sit amet finibus sollicitudin.
          </Text>
          <Text size="$lg" hideIn="md">
            Donec posuere gravida risus, nec pharetra purus elementum ac.
            Suspendisse potenti. Mauris vestibulum, massa at bibendum bibendum,
            mi lorem eleifend lorem, id convallis diam elit eu dui. In hac
            habitasse platea dictumst. Integer et nunc neque. Phasellus ut
            faucibus velit. Mauris vel sem a metus venenatis tristique nec sed
            risus. Nam ullamcorper, justo vitae fermentum lobortis, magna justo
            facilisis est, eget pretium purus est eget sem. Sed tincidunt justo
            non semper consectetur. Morbi fermentum magna ac risus suscipit, nec
            venenatis ligula bibendum.
          </Text>
          <Spacer y={1} />
          <Text hideIn="md">
            Etiam ultricies ante vel posuere interdum. Nulla commodo, metus nec
            tristique lacinia, velit lacus blandit turpis, sed congue sapien
            purus vel neque. Sed nec volutpat est. In nec eros eget lacus
            consectetur vestibulum. Sed congue fringilla justo, a lacinia lacus
            mollis et. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Morbi facilisis, sem id congue
            bibendum, turpis lorem ullamcorper dolor, eget tristique lectus dui
            auctor turpis. Aenean dignissim ligula mauris, non consectetur neque
            fermentum sed. Fusce rhoncus posuere nisl ut posuere. Suspendisse eu
            tortor lectus. Sed congue tempor tellus, ac rhoncus metus commodo
            nec. Nulla facilisi. Suspendisse potenti
          </Text>
        </Box>
        <Button
          color="gradient"
          size="xl"
          auto
          ghost
          rounded
          shadow
          css={{ marginTop: '$10' }}
          iconRight={<RightArrowIcon />}
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
      <Box css={{ px: '$12', mt: '$14', textAlign: 'center' }}>
        <Text
          h2
          size={25}
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
            '@sm': {
              fontSize: 30,
            },
            '@md': {
              fontSize: 60,
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
        <Text h3>なぜ闇バイト診断サービスを利用するのか？</Text>
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
                  {/* eslint-disable max-len */}
                  闇バイト診断サービスは、あなたの性格や適性を明らかにする手助けをします。自分自身をよりよく知ることで、自己理解を深め、適切な職業選択や将来のキャリアプランに役立てることができます。
                  {/* eslint-enable max-len */}
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
                  {/* eslint-disable max-len */}
                  闇バイトは合法的な労働環境とは異なり、身体的、精神的な健康に悪影響を及ぼす可能性があります。当サービスは、闇バイトのリスクを回避するための情報提供やアドバイスを提供します。
                  {/* eslint-enable max-len */}
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
    </Layout>
  );
};

export default TopPage;
