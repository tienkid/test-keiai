import React from 'react';

import { Block, Button, Image, LocalImage, Spacer, Text } from '@components';
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
    <Button.Default onPress={handleGoToContent} style={{ flex: 1 }}>
      <Block block direction={'row'}>
        <Block width={100} height={67} borderRadius={8} overflow="hidden">
          {item.thumb ? (
            <Image source={item.thumb} />
          ) : (
            <LocalImage source={'banner'} />
          )}
        </Block>
        <Spacer width={15} />
        <Block block>
          <Text
            preset="textNormal14"
            colorTheme="base5"
            lineHeight={15}
            text={item.title}
            numberOfLines={2}
          />
          <Spacer height={8} />
          <Text
            preset="linkXSmall"
            colorTheme="base4"
            text={item.title}
            numberOfLines={1}
          />
        </Block>
      </Block>
      <Spacer height={20} />
    </Button.Default>
  );
};
