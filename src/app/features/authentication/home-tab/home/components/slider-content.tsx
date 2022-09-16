import React from 'react';
import { ScrollView } from 'react-native';

import { Block } from '@components';

import { ItemContent } from './item-content';

export const SliderContent = () => {
  // state
  // render
  return (
    <Block paddingVertical={20} colorTheme={'card'} shadow>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ItemContent />
        <ItemContent />
        <ItemContent />
      </ScrollView>
    </Block>
  );
};
