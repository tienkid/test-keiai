import React from 'react';

import { Block, Divider, LocalImage, Text } from '@components';
export type ItemRecommendProps = {
  item: { id: number; text: string; sign: string };
};
export const ItemRecommend = ({ item }: ItemRecommendProps) => {
  // state
  // render
  return (
    <Block>
      <Block
        direction={'row'}
        marginTop={15}
        marginBottom={15}
        paddingHorizontal={10}>
        <Block width={120} height={80}>
          <LocalImage source={'banner'} />
        </Block>
        <Block flex={1} paddingLeft={10}>
          <Text preset="textBold14" colorTheme="base5" numberOfLines={3}>
            {item.text}
          </Text>
          <Text preset="textBold14" colorTheme="base4">
            {item.sign}
          </Text>
        </Block>
      </Block>
      <Divider height={2} colorTheme="arrow" />
    </Block>
  );
};
