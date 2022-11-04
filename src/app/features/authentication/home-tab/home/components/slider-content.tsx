import React from 'react';
import { ScrollView } from 'react-native';

import { Block } from '@components';
import { useSelector } from '@hooks';
import { Item } from '@model/content';

import { ItemContent } from './item-content';

export const SliderContent = () => {
  //state
  const contents = useSelector(x => x.app.contents);

  //func
  const renderItemContent = (item: Item) => {
    return <ItemContent item={item} key={item.id} />;
  };

  // render
  return (
    <Block paddingVertical={20} colorTheme={'card'} shadow>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {contents?.items.slice(0, 9).map(renderItemContent)}
      </ScrollView>
    </Block>
  );
};
