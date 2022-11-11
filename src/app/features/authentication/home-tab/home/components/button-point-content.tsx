import React from 'react';

import { Block, Button, Icon, Text } from '@components';
import { ColorDefault } from '@theme/color';

export const ButtonPointContent = () => {
  //func
  const handleGoToPointScreen = () => {
    //to do somthing
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
        <Block paddingHorizontal={32} alignItems="center">
          <Text
            preset="linkXXXSmall"
            t18n="home:KI_point_button"
            colorTheme="base5"
            textAlign={'center'}
          />
        </Block>
        <Block direction={'row'} alignItems={'center'}>
          <Icon icon="go" size={16} colorTheme="text_2" />
        </Block>
      </Button.Default>
    </Block>
  );
};
