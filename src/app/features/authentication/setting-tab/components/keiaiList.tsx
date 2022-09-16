import React, { useCallback } from 'react';

import { Block } from '@components';

import { KeiaiItem } from './keiaiItem';

import { DATA_KEIAI, DataKeiaiType } from '../contain';

export const KeiaiList = () => {
  // func
  const renderItem = useCallback(
    (item: Array<DataKeiaiType>, index: number) => (
      <React.Fragment key={`${index}`}>
        <Block>
          {item.map(element => (
            <React.Fragment key={element.type}>
              <KeiaiItem item={element} />
            </React.Fragment>
          ))}
        </Block>
      </React.Fragment>
    ),
    [],
  );

  // render
  return (
    <Block direction={'row'} alignSelf="center">
      {DATA_KEIAI.map((item, index) => renderItem(item, index))}
    </Block>
  );
};
