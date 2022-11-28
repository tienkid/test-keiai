import React from 'react';

import { Block, Button, LocalImage, Spacer, Text } from '@components';
import { DataService } from '@features/authentication/setting-tab/type';
// import { navigate } from '@navigation/navigation-service';
// import { SETTING_STACK } from '@navigation/screen-types';

export type ItemServiceProps = {
  item: DataService;
  index: number;
};
export const ItemService = ({ item }: ItemServiceProps) => {
  //state
  const handleGoToDetail = () => {
    // navigate(SETTING_STACK.SERVICE_DETAIL, {});
  };
  // render
  return (
    <Button.Default style={{ width: '100%' }} onPress={handleGoToDetail}>
      <Block direction={'row'}>
        <Block height={66} width={100} borderRadius={8} overflow="hidden">
          <LocalImage source={'item_recommend'} />
        </Block>
        <Block block paddingLeft={15}>
          <Text preset="textNormal14" colorTheme="base5" numberOfLines={2}>
            {item.text}
          </Text>
          <Spacer height={8} />
          <Text preset="textNormal11" colorTheme="base4" numberOfLines={2}>
            {item.sign}
          </Text>
        </Block>
      </Block>
      <Spacer height={20} />
    </Button.Default>
  );
};
