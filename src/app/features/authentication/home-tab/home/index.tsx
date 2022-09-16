import React, { memo } from 'react';
import { RefreshControl } from 'react-native';

import isEqual from 'react-fast-compare';

import { Block, Header, LocalImage, StackView } from '@components';
import { FocusedStatusBarStyle } from '@components/focused-status-bar';

import { ButtonInfo } from './components/button-app-info';
import { ButtonPoint } from './components/button-point';
import { ListRecommend } from './components/list-recommend';
import { SliderContent } from './components/slider-content';

const HomeComponent = () => {
  // render
  return (
    <Block block>
      <FocusedStatusBarStyle barStyle={'light-content'} />
      <Header />
      <StackView refreshControl={<RefreshControl refreshing={false} />}>
        <Block width={'100%'} height={200}>
          <LocalImage source={'banner'} />
        </Block>
        <ButtonPoint />
        <SliderContent />
        <ButtonInfo />
        <ListRecommend />
      </StackView>
    </Block>
  );
};

export const HomeTab = memo(HomeComponent, isEqual);
