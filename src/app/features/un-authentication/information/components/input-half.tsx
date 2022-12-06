import React from 'react';

import { Block, FormInput, Spacer } from '@components';
import { LabelOutline } from '@components/text-field/components/out-line/label-outline';

import { InputHaftProps } from '../type';

export const InputHaft = <T extends Record<string, any>>({
  containerStyle,
  ...props
}: InputHaftProps<T>) => {
  // state

  // render
  return (
    <Block>
      <LabelOutline
        label={props.label}
        labelT18n={props.labelT18n}
        requiredLabel={props.requiredLabel}
        requiredLabelT18n={props.requiredLabelT18n}
        wrapLabelStyle={props.wrapLabelStyle}
      />
      <Block width={'50%'} direction="row">
        <Block block>
          <FormInput
            {...props}
            wrapLabelStyle={{ overflow: 'visible' }}
            containerStyle={[containerStyle]}
            labelT18n={undefined}
            // rightChildren={
            //   <Block
            //     justifyContent={'center'}
            //     position={'absolute'}
            //     left={width / 2 - sizeScale(12)}>
            //     <Text text={subText} preset="linkMedium" colorTheme="base4" />
            //   </Block>
            // }
          />
        </Block>
        <Spacer width={6} />
      </Block>
    </Block>
  );
};
