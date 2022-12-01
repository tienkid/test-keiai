import React from 'react';

import { Block, Divider, LocalImage, Spacer, Text } from '@components';

import { ButtonPointContent } from './button-point-content';

export const PointContent = () => {
  // state

  //func

  // render
  return (
    <Block
      paddingHorizontal={15}
      paddingTop={20}
      paddingBottom={20}
      middle
      block>
      <Text
        t18n="home:what_KI_point"
        preset="linkLarge"
        colorTheme="base5"
        fontWeight={'bold'}
      />
      <Divider height={0.5} colorTheme="primary" />
      <Spacer height={20} />
      <Block block width={'100%'} height={128}>
        <LocalImage source="logo_point" resizeMode="contain" />
      </Block>
      <Spacer height={15} />
      <Text
        t18n="home:KI_point_content"
        preset="textNormal"
        lineHeight={15}
        colorTheme="base5"
        textAlign={'center'}
      />
      <Spacer height={16} />
      <Block direction={'row'} middle>
        <LocalImage
          source="item_recommend"
          style={{ height: 100, width: 100, borderRadius: 8 }}
        />
        <Spacer width={8} />
        <LocalImage
          source="item_recommend"
          style={{ height: 100, width: 100, borderRadius: 8 }}
        />
        <Spacer width={8} />
        <LocalImage
          source="item_recommend"
          style={{ height: 100, width: 100, borderRadius: 8 }}
        />
      </Block>
      <Spacer height={8} />
      <Text t18n="home:KI_point_note" preset="linkXSmall" colorTheme="base5" />
      <Spacer height={35} />
      <ButtonPointContent />
    </Block>
  );
};