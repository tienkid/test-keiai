import React, { memo } from 'react';

import isEqual from 'react-fast-compare';
import { WebView } from 'react-native-webview';

import { logActionEvent } from '@common';
import { Block, Header } from '@components';

const ContentDetailComponent = () => {
  // render
  return (
    <Block block colorTheme="background">
      <Header />
      <WebView
        source={{
          html: `<div>
          <button onclick="clickYourButton('[PASS SOME STRING DATA HERE]')">Click</button>
      </div>
      <script type="text/javascript">
          function clickYourButton(data) {
              setTimeout(function () {
                  window.ReactNativeWebView.postMessage(data)
              }, 0) // *** here ***
          }
      </script>`,
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
