import React from 'react';
import { ListRenderItemInfo, useWindowDimensions } from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';

import { ImageTypes } from '@assets/image';
import { sizeScale } from '@common';
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
        marginLeft={5}
        shadow>
        {/* <Spacer width={index === 0 ? 15 : 0} /> */}
        <LocalImage
          resizeMode="stretch"
          source={item}
          style={{
            height: ((width - 30) * 180) / 343,
            width: width - sizeScale(30),
            borderRadius: 8,
            overflow: 'hidden',
          }}
        />
        <Spacer width={index === colors.length - 1 ? 15 : 0} />
      </Block>
    );
  };

  // render
  return (
    <Block paddingLeft={10}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        autoplayLoopKeepAnimation
        index={0}
        // getItemLayout={}
        // ItemSeparatorComponent={renderSeparatorComponent}
        showPagination
        data={colors}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        PaginationComponent={CustomPagination}
      />
    </Block>
  );
};
