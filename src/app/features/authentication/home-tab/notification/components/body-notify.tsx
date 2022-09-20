import React, { useCallback } from 'react';

import { Block, Divider, ListView, Text } from '@components';

import { ItemNotify } from './item-notify';

import { ItemNotifyType, RenderItemNotifyType } from '../type';

export const BodyNotify = () => {
  // render
  const dataNotify: Array<ItemNotifyType> = [
    {
      id: 1,
      text: 'KEIAIプラスリリース',
      date: '2022/12/12',
      content:
        'いつもKEIAIプラスをご利用いただきまして、誠にありがとうございます。この度、KEIAIプラスの公式アプリを正式リリースいたしましたのでご案内いたします。これから住宅購入者の方々に向けたお得な情報や暮らしに関するコンテンツを配信してまいります。新機能の追加なども予定しており、皆様の暮らしをより豊・楽・快にしてまいります。今後ともKEIAIプラスをよろしくおねがいいたします。',
    },
    {
      id: 2,
      text: 'KEIAIプラスリリース',
      date: '2022/12/12',
      content:
        'いつもKEIAIプラスをご利用いただきまして、誠にありがとうございます。この度、KEIAIプラスの公式アプリを正式リリースいたしましたのでご案内いたします。これから住宅購入者の方々に向けたお得な情報や暮らしに関するコンテンツを配信してまいります。新機能の追加なども予定しており、皆様の暮らしをより豊・楽・快にしてまいります。今後ともKEIAIプラスをよろしくおねがいいたします。',
    },
  ];
  const renderItem = useCallback(({ item }: RenderItemNotifyType) => {
    return <ItemNotify item={item} />;
  }, []);

  const keyExtractor = useCallback(
    (item: ItemNotifyType) => item.id.toString(),
    [],
  );

  const renderSpacer = () => <Divider />;

  return (
    <Block flex={1} colorTheme={'background'} paddingTop={10}>
      <Block
        colorTheme="white"
        width={'25%'}
        alignItems={'center'}
        borderTopRightRadius={5}
        paddingVertical={10}
        shadow>
        <Text t18n="notify:header" preset="textBold14" colorTheme="base5" />
      </Block>
      <Block colorTheme="white" paddingVertical={20} shadow flex={1}>
        <Block
          width={'25%'}
          height={10}
          color={'white'}
          position={'absolute'}
          top={-5}
        />
        <Block paddingHorizontal={20} flex={1}>
          <ListView
            data={dataNotify ?? []}
            canRefresh={false}
            canLoadMore={false}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSpacer}
            showsVerticalScrollIndicator={false}
            keyExtractor={keyExtractor}
          />
          {/* <WebView
            source={{
              html: `<div>
              <button onclick="clickYourButton('[PASS SOME STRING DATA HERE]')">Click</button>
          </div>
          ...
          <script type="text/javascript">
              function clickYourButton(data) {
                  setTimeout(function () {
                      window.ReactNativeWebView.postMessage(data)
                  }, 0) // *** here ***
              }
          </script>
            `,
            }}
            onMessage={handleMessage}
          /> */}
        </Block>
      </Block>
    </Block>
  );
};
