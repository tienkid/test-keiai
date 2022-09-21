import React from 'react';

import { ErrorOutlineProps } from './type';

import { Block } from '../../../block';
import { Spacer } from '../../../spacer';
import { Text } from '../../../text';

export const ErrorOutline = ({ error }: ErrorOutlineProps) => {
  return error ? (
    <>
      <Spacer height={10} />
      <Block paddingLeft={16}>
        <Text text={error} preset={'linkMedium'} colorTheme={'statusError'} />
      </Block>
    </>
  ) : null;
};
