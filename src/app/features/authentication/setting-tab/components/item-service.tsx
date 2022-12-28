import React from 'react';

import { Block, Button, LocalImage, Spacer, Text } from '@components';
import { DataService } from '@features/authentication/setting-tab/type';
import { navigate } from '@navigation/navigation-service';
import { SETTING_STACK } from '@navigation/screen-types';
// import { navigate } from '@navigation/navigation-service';
// import { SETTING_STACK } from '@navigation/screen-types';

export type ItemServiceProps = {
  item: DataService;
  index: number;
};
const ITEM_HEIGHT = 66.67;
const ITEM_WIDTH = 100;
export const ItemServiceNews = ({ item }: ItemServiceProps) => {
  //state

  const handleGoToDetail = () => {
    navigate(SETTING_STACK.SERVICE_DETAIL, {});
  };
  // render
  return (
    <Button.Default onPress={handleGoToDetail}>
      <Spacer height={20} />
      <Block direction={'row'}>
        <Block
          height={ITEM_HEIGHT}
          width={ITEM_WIDTH}
          borderRadius={5}
          overflow="hidden">
          <LocalImage source={item.image} />
        </Block>
        <Block block paddingLeft={15}>
          <Text
            preset="textNormal14"
            colorTheme="base5"
            numberOfLines={2}
            text={item.content}
            lineHeight={18}
          />
          <Spacer height={8} />
          <Text preset="textNormal11" colorTheme="base4" numberOfLines={2}>
            {item.des}
          </Text>
        </Block>
      </Block>
    </Button.Default>
  );
};
