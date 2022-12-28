import React, { useCallback } from 'react';

import { Block, Spacer, Text } from '@components';
import { DataService } from '@features/authentication/setting-tab/type';
import { I18nKeys } from '@utils/i18n/locales';

import { ItemServiceNews } from './item-service';

export type ListServiceProps = {
  title?: I18nKeys;
  data: DataService[];
};
export const ListServiceNews = ({ title, data }: ListServiceProps) => {
  // state

  //func
  const renderItemService = useCallback((item: DataService, index: number) => {
    return <ItemServiceNews key={index} item={item} index={index} />;
  }, []);

  // render
  return (
    <Block paddingHorizontal={15} paddingTop={20} block>
      <Block
        direction={'row'}
        justifyContent="space-between"
        alignItems="center">
        <Text
          preset="textNormal15"
          colorTheme="base5"
          t18n={title ?? 'home:text_services'}
        />
        {/* <Block direction={'row'} alignItems="center">
          <Text
            preset="linkXXSmall"
            colorTheme="text_2"
            t18n="home:text_see_more"
          />
          <Icon icon="go" colorTheme="text_2" size={15} />
        </Block> */}
      </Block>
      <Spacer height={5} />
      {/* <Text
        preset="textNormal12"
        colorTheme="base5"
        lineHeight={18}
        t18n={title ?? 'home:text_services_content'}
      />
      <Spacer height={25} /> */}
      <Block>{data ? data.map(renderItemService) : null}</Block>
      <Spacer height={20} />
    </Block>
  );
};
