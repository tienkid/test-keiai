import React from 'react';

import { Block, Divider, Spacer, Text } from '@components';

import { ItemRecommend } from './item-recommend';

export const ListRecommend = () => {
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
  // render
  return (
    <Block
      colorTheme="white"
      paddingHorizontal={10}
      paddingTop={20}
      paddingBottom={20}>
      <Text
        preset="textBold14"
        colorTheme="base5"
        t18n="home:text_list_recommend"
      />
      <Spacer height={10} />
      <Divider height={2} colorTheme="base5" />
      {dataFake.map(item => (
        <ItemRecommend key={item.id} item={item} />
      ))}
    </Block>
  );
};
