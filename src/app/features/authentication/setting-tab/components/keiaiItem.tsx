import React from 'react';

import { Block, Button, LocalImage } from '@components';

import { KeiaiItemPropsType } from '../type';

export const KeiaiItem = ({ item }: KeiaiItemPropsType) => {
  // func
  const handlePressItem = () => {
    console.log(item.type);
  };

  // render
  return (
    <Button.Default onPress={handlePressItem}>
      <Block
        height={100}
        width={162}
        shadow
        colorTheme="white"
        borderRadius={8}
        marginRight={7.5}
        marginLeft={7.5}
        marginBottom={15}>
        <Block paddingVertical={18} paddingHorizontal={19}>
          <LocalImage source={item.image} />
        </Block>
      </Block>
    </Button.Default>
  );
};
