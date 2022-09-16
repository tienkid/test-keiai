import React from 'react';

import { Block, LocalImage, Text } from '@components';

export const ItemContent = () => {
  // state
  // render
  return (
    <Block
      width={300}
      height={200}
      marginLeft={20}
      borderBottomRightRadius={5}
      borderBottomLeftRadius={5}>
      <LocalImage
        source={'banner'}
        style={{
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
      />
      <Block
        width={300}
        height={70}
        position={'absolute'}
        bottom={0}
        alignItems="center"
        justifyContent={'center'}
        borderBottomLeftRadius={5}
        borderBottomRightRadius={5}
        colorTheme="content_gray">
        <Text preset="textNormal">住み初めてからのやるべきこと</Text>
      </Block>
    </Block>
  );
};
