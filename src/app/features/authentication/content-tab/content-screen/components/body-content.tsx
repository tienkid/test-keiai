import React from 'react';

import { Block, StackView, Text } from '@components';

import { ItemContentView } from './item-content-view';

export const BodyContent = () => {
  // render
  return (
    <Block flex={1} colorTheme={'background'} paddingTop={10}>
      <Block
        colorTheme="white"
        width={'25%'}
        alignItems={'center'}
        borderTopRightRadius={5}
        paddingVertical={10}
        shadow>
        <Text
          t18n="content:tab_header"
          preset="textBold14"
          colorTheme="base5"
        />
      </Block>
      <Block colorTheme="white" paddingTop={20} shadow>
        <Block
          width={'25%'}
          height={10}
          color={'white'}
          position={'absolute'}
          top={-5}
        />
        <StackView>
          <ItemContentView />
          <ItemContentView />
        </StackView>
      </Block>
    </Block>
  );
};
