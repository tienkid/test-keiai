import React from 'react';

import { Block, LocalImage, Text } from '@components';

export const ItemContent = () => {
  // state
  // render
  return (
    <Block width={300} height={200} marginLeft={20} colorTheme="error">
      <LocalImage source={'banner'} />
      <Block
        width={300}
        height={70}
        position={'absolute'}
        bottom={0}
        alignItems="center"
        justifyContent={'center'}
        colorTheme="content_gray">
        <Text preset="textNormal">住み初めてからのやるべきこと</Text>
      </Block>
    </Block>
  );
};
