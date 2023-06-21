import React from 'react';
import { Text, Spacer, Button } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import Layout from '../../components/layout';
import backgroundimgDark from '../../assets/images/top-bg-img-dark.png';
import backgroundimgLight from '../../assets/images/top-bg-img-light.png';
import Box from '../../components/common/Box';
import { RightArrowIcon } from '../../components/common/icons';

const TopPage = () => {
  const darkMode = useDarkMode(false);

  return (
    <Layout>
      <Box
        css={{
          backgroundImage: `url(${
            darkMode.value ? backgroundimgDark : backgroundimgLight
          })`,
          minHeight: '100vh',
          backgroundPosition: 'center',
          backgroundTepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
      </Box>
    </Layout>
  );
};

export default TopPage;
