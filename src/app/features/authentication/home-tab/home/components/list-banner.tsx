import React from 'react';
import { Linking, ListRenderItemInfo, useWindowDimensions } from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';

import { ImageTypes } from '@assets/image';
import { sizeScale } from '@common';
import { Block, Button, LocalImage, Spacer } from '@components';
import { navigate } from '@navigation/navigation-service';
import { BOTTOM_TAB } from '@navigation/screen-types';

import { CustomPagination } from './CustomPagination';

export const ListBanner = () => {
  // state
  const { width } = useWindowDimensions();
  const colors: Array<ImageTypes> = ['banner', 'banner2', 'banner3'];
  const handlePressBanner = (index: number) => {
    switch (index) {
      case 0:
        Linking.openURL('https://www.iesapo.ki-group.jp/');
        break;
      case 1:
        navigate(BOTTOM_TAB.TAB_SETTING);
        break;
      case 2:
        Linking.openURL('https://hiraya.ai/products/hanare/');
        break;
      default:
        Linking.openURL('https://www.iesapo.ki-group.jp/');
        break;
    }
  };
  //func
  const renderItem = ({ item, index }: ListRenderItemInfo<ImageTypes>) => {
    return (
      <Button.Default onPress={() => handlePressBanner(index)}>
        <Block
          height={((width - 30) * 180) / 343}
          middle
          justifyContent="center"
          direction={'row'}
          shadow>
          {/* <Spacer width={index === 0 ? 15 : 0} /> */}
          <LocalImage
            resizeMode="stretch"
            source={item}
            style={{
              height: ((width - 30) * 180) / 343,
              width: width - sizeScale(25),
              borderRadius: 8,
              overflow: 'hidden',
              marginRight: index === colors.length - 1 ? 0 : 5,
            }}
          />
          <Spacer width={index === colors.length - 1 ? 15 : 0} />
        </Block>
      </Button.Default>
    );
  };

  // render
  return (
    <Block paddingLeft={15}>
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
