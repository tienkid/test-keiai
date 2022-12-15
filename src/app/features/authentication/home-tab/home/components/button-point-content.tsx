import React from 'react';

import { Block, Button, Icon, Text } from '@components';
import { navigate } from '@navigation/navigation-service';
import { BOTTOM_TAB } from '@navigation/screen-types';
import { ColorDefault } from '@theme/color';

export const ButtonPointContent = () => {
  //func
  const handleGoToPointScreen = () => {
    //to do somthing
    navigate(BOTTOM_TAB.TAB_POINT);
  };

  // render
  return (
    <Block
      middle
      width={240}
      height={50}
      // paddingVertical={15}
      // paddingHorizontal={70}
    >
      <Button.Default
        buttonColorTheme="white"
        onPress={handleGoToPointScreen}
        style={{
          flex: 1,
          height: 36,
          width: '100%',
          borderRadius: 80,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          paddingHorizontal: 20,
          borderColor: ColorDefault.border,
          shadowColor: '#00000090',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <Block alignItems="center" justifyContent="center" flex={1}>
          <Text
            preset="textNormal12"
            t18n="home:KI_point_button"
            lineHeight={12}
            colorTheme="base5"
            textAlign={'center'}
          />
          <Text
            preset="textNormal12"
            t18n="home:KI_point_button_2"
            colorTheme="base5"
            lineHeight={12}
            textAlign={'center'}
          />
        </Block>
        <Block justifyContent={'center'} position="absolute" right={15}>
          <Icon icon="go" size={15} colorTheme="text_2" />
        </Block>
      </Button.Default>
    </Block>
  );
};
