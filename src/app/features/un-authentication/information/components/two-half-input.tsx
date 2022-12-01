import React, { useEffect, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

import { useForm } from 'react-hook-form';

import { MODAL_SELECTED_COUNTRY_TYPE, sizeScale } from '@common';
import { Block, FormInput } from '@components';
import { FormInformationProfileType } from '@model/information';
import { useRoute } from '@react-navigation/native';

import { TwoHalfInputProps } from '../type';

export const TwoHalfInput = ({
  disabled = false,
  labelT18n,
  name_1,
  name_2,
  maxLength_1,
  maxLength_2,
  rightChildren_1,
  rightChildren_2,
  requiredLabelT18n,
  placeholder_1_T18n,
  placeholder_2_T18n,
}: TwoHalfInputProps) => {
  // state
  const { width } = useWindowDimensions();
  const route = useRoute();
  const actualWidth = useMemo(() => sizeScale(190), []);
  const actualPercentWidth = useMemo(
    () => (actualWidth / width) * 100,
    [actualWidth, width],
  );
  const formMethod = useForm();
  useEffect(() => {
    if ((route?.params as Record<string, unknown>)?.item) {
      if (
        (route?.params as Record<string, unknown>)?.type ===
        MODAL_SELECTED_COUNTRY_TYPE.COUNTRY
      ) {
        formMethod.setValue(
          name_1,
          (route?.params as Record<string, unknown>)?.type,
        );
      }
      // if ((route?.params as Record<string, unknown>)?.fieldName === name) {
      //   field.onChange(
      //     ((route?.params as Record<string, unknown>)?.country as Country).id,
      //   );
      //   dispatch(
      //     appActions.onSetResidenceID(
      //       ((route?.params as Record<string, unknown>)?.country as Country).id,
      //     ),
      //   );
      //   field.onBlur();
      // }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);
  // render
  return (
    <Block>
      <Block block direction={'row'}>
        <Block
          block
          maxWidth={`${actualPercentWidth}%`}
          alignSelf={'flex-start'}>
          <FormInput<FormInformationProfileType>
            name={name_1}
            labelT18n={labelT18n}
            placeholderT18n={placeholder_1_T18n}
            maxLength={maxLength_1}
            // isShowMsgError={false}
            rightChildren={rightChildren_1}
            requiredLabelT18n={requiredLabelT18n}
            disabled={disabled}
          />
        </Block>
        <Block marginLeft={6} marginRight={6} />
        <Block
          block
          alignSelf={'flex-start'}
          maxWidth={`${actualPercentWidth}%`}
          marginTop={3}>
          <FormInput<FormInformationProfileType>
            name={name_2}
            maxLength={maxLength_2}
            label=" "
            placeholderT18n={placeholder_2_T18n}
            rightChildren={rightChildren_2}
            // isShowMsgError={false}
            disabled={disabled}
          />
        </Block>
      </Block>
    </Block>
  );
};
