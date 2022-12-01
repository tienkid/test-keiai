import React from 'react';

import { Block, Button, LocalImage, Spacer, Text } from '@components';
import { DataService } from '@features/authentication/setting-tab/type';
// import { navigate } from '@navigation/navigation-service';
// import { SETTING_STACK } from '@navigation/screen-types';

export type ItemServiceProps = {
  item: DataService;
  index: number;
};
export const ItemService = ({ item, index }: ItemServiceProps) => {
  //state
  const handleGoToDetail = () => {
    // navigate(SETTING_STACK.SERVICE_DETAIL, {});
  };
  // render
  return (
    <Block
      justifyContent={'space-between'}
      width="50%"
      alignItems={index % 2 === 1 ? 'flex-end' : 'flex-start'}>
      <Button.Default style={{ width: '97%' }} onPress={handleGoToDetail}>
        <Block height={112} width={'100%'} borderRadius={8} overflow="hidden">
          <LocalImage source={'item_recommend'} />
        </Block>
        <Block block paddingTop={5}>
          <Text
            preset="textNormal12"
            colorTheme="base5"
            numberOfLines={2}
            text={item.text}
            lineHeight={15}
          />
          {/* <Spacer height={8} />
            <Text preset="textNormal11" colorTheme="base4" numberOfLines={2}>
              {item.sign}
            </Text> */}
        </Block>
      </Button.Default>
      <Spacer height={25} />
    </Block>
  );
};
