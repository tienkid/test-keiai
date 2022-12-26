import React, { useState } from 'react';
import {
  Animated,
  Linking,
  ListRenderItemInfo,
  useWindowDimensions,
  View,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { ImageTypes } from '@assets/image';
import { sizeScale } from '@common';
import { Block, Button, LocalImage } from '@components';
import { ColorDefault } from '@theme/color';

export const ListBanner = () => {
  // state

  const { width } = useWindowDimensions();
  const colors: Array<ImageTypes> = ['banner', 'banner3'];
  const carousel = React.useRef<any>(null);
  const [Index, setIndex] = useState(0);

  const handlePressBanner = (index: number) => {
    switch (index) {
      case 0:
        Linking.openURL('https://www.iesapo.ki-group.jp/');
        break;
      // case 1:
      //   navigate(BOTTOM_TAB.TAB_SETTING);
      //   break;
      case 1:
        Linking.openURL('https://hiraya.ai/products/hanare/');
        break;
      default:
        // Linking.openURL('https://www.iesapo.ki-group.jp/');
        break;
    }
  };

  const Indicator = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        {colors.map((item, index) => {
          return (
            <Animated.View
              key={index}
              style={{
                height: 6,
                width: 6,
                borderRadius: 5,
                backgroundColor:
                  index === Index ? ColorDefault.primary : ColorDefault.base4,
                marginHorizontal: 5,
              }}
            />
          );
        })}
      </View>
    );
  };
  //func
  const renderItem = ({ item, index }: ListRenderItemInfo<ImageTypes>) => {
    return (
      <Block borderRadius={8} overflow="hidden">
        <Block shadow>
          <Button.Default onPress={() => handlePressBanner(index)}>
            <LocalImage
              resizeMode="stretch"
              source={item}
              style={{
                height: ((width - 30) * 180) / 343,
                width: width - sizeScale(30),
                borderRadius: 8,
              }}
            />
          </Button.Default>
        </Block>
      </Block>
    );
  };

  // render
  return (
    <Block middle>
      <Carousel
        autoplay
        ref={carousel}
        // loop
        // autoplayDelay={500}
        // autoplayInterval={500}
        layout={'default'}
        autoplayInterval={2000}
        data={colors}
        sliderWidth={width}
        itemWidth={width - sizeScale(25)}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        renderItem={renderItem}
        onSnapToItem={slideIndex => {
          setIndex(slideIndex);
          if (slideIndex === 1) {
            setTimeout(() => {
              carousel?.current?.snapToItem(0);
            }, 2000);
          }
        }}
      />
      <Block flex={1} paddingTop={8}>
        <Indicator />
      </Block>
    </Block>
  );
};
