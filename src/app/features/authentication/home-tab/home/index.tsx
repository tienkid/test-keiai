import React, { memo, useEffect } from 'react';
import { RefreshControl } from 'react-native';

import isEqual from 'react-fast-compare';

import { dispatch } from '@common';
import { Block, Header, LocalImage, StackView } from '@components';
import { FocusedStatusBarStyle } from '@components/focused-status-bar';
import { pointAction } from '@redux-slice';

import { ButtonInfo } from './components/button-app-info';
import { ButtonPoint } from './components/button-point';
import { ListRecommend } from './components/list-recommend';
import { SliderContent } from './components/slider-content';

const HomeComponent = () => {
  //func
  //effect
  useEffect(() => {
    dispatch(pointAction.getPoint());
  }, []);

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
