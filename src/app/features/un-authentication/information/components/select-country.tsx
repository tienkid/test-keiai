import React, { useEffect } from 'react';

import { useController } from 'react-hook-form';

import { Block, FormInput } from '@components';
import { FormInformationProfileType } from '@model/information';
import { useRoute } from '@react-navigation/native';

import { CountryInputProps } from '../type';

export const FormSelectCountry = ({
  name,
  actualPercentWidth,
  labelT18n,
  placeholder_T18n,
  maxLength,
  rightChildren,
  requiredLabelT18n,
}: CountryInputProps) => {
  // state
  const {
    field,
    // fieldState: { error },
  } = useController({
    name,
  });
  const route = useRoute();
  useEffect(() => {
    if ((route?.params as Record<string, unknown>)?.item) {
      field.onChange((route?.params as Record<string, any>)?.item?.pref_name);
    }
    // field.onBlur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);

  // effect

  // render
  return (
    <>
      <Block block maxWidth={`${actualPercentWidth}%`} alignSelf={'flex-start'}>
        <FormInput<FormInformationProfileType>
          name={name}
          labelT18n={labelT18n}
          placeholderT18n={placeholder_T18n}
          maxLength={maxLength}
          // isShowMsgError={false}
          rightChildren={rightChildren}
          requiredLabelT18n={requiredLabelT18n}
          disabled={true}
        />
      </Block>
    </>
  );
};
