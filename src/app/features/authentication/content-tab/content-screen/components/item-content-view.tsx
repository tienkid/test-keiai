import React from 'react';

import { generateTags } from '@common';
import { Block, Button, Image, LocalImage, Spacer, Text } from '@components';
import { Item } from '@model/content';
import { navigate } from '@navigation/navigation-service';
import { CONTENT_STACK } from '@navigation/screen-types';

export const ItemContentView = ({ item }: { item: Item }) => {
  // state
  const handleToDetail = () => {
    navigate(CONTENT_STACK.CONTENT_DETAIL, { item });
  };

  // render
  return (
    <Block middle>
      <Button.Default onPress={handleToDetail} style={{ alignItems: 'center' }}>
        <Block width={345} height={228} borderRadius={5} overflow="hidden">
          {item?.thumb ? (
            <Image source={item.thumb} resizeMode="contain" />
          ) : (
            <LocalImage source={'image_thumbnail'} resizeMode="cover" />
          )}
        </Block>
      </Button.Default>
      <Spacer height={8} />
      <Block width={'100%'} paddingHorizontal={20}>
        <Text text={item?.title} preset="textBold14" colorTheme="base5" />
        <Spacer height={4} />
        <Text
          text={generateTags(item?.tags)}
          colorTheme="base6"
          preset="textNormal11"
        />
        <Spacer height={16} />
      </Block>
    </Block>
  );
};
