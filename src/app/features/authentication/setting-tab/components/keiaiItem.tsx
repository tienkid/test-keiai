import React from 'react';
import { Linking } from 'react-native';

import { Block, Button, LocalImage, Spacer, Text } from '@components';

import { KeiaiType } from '../contain';
import { KeiaiItemPropsType } from '../type';

export const KeiaiItem = ({ item }: KeiaiItemPropsType) => {
  // func
  const handlePressItem = () => {
    console.log(item.type);
    switch (item.type) {
      case KeiaiType.IESAPO:
        Linking.openURL('https://www.iesapo.ki-group.jp/');
        break;
      case KeiaiType.INTERNET:
        Linking.openURL(
          'https://owners.ki-group.jp/app/assets/pdf/keiai-internet2.pdf',
        );
        break;
      case KeiaiType.DENKI:
        Linking.openURL('https://ki-group.co.jp/owners/anshin_support/');
        break;
      default:
        break;
    }
  };

  // render
  return (
    <Button.Default onPress={handlePressItem} style={{ marginBottom: 25 }}>
      <Block height={112} width={169}>
        <LocalImage source={item.image} resizeMode="cover" />
      </Block>
      <Spacer height={5} />
      <Text text={item.title} preset="textNormal12" colorTheme="base5" />
    </Button.Default>
  );
};
