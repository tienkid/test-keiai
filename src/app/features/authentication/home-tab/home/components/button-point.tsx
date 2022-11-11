import React from 'react';

import { Block, Button, Spacer, Text } from '@components';
import { useSelector } from '@hooks';
import { navigate } from '@navigation/navigation-service';
import { BOTTOM_TAB } from '@navigation/screen-types';
import { ColorDefault } from '@theme/color';

export const ButtonPoint = () => {
  // state
  const point = useSelector(x => x.app.point);

  //func
  const handleGoToPointScreen = () => {
    navigate(BOTTOM_TAB.TAB_POINT);
  };

  // render
  return (
    <Block middle height={80} paddingVertical={15} paddingHorizontal={70}>
      <Button.Default
        buttonColorTheme="white"
        onPress={handleGoToPointScreen}
        style={{
          flex: 1,
          width: '100%',
          borderRadius: 80,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: ColorDefault.border,
        }}>
        <Text preset="textNormal" t18n="home:text_point" colorTheme="base5" />
        <Block direction={'row'} alignItems={'center'}>
          <Block
            height={20}
            width={20}
            borderRadius={10}
            colorTheme="primary"
            middle
            justifyContent="center">
            <Text preset="textBold14" colorTheme="white" text="K" />
          </Block>
          <Spacer width={8} />
          <Text preset="textNormal" colorTheme="base5">
            {point}P
          </Text>
        </Block>
      </Button.Default>
    </Block>
  );
};
