import React from 'react';

import { Block, Button, Image, LocalImage, Text } from '@components';
import { Item } from '@model/content';
import { navigate } from '@navigation/navigation-service';
import { CONTENT_STACK } from '@navigation/screen-types';

export const ItemContent = ({ item }: { item: Item }) => {
  // state
  const handleGoToContent = () => {
    navigate(CONTENT_STACK.CONTENT_DETAIL, { item });
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
        {item.thumb ? (
          <Image source={item.thumb} />
        ) : (
          <LocalImage
            source={'banner'}
            style={{
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}
          />
        )}
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
          <Text preset="textNormal" text={item.title} />
        </Block>
      </Block>
    </Button.Default>
  );
};
