import React from 'react';
import { useWindowDimensions } from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';

import { Block, LocalImage, Spacer } from '@components';

import { CustomPagination } from './CustomPagination';

export const ListBanner = () => {
  // state
  const { width } = useWindowDimensions();
  const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

  //func
  //{ item }: ListRenderItemInfo<string>
  const renderItem = () => {
    return (
      <Block height={200} paddingHorizontal={15} middle justifyContent="center">
        <LocalImage
          resizeMode="stretch"
          source="banner"
          style={{
            width: width - 30,
            borderRadius: 8,
          }}
        />
      </Block>
    );
  };

  // render
  return (
    <Block>
      <Spacer height={12} />
      <SwiperFlatList
        // scrollEnabled={false}
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