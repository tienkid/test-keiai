import React from 'react';

import { sizeScale } from '@common';
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
      <Spacer height={5} />
      <Divider height={0.5} colorTheme="primary" />
      <Spacer height={20} />
      <Block block width={'100%'} height={128}>
        <LocalImage source="logo_point" resizeMode="contain" />
      </Block>
      <Spacer height={15} />
      <Text
        t18n="home:KI_point_content"
        preset="textNormal"
        colorTheme="base5"
        textAlign={'center'}
      />
      <Spacer height={16} />
      <Block direction={'row'} middle>
        <Block height={100} width={316}>
          <LocalImage source="home_point" />
        </Block>
        {/* <Spacer width={8} />
        <LocalImage
          source="item_recommend"
          style={{ height: 100, width: 100, borderRadius: 8 }}
        />
        <Spacer width={8} />
        <LocalImage
          source="item_recommend"
          style={{ height: 100, width: 100, borderRadius: 8 }}
        /> */}
      </Block>
      <Spacer height={8} />
      <Block
        direction={'row'}
        alignItems="flex-end"
        justifyContent={'flex-end'}>
        <Text
          t18n="common:indispensable"
          fontSize={sizeScale(14)}
          colorTheme="base5"
          lineHeight={15}
        />
        <Text
          t18n="home:KI_point_note"
          preset="linkXSmall"
          colorTheme="base5"
          lineHeight={15}
        />
      </Block>
      <Spacer height={35} />
      <ButtonPointContent />
    </Block>
  );
};
