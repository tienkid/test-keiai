import React, { useCallback } from 'react';
import { Linking } from 'react-native';

import { isIos } from '@common';
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
        zIndex={999}
        justifyContent={'space-between'}
        width="50%"
        shadow
        shadowConfig={{
          shadowOpacity: index === 2 ? 1 : 0.4,
          shadowRadius: index === 2 ? 6 : 3.4,
        }}
        key={index}
        alignItems={index % 2 === 1 ? 'flex-end' : 'flex-start'}>
        <Button.Default
          style={{ width: '97%' }}
          onPress={() => handlePressItem(item)}>
          <Block
            shadow={!isIos}
            shadowConfig={{
              shadowColor: '#000000',
              shadowOpacity: 1,
              shadowRadius: 5,
              elevation: index === 2 ? 20 : 10,
            }}
            zIndex={1}
            height={112}
            width={'100%'}
            borderRadius={5}
            overflow={index === 2 ? 'hidden' : 'visible'}
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
              lineHeight={18}
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
