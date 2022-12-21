import React, { useCallback, useEffect } from 'react';

import { useController } from 'react-hook-form';

import { Block, Button, FormInput } from '@components';
import { useSelector } from '@hooks';
import { FormInformationProfileType } from '@model/information';
import { useRoute } from '@react-navigation/native';
import { useTheme } from '@theme';

import { CountryInputProps } from '../type';

export const FormSelectCity = ({
  name,
  labelT18n,
  placeholder_T18n,
  maxLength,
  rightChildren,
  requiredLabelT18n,
  handleShowCity,
}: CountryInputProps) => {
  // state
  const { field } = useController({
    name,
  });
  const { colors } = useTheme();

  // const { resetField } = useFormContext();
  const route = useRoute();
  // const dataCity = useSelector(x => x.app.dataWrapCity);
  const zipCode = useSelector(x => x.app.zipCode);
  const selected = useCallback(() => {
    if (zipCode?.city) {
      field.onChange(zipCode?.city[0].city_name);
    } else {
      field.onChange(undefined);
    }
  }, [zipCode?.city]);

  // effect
  useEffect(() => {
    selected();
  }, [selected]);
  useEffect(() => {
    if ((route?.params as Record<string, unknown>)?.item) {
      if ((route?.params as Record<string, unknown>)?.type === name) {
        field.onChange((route?.params as Record<string, any>)?.item?.city_name);
      }
    }
    // field.onBlur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);

  // render
  return (
    <Button.Default onPress={handleShowCity}>
      <Block block pointerEvents="none">
        <FormInput<FormInformationProfileType>
          name={name}
          labelT18n={labelT18n}
          placeholderT18n={placeholder_T18n}
          placeholderColor={colors.base5}
          maxLength={maxLength}
          colorLabel={'white'}
          isShowMsgError={false}
          rightChildren={rightChildren}
          requiredLabelT18n={requiredLabelT18n}
          disabled={true}
          defaultValue={field.value}
        />
      </Block>
    </Button.Default>
  );
};
