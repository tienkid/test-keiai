import React from 'react';

import { Block, Button, Divider, LocalImage, Spacer, Text } from '@components';
import { navigate } from '@navigation/navigation-service';
import { CONTENT_STACK } from '@navigation/screen-types';

// import { ItemContentProps } from '../type';

export const ItemContentView = () => {
  // state
  const handleToDetail = () => {
    navigate(CONTENT_STACK.CONTENT_DETAIL);
  };
  // render
  return (
    <Block middle paddingTop={20}>
      <Button.Default onPress={handleToDetail} style={{ alignItems: 'center' }}>
        <Block width={310}>
          <Text
            text="住み初めてからのやるべきこと"
            preset="textBold14"
            colorTheme="base5"
          />
          <Spacer height={5} />
          <Text text="#税金  #点検  #住宅設備  #保険" colorTheme="base6" />
          <Block alignItems={'flex-end'} paddingTop={10}>
            <Text text="2022/06/28" colorTheme="base6" textAlign={'left'} />
          </Block>
        </Block>
        <Spacer height={20} />
        <Block width={300} height={200}>
          <LocalImage source={'banner'} resizeMode="contain" />
        </Block>
      </Button.Default>
      <Block width={'100%'} paddingHorizontal={20}>
        <Divider />
      </Block>
      <Spacer height={30} />
    </Block>
  );
};
