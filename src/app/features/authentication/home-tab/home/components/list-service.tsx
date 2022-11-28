import React, { useCallback } from 'react';

import { Block, Spacer, Text } from '@components';
import { DataService } from '@features/authentication/setting-tab/type';
import { I18nKeys } from '@utils/i18n/locales';

import { ItemService } from './item-service';

export type ListServiceProps = {
  title?: I18nKeys;
  data: DataService[];
};
export const ListService = ({ title, data }: ListServiceProps) => {
  // state

  //func
  const renderItemService = useCallback((item: DataService, index: number) => {
    return <ItemService key={index.toString()} item={item} index={index} />;
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
        {/*   */}
      </Block>
      <Spacer height={25} />
      <Block direction="row" flexWrap="wrap">
        {data ? data.map(renderItemService) : null}
      </Block>
    </Block>
  );
};
