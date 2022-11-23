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
      <Text t18n={title} preset={'linkXXSmall'} colorTheme={'base5'} />
      <Spacer height={5} />
      <Text
        text={value}
        preset={'textMedium'}
        colorTheme={'base5'}
        fontWeight="400"
      />
      <Spacer height={15} />
    </Block>
  );
};
