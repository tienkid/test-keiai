import React from 'react';

import { generateTags } from '@common';
import { Block, Spacer, Text } from '@components';
import { Item } from '@model/content';
import moment from 'moment';

export const ItemContentDetail = ({ item }: { item: Item }) => {
  // state

  // render
  return (
    <Block middle>
      {/* <Block width={345} height={228} borderRadius={10}>
        {item?.thumb ? (
          <Image source={item.thumb} resizeMode="cover" />
        ) : (
          <LocalImage source={'image_thumbnail'} resizeMode="cover" />
        )}
      </Block> */}
      <Block width={'100%'} paddingHorizontal={20}>
        <Spacer height={8} />
        <Text text={item?.title} preset="textBold14" colorTheme="base5" />
        {item.tags.length > 0 && (
          <Block paddingTop={5}>
            <Text
              text={generateTags(item?.tags)}
              colorTheme="base6"
              preset="textNormal11"
            />
          </Block>
        )}

        <Spacer height={5} />
        <Text
          text={moment(item.startTime).format('YYYY/MM/DD')}
          colorTheme="base6"
          preset="textNormal11"
        />
        <Spacer height={16} />
      </Block>
    </Block>
  );
};
