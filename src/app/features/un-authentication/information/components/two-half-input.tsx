import React, { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

import { sizeScale } from '@common';
import { Block, FormInput } from '@components';

import { TwoHalfInputProps } from '../type';

export const TwoHalfInput = ({
  disabled = false,
  labelT18n,
  rightChildren_1,
  rightChildren_2,
  requiredLabelT18n,
  placeholder_1_T18n,
  placeholder_2_T18n,
}: TwoHalfInputProps) => {
  // state
  const { width } = useWindowDimensions();

  const actualWidth = useMemo(() => sizeScale(190), []);
  const actualPercentWidth = useMemo(
    () => (actualWidth / width) * 100,
    [actualWidth, width],
  );

  // render
  return (
    <Block>
      <Block block direction={'row'}>
        <Block
          block
          maxWidth={`${actualPercentWidth}%`}
          alignSelf={'flex-start'}>
          <FormInput
            name="blood_pressure_min"
            labelT18n={labelT18n}
            keyboardType="numeric"
            placeholderT18n={placeholder_1_T18n}
            isShowMsgError={false}
            rightChildren={rightChildren_1}
            containerStyle={{ borderRadius: 8 }}
            inputStyle={{ paddingVertical: sizeScale(12) }}
            requiredLabelT18n={requiredLabelT18n}
            disabled={disabled}
            wrapLabelStyle={{ paddingLeft: 0 }}
          />
        </Block>
        <Block marginLeft={6} marginRight={6} />
        <Block
          block
          alignSelf={'flex-start'}
          maxWidth={`${actualPercentWidth}%`}>
          <FormInput
            name="blood_pressure_max"
            label=" "
            keyboardType="numeric"
            placeholderT18n={placeholder_2_T18n}
            rightChildren={rightChildren_2}
            isShowMsgError={false}
            containerStyle={{ borderRadius: 8 }}
            inputStyle={{ paddingVertical: sizeScale(12) }}
            disabled={disabled}
            wrapLabelStyle={{ paddingLeft: 0 }}
          />
        </Block>
      </Block>
      {/* <Text text={msgError} preset="body3" colorTheme={'statusError'} /> */}
    </Block>
  );
};
