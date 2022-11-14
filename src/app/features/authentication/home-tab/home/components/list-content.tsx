import React, { useCallback } from 'react';

import { Block, Icon, Spacer, Text } from '@components';

import { ItemContent } from './item-content';

export const ListContent = () => {
  //state
  const dataFake = [
    {
      id: 1,
      title:
        'アンテナ、照明、カーテンレールなど まとめてお得パックをご紹介！！',
      sign: 'KEIAI',
    },
    {
      id: 2,
      title: '8,800円から作れるオリジナル表札',
      sign: '株式会社日本エクステリア',
    },
    {
      id: 3,
      title: 'unico｜特別ご優待券',
      sign: 'unico',
    },
    {
      id: 5,
      title: 'アート引越センター特別優待特典',
      sign: 'アート引越センター',
    },
    {
      id: 4,
      title: 'シャワーヘッド“ミラブルPlus”',
      sign: '株式会社サイエンス',
    },
  ];
  // const contents = useSelector(x => x.app.contents);

  //func
  const renderItemContent = useCallback((item: any) => {
    return <ItemContent item={item} key={item.id} />;
  }, []);

  // render
  return (
    <Block paddingVertical={20} paddingHorizontal={15} block>
      <Block
        direction={'row'}
        justifyContent="space-between"
        alignItems="center">
        <Text preset="textNormal15" colorTheme="base5" t18n="home:text_posts" />
        <Block direction={'row'} alignItems="center">
          <Text
            preset="linkXXSmall"
            colorTheme="text_2"
            t18n="home:text_see_more"
          />
          <Icon icon="go" colorTheme="text_2" size={16} />
        </Block>
      </Block>
      <Spacer height={15} />
      <Text
        preset="linkXSmall"
        colorTheme="base5"
        t18n="home:text_posts_content"
      />
      <Spacer height={15} />
      {/* <ListView
        overScrollMode={'never'}
        scrollEnabled={false}
        data={dataFake.slice(0, 5)}
        canRefresh={false}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderItemContent}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
      /> */}
      {dataFake.slice(0, 5).map(renderItemContent)}
    </Block>
  );
};
