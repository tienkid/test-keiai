import React from 'react';

import { Block, Button, LocalImage, Spacer, Text } from '@components';

import { ItemNotifyProps } from '../type';

// import { ItemContentProps } from '../type';

export const ItemNotify = ({ item, handleToDetail }: ItemNotifyProps) => {
  // state
  console.log(item, 'item');

  // render
  return (
    <Block
      paddingTop={10}
      paddingHorizontal={15}
      paddingBottom={10}
      color={item.check ? '#FFF6F7' : '#FFF'}>
      <Button.Default
        onPress={() => handleToDetail(item)}
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
          <Block
            alignItems={'flex-end'}
            position={'absolute'}
            right={0}
            bottom={0}>
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
