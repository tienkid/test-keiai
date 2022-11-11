import React from 'react';
import { ListRenderItemInfo, useWindowDimensions } from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';

import { Block, LocalImage, Spacer } from '@components';

import { CustomPagination } from './CustomPagination';

export const ListBanner = () => {
  // state
  const { width } = useWindowDimensions();
  const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

  //func
  const renderItem = ({ item }: ListRenderItemInfo<string>) => {
    console.log(item);
    return (
      <Block
        height={200}
        paddingHorizontal={16}
        paddingVertical={8}
        middle
        shadow
        justifyContent="center">
        <LocalImage
          resizeMode="stretch"
          source="banner"
          style={{
            width: width - 32,
            borderRadius: 8,
          }}
        />
      </Block>
    );
  };

  // render
  return (
    <Block>
      <Spacer height={8} />
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        index={0}
        showPagination
        data={colors}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        PaginationComponent={CustomPagination}
      />
    </Block>
  );
};
