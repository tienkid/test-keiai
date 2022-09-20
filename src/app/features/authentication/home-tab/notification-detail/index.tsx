import React from 'react';

import { Block, Header, Spacer, Text } from '@components';
import { useRoute } from '@react-navigation/native';

import { NotifyDetailProps } from './type';

export const NotifyDetail = () => {
  const route = useRoute<NotifyDetailProps['route']>();
  const { item } = route.params;
  console.log(item);
  // render
  return (
    <Block block colorTheme="background">
      <Header />
      <Block flex={1} paddingHorizontal={20} paddingTop={20}>
        <Block colorTheme="white" padding={20} borderRadius={5}>
          <Text preset="textBold16" text={item.text} colorTheme="base5" />
          <Spacer height={5} />
          <Text preset="textBold14" text={item.date} colorTheme="base4" />
          <Block paddingTop={20}>
            <Text preset="textBold16" text={item.content} colorTheme="base5" />
          </Block>
        </Block>
      </Block>
    </Block>
  );
};
