import React, { useCallback, useState } from 'react';

import { Block, Divider, ListView } from '@components';

import { ItemNotify } from './item-notify';

import { ItemNotifyType, RenderItemNotifyType } from '../type';

export const BodyNotify = () => {
  // render
  // const dataFakeNotify: Array<ItemNotifyType> = [
  //   {
  //     id: 1,
  //     text: 'KEIAIプラスリリース',
  //     date: '2022/12/12',
  //     content: '変更手続きなどお困りの際は「お客様サポート」をご利用ください',
  //   },
  //   {
  //     id: 2,
  //     text: 'KEIAIプラスリリース',
  //     date: '2022/12/12',
  //     content: 'アプリメンテナンスのお知らせ',
  //   },
  //   {
  //     id: 3,
  //     text: 'KEIAIプラスリリース',
  //     date: '2022/12/12',
  //     content: '変更手続きなどお困りの際は「お客様サポート」をご利用ください',
  //   },
  //   {
  //     id: 4,
  //     text: 'KEIAIプラスリリース',
  //     date: '2022/12/12',
  //     content: 'アプリメンテナンスのお知らせ',
  //   },
  //   {
  //     id: 5,
  //     text: 'KEIAIプラスリリース',
  //     date: '2022/12/12',
  //     content: '変更手続きなどお困りの際は「お客様サポート」をご利用ください',
  //   },
  //   {
  //     id: 6,
  //     text: 'KEIAIプラスリリース',
  //     date: '2022/12/12',
  //     content: 'アプリメンテナンスのお知らせ',
  //   },
  //   {
  //     id: 7,
  //     text: 'KEIAIプラスリリース',
  //     date: '2022/12/12',
  //     content: '変更手続きなどお困りの際は「お客様サポート」をご利用ください',
  //   },
  //   {
  //     id: 8,
  //     text: 'KEIAIプラスリリース',
  //     date: '2022/12/12',
  //     content: 'アプリメンテナンスのお知らせ',
  //   },
  // ];
  const [dataNotify] = useState<ItemNotifyType[]>([
    {
      id: 1,
      text: 'KEIAIプラスリリース',
      date: '2022/12/12',
      content: '変更手続きなどお困りの際は「お客様サポート」をご利用ください',
    },
    {
      id: 2,
      text: 'KEIAIプラスリリース',
      date: '2022/12/12',
      content: 'アプリメンテナンスのお知らせ',
    },
    {
      id: 3,
      text: 'KEIAIプラスリリース',
      date: '2022/12/12',
      content: '変更手続きなどお困りの際は「お客様サポート」をご利用ください',
    },
    {
      id: 4,
      text: 'KEIAIプラスリリース',
      date: '2022/12/12',
      content: 'アプリメンテナンスのお知らせ',
    },
    {
      id: 5,
      text: 'KEIAIプラスリリース',
      date: '2022/12/12',
      content: '変更手続きなどお困りの際は「お客様サポート」をご利用ください',
    },
    {
      id: 6,
      text: 'KEIAIプラスリリース',
      date: '2022/12/12',
      content: 'アプリメンテナンスのお知らせ',
    },
    {
      id: 7,
      text: 'KEIAIプラスリリース',
      date: '2022/12/12',
      content: '変更手続きなどお困りの際は「お客様サポート」をご利用ください',
    },
    {
      id: 8,
      text: 'KEIAIプラスリリース',
      date: '2022/12/12',
      content: 'アプリメンテナンスのお知らせ',
    },
  ]);

  const onLoadMore = useCallback(() => {
    console.log(dataNotify.push(...dataNotify));
  }, [dataNotify]);
  const renderItem = useCallback(({ item }: RenderItemNotifyType) => {
    return <ItemNotify item={item} />;
  }, []);

  const keyExtractor = useCallback(
    (item: ItemNotifyType, index: number) =>
      item.id.toString() + index.toString(),
    [],
  );

  const renderSpacer = () => <Divider colorTheme="line" />;

  return (
    <Block flex={1} colorTheme={'background'} paddingTop={2}>
      <Block colorTheme="white" paddingVertical={10} shadow flex={1}>
        <Block paddingHorizontal={20} flex={1}>
          <ListView
            data={dataNotify ?? []}
            canRefresh={false}
            canLoadMore={false}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSpacer}
            showsVerticalScrollIndicator={false}
            keyExtractor={keyExtractor}
            onEndReached={onLoadMore}
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
