import React, { useCallback, useEffect } from 'react';

import { useController } from 'react-hook-form';

import { Block, FormInput } from '@components';
import { useSelector } from '@hooks';
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
  // const dataProvince = useSelector(x => x.app.dataProvince);
  const zipCode = useSelector(x => x.app.zipCode);
  const selected = useCallback(() => {
    if (zipCode.city) {
      field.onChange(zipCode.pref_name);
    } else {
      field.onChange(undefined);
    }
  }, [zipCode.city, zipCode.pref_name]);
  useEffect(() => {
    selected();
  }, [selected]);
  useEffect(() => {
    if ((route?.params as Record<string, unknown>)?.item) {
      if ((route?.params as Record<string, unknown>)?.type === name) {
        field.onChange((route?.params as Record<string, any>)?.item?.pref_name);
      }
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
          isShowMsgError={false}
          rightChildren={rightChildren}
          requiredLabelT18n={requiredLabelT18n}
          disabled={true}
        />
      </Block>
    </>
  );
};
