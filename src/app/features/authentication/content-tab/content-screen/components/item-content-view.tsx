import React from 'react';

import { formatDate, genarateTags } from '@common';
import {
  Block,
  Button,
  Divider,
  Image,
  LocalImage,
  Spacer,
  Text,
} from '@components';
import { Item } from '@model/content';
import { navigate } from '@navigation/navigation-service';
import { CONTENT_STACK } from '@navigation/screen-types';

// import { ItemContentProps } from '../type';

export const ItemContentView = ({ item }: { item: Item }) => {
  // state
  const handleToDetail = () => {
    navigate(CONTENT_STACK.CONTENT_DETAIL, { item });
  };
  // render
  return (
    <Block middle paddingTop={20}>
      <Button.Default onPress={handleToDetail} style={{ alignItems: 'center' }}>
        <Block width={310}>
          <Text text={item?.title} preset="textBold14" colorTheme="base5" />
          <Spacer height={5} />
          <Text text={genarateTags(item?.tags)} colorTheme="base6" />
          <Block alignItems={'flex-end'} paddingTop={10}>
            <Text
              text={formatDate({ date: item?.updatedAt })}
              colorTheme="base6"
              textAlign={'left'}
            />
          </Block>
        </Block>
        <Spacer height={20} />
        <Block width={300} height={200}>
          {item?.thumb ? (
            <Image source={item.thumb} resizeMode="contain" />
          ) : (
            <LocalImage source={'banner'} resizeMode="contain" />
          )}
        </Block>
      </Button.Default>
      <Block width={'100%'} paddingHorizontal={20}>
        <Divider />
      </Block>
      <Spacer height={30} />
    </Block>
  );
};
