import React from 'react';

import { Block, Button, LocalImage, Text } from '@components';
import { navigate } from '@navigation/navigation-service';
import { CONTENT_STACK } from '@navigation/screen-types';

export const ItemContent = () => {
  // state
  const handleGoToContent = () => {
    navigate(CONTENT_STACK.CONTENT_DETAIL);
  };
  // render
  return (
    <Button.Default onPress={handleGoToContent}>
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
    </Button.Default>
  );
};
