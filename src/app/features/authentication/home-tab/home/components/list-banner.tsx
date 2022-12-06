import React from 'react';
import { ListRenderItemInfo, useWindowDimensions } from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';

import { ImageTypes } from '@assets/image';
import { Block, LocalImage, Spacer } from '@components';

import { CustomPagination } from './CustomPagination';

export const ListBanner = () => {
  // state
  const { width } = useWindowDimensions();
  const colors: Array<ImageTypes> = ['banner', 'banner2', 'banner3'];

  //func
  const renderItem = ({ item, index }: ListRenderItemInfo<ImageTypes>) => {
    return (
      <Block
        height={((width - 30) * 180) / 343}
        middle
        justifyContent="center"
        direction={'row'}
        shadow>
        <Spacer width={index === 0 ? 15 : 0} />
        <LocalImage
          resizeMode="stretch"
          source={item}
          style={{
            height: ((width - 30) * 180) / 343,
            width: width - 30,
            borderRadius: 8,
            overflow: 'hidden',
          }}
        />
        <Spacer width={index === colors.length - 1 ? 15 : 0} />
      </Block>
    );
  };

  const renderSeparatorComponent = () => {
    return <Spacer width={5} />;
  };

  // render
  return (
    <Block>
      <SwiperFlatList
        style={{ paddingVertical: 12 }}
        autoplay
        autoplayDelay={3}
        autoplayLoop
        index={0}
        ItemSeparatorComponent={renderSeparatorComponent}
        showPagination
        data={colors}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        PaginationComponent={CustomPagination}
      />
    </Block>
  );
};
