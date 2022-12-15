import React, { useCallback } from 'react';
import { Linking } from 'react-native';

import { Block, Button, LocalImage, Spacer, Text } from '@components';

import { DataKeiaiType } from '../contain';

interface MenuListProps {
  dataMenu: DataKeiaiType[];
}

export const KeiaiList = ({ dataMenu }: MenuListProps) => {
  // func
  const handlePressItem = (item: DataKeiaiType) => {
    if (item.link) {
      Linking.openURL(item.link);
    }

    // if (item.refer_link) {
    //   Linking.openURL(item.refer_link);
    // }
  };

  const renderItem = useCallback(
    (item: DataKeiaiType, index: number) => (
      <Block
        justifyContent={'space-between'}
        width="50%"
        key={index}
        alignItems={index % 2 === 1 ? 'flex-end' : 'flex-start'}>
        <Button.Default
          style={{ width: '97%' }}
          onPress={() => handlePressItem(item)}>
          <Block
            height={112}
            width={'100%'}
            borderRadius={5}
            overflow={index === 2 ? 'hidden' : 'visible'}
            shadow
            shadowConfig={{
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}
            color={index === 2 ? '#F03333' : '#FFFFFF'}
            padding={index === 0 || index === 1 ? 10 : 0}>
            <LocalImage source={item.image} resizeMode="contain" />
          </Block>
          <Block block paddingTop={5}>
            <Text
              preset="textNormal12"
              colorTheme="base5"
              numberOfLines={2}
              text={item.title}
              lineHeight={15}
            />
            {/* <Spacer height={8} />
            <Text preset="textNormal11" colorTheme="base4" numberOfLines={2}>
              {item.sign}
            </Text> */}
          </Block>
        </Button.Default>
        <Spacer height={index === 2 ? 0 : 25} />
      </Block>
      // <KeiaiItem item={item} key={index.toString()} />
    ),
    [],
  );

  // render
  return (
    <Block
      direction={'row'}
      flexWrap="wrap"
      alignSelf="center"
      paddingHorizontal={9}>
      {dataMenu.map((item, index) => renderItem(item, index))}
    </Block>
  );
};
