import React from 'react';

import { Block, Button, Text } from '@components';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ButtonPoint = () => {
  // state
  // render
  return (
    <Block middle height={80} padding={15}>
      <Button.Default
        buttonColorTheme="primary"
        style={{
          flex: 1,
          width: '100%',
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          justifyContent: 'space-between',
        }}>
        <Text preset="textNormal" t18n="home:text_point" />
        <Block direction={'row'} alignItems={'center'} justifyContent="center">
          <Text preset="textNormal">0 P</Text>
          <Icon name="chevron-right" size={25} color={'#FFFFFF'} />
        </Block>
      </Button.Default>
    </Block>
  );
};
