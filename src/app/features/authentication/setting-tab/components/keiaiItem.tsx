import React from 'react';

import { Block, Button, LocalImage, Spacer, Text } from '@components';

import { KeiaiItemPropsType } from '../type';

export const KeiaiItem = ({ item }: KeiaiItemPropsType) => {
  // func
  const handlePressItem = () => {
    console.log(item.type);
  };

  // render
  return (
    <Button.Default onPress={handlePressItem} style={{ marginBottom: 25 }}>
      <Block height={112} width={169}>
        <LocalImage source={item.image} resizeMode="cover" />
      </Block>
      <Spacer height={5} />
      <Text text={item.title} preset="textNormal12" colorTheme="base5" />
    </Button.Default>
  );
};
