import React, { memo, useEffect } from 'react';
import { RefreshControl } from 'react-native';

import isEqual from 'react-fast-compare';

import { dispatch } from '@common';
import { Block, Divider, Header, Spacer, StackView } from '@components';
// import { dataFake } from '@features/authentication/setting-tab';
import { useSelector } from '@hooks';
import { BannerResponse } from '@model/banner';
import { ContentResponse } from '@model/content';
import { useFocusEffect } from '@react-navigation/native';
import {
  appActions,
  bannerAction,
  contentAction,
  pointAction,
} from '@redux-slice';

import { ButtonPoint } from './components/button-point';
import { ListBanner } from './components/list-banner';
import { PointContent } from './components/point-content';

const HomeComponent = () => {
  //func
  const profile = useSelector(x => x.app.profile);
  console.log(profile, 'profile Home');
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
  //13t0lka3fjh6qsqbd709ig7e74
  useFocusEffect(
    React.useCallback(() => {
      getContent();
    }, []),
  );

  useEffect(() => {
    dispatch(pointAction.getPoint());
    getBanner();
  }, []);

  // render
  return (
    <Block block colorTheme="white">
      <Header />
      <StackView
        refreshControl={<RefreshControl refreshing={false} />}
        style={{ flex: 1 }}>
        <Spacer height={8} />
        <ListBanner />
        <Spacer height={8} />
        <ButtonPoint />
        <Divider height={6} colorTheme="divider" />
        <PointContent />
      </StackView>
    </Block>
  );
};

export const HomeTab = memo(HomeComponent, isEqual);
