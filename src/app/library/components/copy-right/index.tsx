import React from 'react';

import { Spacer, Text } from '@components';
import { Block } from '@components/block';

import { RowTerm } from './row-term';

export const CopyRight = ({
  isJustCopyRight = false,
}: {
  isJustCopyRight?: boolean;
}) => {
  return (
    <Block alignItems={'center'} paddingVertical={30} colorTheme={'background'}>
      {!isJustCopyRight && (
        <React.Fragment>
          <RowTerm />
          <Spacer height={30} />
        </React.Fragment>
      )}
      <Text
        t18n={'register:copy_right'}
        preset="textNormal12"
        colorTheme="base5"
      />
    </Block>
  );
};
