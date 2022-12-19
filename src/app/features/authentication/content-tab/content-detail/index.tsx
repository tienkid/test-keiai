import React, { memo } from 'react';

import isEqual from 'react-fast-compare';
import { WebView } from 'react-native-webview';

import { CONTENT_DEFAULT, generateTags, logActionEvent } from '@common';
import { Block, HeaderBackLeft } from '@components';
import { useRoute } from '@react-navigation/native';
import moment from 'moment';

import { ContentDetailProps } from './type';

const ContentDetailComponent = () => {
  //state
  const route = useRoute<ContentDetailProps['route']>();
  const { item } = route.params;
  const header = `<div>
      <p style="font-size: 30px;color: #121212;padding-bottom: 5px;padding-top: 10px;">
      ${item?.title}
      </p>
      <div>
        ${
          item.tags.length > 0
            ? `<div style="font-size: 24px;color: #666666;padding-bottom: 5px;">${generateTags(
                item?.tags,
              )}</div>`
            : ''
        }
      </div>
      <p style="font-size: 24px;color: #666666;padding-bottom: 5px;">
      ${moment(item.startTime).format('YYYY/MM/DD')}
    </p>
    </div>`;

  // render
  return (
    <Block block colorTheme="white">
      <HeaderBackLeft headerTextNonTranslate={item.title} />
      {/* <Spacer height={10} />
      <ItemContentDetail item={item} /> */}
      <WebView
        source={{
          html: item ? header + item.content : CONTENT_DEFAULT,
        }}
        onMessage={_event => {
          (async () => {
            await logActionEvent('news', { click: 1 });
          })();
        }}
        showsVerticalScrollIndicator={false}
        scalesPageToFit
      />
    </Block>
  );
};

export const ContentDetail = memo(ContentDetailComponent, isEqual);
