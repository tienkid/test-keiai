import React from 'react';

import { Block, Button, LocalImage, Spacer, Text } from '@components';

import { ItemNotifyProps } from '../type';

// import { ItemContentProps } from '../type';

export const ItemNotify = ({ item }: ItemNotifyProps) => {
  // state
  const handleToDetail = () => {
    // navigate(HOME_STACK.NOTIFY_DETAIL, { item });
  };
  // render
  return (
    <Block paddingTop={10}>
      <Button.Default
        onPress={handleToDetail}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Block width={60} height={60}>
          <LocalImage source="icon_notify" resizeMode="contain" />
        </Block>
        <Spacer width={15} />
        <Block height={'100%'} flex={1}>
          <Text
            preset="textNormal12"
            text={item.content}
            colorTheme="base5"
            numberOfLines={2}
          />
          <Spacer height={5} />
          <Block alignItems={'flex-end'}>
            <Text
              preset="textNormal11"
              text={item.date}
              colorTheme="statusSuccess"
            />
          </Block>
        </Block>
      </Button.Default>
    </Block>
  );
};
