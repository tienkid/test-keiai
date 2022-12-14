import React, { memo } from 'react';
import { SafeAreaView, View } from 'react-native';

import isEqual from 'react-fast-compare';

import { Block } from '@components';

const CarouselAdvanceComponent = () => {
  // render

  return (
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <Block color={'#FFF'} block middle>
        <SafeAreaView>
          {/* <Animated.FlatList
            data={colors}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollx } } }],
              { useNativeDriver: true },
            )}
            // horizontal
            renderItem={renderItem}
            keyExtractor={item => item}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          /> */}
        </SafeAreaView>
      </Block>
    </View>
  );
};

export const CarouselAdvance = memo(CarouselAdvanceComponent, isEqual);
