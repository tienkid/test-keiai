import React, { memo } from 'react';

import isEqual from 'react-fast-compare';
import { WebView } from 'react-native-webview';

import { CONTENT_DEFAULT, logActionEvent } from '@common';
import { Block, HeaderBackLeft, Spacer } from '@components';
import { useRoute } from '@react-navigation/native';

import { ItemContentDetail } from './components/item-content-detail';
import { ContentDetailProps } from './type';

const ContentDetailComponent = () => {
  //state
  const route = useRoute<ContentDetailProps['route']>();
  const { item } = route.params;

  // render
  return (
    <Block block colorTheme="white">
      <HeaderBackLeft headerTextNonTranslate={item.title} />
      <Spacer height={10} />
      <ItemContentDetail item={item} />
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

export const ContentDetail = memo(ContentDetailComponent, isEqual);
