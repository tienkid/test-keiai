import React from 'react';

import { Block, Button, Text } from '@components';
import { useTheme } from '@theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ButtonInfo = () => {
  // state
  const { colors } = useTheme();
  // render
  return (
    <Block
      shadow
      height={60}
      colorTheme={'white'}
      marginTop={20}
      marginBottom={20}>
      <Button.Default
        style={{
          flex: 1,
          backgroundColor: colors.white,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 40,
          justifyContent: 'space-between',
        }}>
        <Text
          preset="textBold16"
          colorTheme="base5"
          textAlign={'center'}
          t18n={'home:text_info'}
        />
        <Icon name="chevron-right" size={25} color={colors.arrow} />
      </Button.Default>
    </Block>
  );
};
