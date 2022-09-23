import React from 'react';

import { RowItemProps } from './type';

import { Block } from '../block';
import { Spacer } from '../spacer';
import { Text } from '../text';

export const RowItem = ({ title, value }: RowItemProps) => {
  if (!value) {
    return null;
  }

  return (
    <Block>
      <Text t18n={title} preset={'linkXXSmall'} colorTheme={'base1'} />
      <Spacer height={8} />
      <Text
        text={value}
        preset={'textMedium'}
        colorTheme={'base7'}
        fontWeight="700"
      />
      <Spacer height={16} />
    </Block>
  );
};
