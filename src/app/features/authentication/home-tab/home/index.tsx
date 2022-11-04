import React, { memo, useEffect } from 'react';
import { RefreshControl } from 'react-native';

import isEqual from 'react-fast-compare';

import { dispatch } from '@common';
import { Block, Header, LocalImage, StackView } from '@components';
import { FocusedStatusBarStyle } from '@components/focused-status-bar';
import { BannerResponse } from '@model/banner';
import { ContentResponse } from '@model/content';
import {
  appActions,
  bannerAction,
  contentAction,
  pointAction,
} from '@redux-slice';

import { ButtonInfo } from './components/button-app-info';
import { ButtonPoint } from './components/button-point';
import { ListRecommend } from './components/list-recommend';
import { SliderContent } from './components/slider-content';

const HomeComponent = () => {
  //func
  const getContent = () => {
    dispatch(
      contentAction.getContent(
        {
          page: 1,
          perPage: 10,
        },
        onGetContentSucceeded,
      ),
    );
  };

  const onGetContentSucceeded = (data: ContentResponse) => {
    dispatch(appActions.setContents(data));
  };
  const getBanner = () => {
    dispatch(
      bannerAction.getBanner({ page: 1, limit: 10 }, onGetBannerSucceeded),
    );
  };

  const onGetBannerSucceeded = (data: BannerResponse) => {
    console.log(data);
  };
  //effect
  useEffect(() => {
    dispatch(pointAction.getPoint());
    getContent();
    getBanner();
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
