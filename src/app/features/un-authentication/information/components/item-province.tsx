import React, { useCallback } from 'react';

import { onCheckType } from '@common';
import { Block, Button, Text } from '@components';

import { CityType, ProvinceType } from '../type';

export type ItemProvinceProp = {
  item: ProvinceType | CityType;
  onPressItem: (item: ProvinceType | CityType) => void;
  type: string;
};
export const ItemProvince = ({ item, onPressItem, type }: ItemProvinceProp) => {
  // state
  // const handleToDetail = () => {
  //   navigate(CONTENT_STACK.CONTENT_DETAIL, { item });
  // };
  const onPress = useCallback(() => {
    if (onCheckType(onPressItem, 'function')) {
      onPressItem(item);
    }
  }, [item, onPressItem]);
  // render
  return (
    <Button.Default onPress={onPress}>
      <Block paddingHorizontal={20} paddingVertical={10}>
        <Text
          text={type === 'country' ? item?.pref_name : item?.city_name}
          preset="textBold14"
          colorTheme="base5"
        />
      </Block>
    </Button.Default>
  );
};
