import React from 'react';
import { useWindowDimensions } from 'react-native';

import { Block, Button, LocalImage, Spacer, Text } from '@components';

export type ItemServiceProps = {
  item: { id: number; text: string; sign: string };
  index: number;
};
export const ItemService = ({ item, index }: ItemServiceProps) => {
  //state
  const { width } = useWindowDimensions();
  // render
  return (
    <Button.Default style={{ width: (width - 38) / 2 }}>
      <Block direction={'row'}>
        {index % 2 !== 0 && <Spacer width={4} />}
        <Block block>
          <Block block height={110} borderRadius={8} overflow="hidden">
            <LocalImage source={'item_recommend'} />
          </Block>
          <Block block paddingLeft={10} height={40}>
            <Text preset="textNormal12" colorTheme="base5" numberOfLines={2}>
              {item.text}
            </Text>
          </Block>
        </Block>
        {index % 2 === 0 && <Spacer width={4} />}
      </Block>
      <Spacer height={8} />
    </Button.Default>
  );
};
