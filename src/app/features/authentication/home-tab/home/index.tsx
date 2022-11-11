import React, { memo } from 'react';
import { RefreshControl } from 'react-native';

import isEqual from 'react-fast-compare';

import { dispatch } from '@common';
import { Block, Divider, Header, Spacer, StackView } from '@components';
import { useUnMount } from '@hooks';
import { BannerResponse } from '@model/banner';
import { ContentResponse } from '@model/content';
import {
  appActions,
  bannerAction,
  contentAction,
  pointAction,
} from '@redux-slice';

import { ButtonPoint } from './components/button-point';
import { ListBanner } from './components/list-banner';
import { ListContent } from './components/list-content';
import { ListService } from './components/list-service';
import { PointContent } from './components/point-content';

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
  useUnMount(() => {
    dispatch(pointAction.getPoint());
    getContent();
    getBanner();
  });

  // render
  return (
    <Block block colorTheme="white">
      <Header />
      <StackView
        refreshControl={<RefreshControl refreshing={false} />}
        style={{ flex: 1 }}>
        <ListBanner />
        <Spacer height={8} />
        <ButtonPoint />
        <Divider height={6} colorTheme="divider" />
        {/* service */}
        <ListService />
        <Divider height={6} colorTheme="divider" />
        {/* content */}
        <ListContent />
        <Divider height={6} colorTheme="divider" />
        {/* point */}
        <PointContent />
      </StackView>
    </Block>
  );
};

export const HomeTab = memo(HomeComponent, isEqual);
