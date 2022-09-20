import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { Block, Header, Spacer, Text } from '@components';

import { NotifyDetailProps } from './type';

const NotificationDetail = ({ route: { params } }: NotifyDetailProps) => {
  const { item } = params;
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

export const NotifyDetail = memo(NotificationDetail, isEqual);
