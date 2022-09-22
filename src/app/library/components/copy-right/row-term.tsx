import React from 'react';

import { Block } from '@components/block';

import { ItemRow } from './item-row';

export const RowTerm = () => {
  return (
    <Block
      direction={'row'}
      justifyContent={'space-between'}
      paddingHorizontal={50}
      width="100%">
      <ItemRow t18n={'register:term'} />
      <ItemRow t18n={'register:policy'} />
    </Block>
  );
};
