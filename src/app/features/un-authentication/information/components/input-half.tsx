import React from 'react';

import { FormInput } from '@components';

import { styles } from '../style';
import { InputHaftProps } from '../type';

export const InputHaft = <T extends Record<string, any>>({
  containerStyle,
  ...props
}: InputHaftProps<T>) => {
  // state

  // render
  return (
    <FormInput
      {...props}
      containerStyle={[styles.inputHaftStyle, containerStyle]}
      // rightChildren={
      //   <Block
      //     justifyContent={'center'}
      //     position={'absolute'}
      //     left={width / 2 - sizeScale(12)}>
      //     <Text text={subText} preset="linkMedium" colorTheme="base4" />
      //   </Block>
      // }
    />
  );
};
