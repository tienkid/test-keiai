import React from 'react';

import { Block, Button, Spacer, Text } from '@components';
import { navigate } from '@navigation/navigation-service';
import { HOME_STACK } from '@navigation/screen-types';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ItemNotifyProps } from '../type';

// import { ItemContentProps } from '../type';

export const ItemNotify = ({ item }: ItemNotifyProps) => {
  // state
  const { colors } = useTheme();
  const handleToDetail = () => {
    navigate(HOME_STACK.NOTIFY_DETAIL, { item });
  };
  // render
  return (
    <Block paddingVertical={10}>
      <Button.Default
        onPress={handleToDetail}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Block>
          <Text preset="textBold16" text={item.text} colorTheme="base5" />
          <Spacer height={5} />
          <Text preset="textBold14" text={item.date} colorTheme="base4" />
        </Block>
        <Icon name="navigate-next" size={25} color={colors.arrow} />
      </Button.Default>
    </Block>
  );
};
