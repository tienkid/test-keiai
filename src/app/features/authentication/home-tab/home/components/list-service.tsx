import React, { useCallback } from 'react';

import { Block, Icon, Spacer, Text } from '@components';

import { ItemService } from './item-service';

export const ListService = () => {
  // state
  const dataFake = [
    {
      id: 1,
      text: 'アンテナ、照明、カーテンレールなど まとめてお得パックをご紹介！！',
      sign: 'KEIAI',
    },
    {
      id: 2,
      text: '8,800円から作れるオリジナル表札',
      sign: '株式会社日本エクステリア',
    },
    {
      id: 3,
      text: 'unico｜特別ご優待券',
      sign: 'unico',
    },
    {
      id: 5,
      text: 'アート引越センター特別優待特典',
      sign: 'アート引越センター',
    },
    {
      id: 4,
      text: 'シャワーヘッド“ミラブルPlus”',
      sign: '株式会社サイエンス',
    },
  ];

  //func
  const renderItemService = useCallback((item: any, index: number) => {
    return <ItemService key={index.toString()} item={item} index={index} />;
  }, []);

  // render
  return (
    <Block paddingHorizontal={15} paddingTop={20} paddingBottom={20} block>
      <Block
        direction={'row'}
        justifyContent="space-between"
        alignItems="center">
        <Text
          preset="textNormal15"
          colorTheme="base5"
          t18n="home:text_services"
        />
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
        t18n="home:text_services_content"
      />
      <Spacer height={15} />
      <Block direction="row" flexWrap="wrap">
        {dataFake.slice(0, 4).map(renderItemService)}
      </Block>
    </Block>
  );
};
