import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { Block, Header, LocalImage, Spacer, StackView } from '@components';

import { PointCard } from './components/point-card';

const PointComponent = () => {
  // state

  // render
  return (
    <Block block colorTheme="background">
      <Header />
      <StackView>
        <Block block paddingHorizontal={10}>
          <Spacer height={16} />
          <PointCard />
        </Block>
        <Block
          alignSelf={'center'}
          paddingHorizontal={15}
          width={325}
          paddingTop={15}
          height={415}>
          <LocalImage source="term_policy" resizeMode="center" />
        </Block>
      </StackView>
    </Block>
  );
};

export const PointTab = memo(PointComponent, isEqual);
