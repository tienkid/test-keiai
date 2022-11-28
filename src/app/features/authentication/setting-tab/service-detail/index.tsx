import React, { memo } from 'react';

import isEqual from 'react-fast-compare';
import { WebView } from 'react-native-webview';

import { CONTENT_DEFAULT, logActionEvent } from '@common';
import { Block } from '@components';
import { HeaderBack } from '@components/header-back';
import { useRoute } from '@react-navigation/native';

import { ContentDetailProps } from './type';

const ServiceDetailComponent = () => {
  //state
  const route = useRoute<ContentDetailProps['route']>();
  const { item } = route.params;
  // render
  return (
    <Block block colorTheme="background">
      <HeaderBack />
      <WebView
        source={{
          html: item ? item.content : CONTENT_DEFAULT,
        }}
        onMessage={_event => {
          (async () => {
            await logActionEvent('news', { click: 1 });
          })();
        }}
        scalesPageToFit
      />
    </Block>
  );
};

export const ContentService = memo(ServiceDetailComponent, isEqual);
