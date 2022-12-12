import React from 'react';
import { Linking, useWindowDimensions } from 'react-native';

import { Block, Button, LocalImage, Spacer, Text } from '@components';

import { KeiaiType } from '../contain';
import { KeiaiItemPropsType } from '../type';

export const KeiaiItem = ({ item }: KeiaiItemPropsType) => {
  //state
  const { width } = useWindowDimensions();
  // func
  const handlePressItem = () => {
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
    <Button.Default onPress={handlePressItem}>
      <Block direction={'row'}>
        <Block>
          <Block height={112} width={width / 2 - 27} padding={20} color="blue">
            <LocalImage source={item.image} resizeMode="contain" />
          </Block>
          <Block direction={'row'}>
            <Spacer width={9} />
            <Text text={item.title} preset="textNormal12" colorTheme="base5" />
          </Block>
          <Spacer height={25} />
        </Block>
      </Block>
    </Button.Default>
  );
};
