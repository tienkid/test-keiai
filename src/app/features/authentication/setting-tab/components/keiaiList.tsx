import React, { useCallback } from 'react';
import { Linking } from 'react-native';

import { Block, Button, LocalImage, Spacer, Text } from '@components';

import { MenuService } from '../type';

interface MenuListProps {
  dataMenu: MenuService[];
}

export const KeiaiList = ({ dataMenu }: MenuListProps) => {
  // func
  const handlePressItem = (item: MenuService) => {
    if (item.refer_link) {
      Linking.openURL(item.refer_link);
    }
  };

  const renderItem = useCallback(
    (item: MenuService, index: number) => (
      <Block
        justifyContent={'space-between'}
        width="50%"
        alignItems={index % 2 === 1 ? 'flex-end' : 'flex-start'}>
        <Button.Default
          style={{ width: '97%' }}
          onPress={() => handlePressItem(item)}>
          <Block height={112} width={'100%'} borderRadius={8} overflow="hidden">
            <LocalImage source={'item_recommend'} />
          </Block>
          <Block block paddingTop={5}>
            <Text
              preset="textNormal12"
              colorTheme="base5"
              numberOfLines={2}
              text={item.service_name}
              lineHeight={15}
            />
            {/* <Spacer height={8} />
            <Text preset="textNormal11" colorTheme="base4" numberOfLines={2}>
              {item.sign}
            </Text> */}
          </Block>
        </Button.Default>
        <Spacer height={15} />
      </Block>
    ),
    [],
  );

  // render
  return (
    <Block
      direction={'row'}
      flexWrap="wrap"
      alignSelf="center"
      paddingHorizontal={15}>
      {dataMenu.map((item, index) => renderItem(item, index))}
    </Block>
  );
};
