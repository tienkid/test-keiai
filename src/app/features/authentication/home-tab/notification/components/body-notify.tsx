import React, { useCallback, useState } from 'react';

import { Block, Divider, ListView, Spacer } from '@components';

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
  const [dataNotify, setDataNotify] = useState<ItemNotifyType[]>([
    {
      id: 1,
      text: 'KEIAIプラスリリース',
      date: '2022/12/24',
      content: 'アプリをアップデートしました ！',
      check: false,
    },
    // {
    //   id: 2,
    //   text: 'KEIAIプラスリリース',
    //   date: '2022/12/12',
    //   content: 'アプリメンテナンスのお知らせ',
    //   check: false,
    // },
    // {
    //   id: 3,
    //   text: 'KEIAIプラスリリース',
    //   date: '2022/12/12',
    //   content: '変更手続きなどお困りの際は「お客様サポート」をご利用ください',
    //   check: false,
    // },
    // {
    //   id: 4,
    //   text: 'KEIAIプラスリリース',
    //   date: '2022/12/12',
    //   content: 'アプリメンテナンスのお知らせ',
    //   check: true,
    // },
    // {
    //   id: 5,
    //   text: 'KEIAIプラスリリース',
    //   date: '2022/12/12',
    //   content: '変更手続きなどお困りの際は「お客様サポート」をご利用ください',
    //   check: false,
    // },
    // {
    //   id: 6,
    //   text: 'KEIAIプラスリリース',
    //   date: '2022/12/12',
    //   content: 'アプリメンテナンスのお知らせ',
    //   check: false,
    // },
    // {
    //   id: 7,
    //   text: 'KEIAIプラスリリース',
    //   date: '2022/12/12',
    //   check: false,
    //   content:
    //     '変更手続きなどお困りの際は「お客様サポート」をご利用ください 変更手続きなどお困りの際は「お客様サポート」をご利用ください変更手続きなどお困りの際は「お客様サポート」をご利用ください',
    // },
    // {
    //   id: 8,
    //   text: 'KEIAIプラスリリース',
    //   date: '2022/12/12',
    //   content: 'アプリメンテナンスのお知らせ',
    //   check: false,
    // },
  ]);
  const handleToDetail = (item: ItemNotifyType) => {
    setDataNotify(
      dataNotify.map(i => {
        if (item === i) {
          i.check = false;
        }
        return i;
      }),
    );
  };
  const onLoadMore = useCallback(() => {
    console.log('load more');
  }, []);
  const renderItem = useCallback(({ item }: RenderItemNotifyType) => {
    return <ItemNotify item={item} handleToDetail={handleToDetail} />;
  }, []);

  const keyExtractor = useCallback(
    (item: ItemNotifyType, index: number) =>
      item.id.toString() + index.toString(),
    [],
  );

  const renderSpacer = () => <Divider colorTheme="line" />;

  return (
    <Block flex={1} colorTheme={'background'} paddingTop={2}>
      <Block colorTheme="white" shadow flex={1}>
        <Block flex={1}>
          <Spacer height={10} />
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
