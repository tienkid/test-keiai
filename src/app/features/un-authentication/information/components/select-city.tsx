import React, { useCallback, useEffect } from 'react';

import { useController, useFormContext } from 'react-hook-form';

import { dispatch } from '@common';
import { Block, FormInput } from '@components';
import { useSelector } from '@hooks';
import { FormInformationProfileType } from '@model/information';
import { useRoute } from '@react-navigation/native';
import { appActions } from '@redux-slice';

import { CityType, CountryInputProps } from '../type';

export const FormSelectCity = ({
  name,
  actualPercentWidth,
  labelT18n,
  placeholder_T18n,
  maxLength,
  rightChildren,
  requiredLabelT18n,
}: CountryInputProps) => {
  // state
  const { field } = useController({
    name,
  });
  const { resetField } = useFormContext();
  const route = useRoute();
  const dataCity = useSelector(x => x.app.dataWrapCity);
  const zipCode = useSelector(x => x.app.zipCode);
  const selected = useCallback(() => {
    const choice = dataCity.find(x => {
      if (x.city_code.toString() === zipCode) {
        return x;
      }
    });
    if (choice) {
      field.onChange(choice.city_name);
      dispatch(appActions.setDataChoice(choice));
    } else {
      resetField(name);
      dispatch(appActions.setDataChoice({} as CityType));
    }
  }, [dataCity, zipCode]);

  useEffect(() => {
    selected();
  }, [selected]);
  useEffect(() => {
    if ((route?.params as Record<string, unknown>)?.item) {
      field.onChange((route?.params as Record<string, any>)?.item?.city_name);
    }
    // field.onBlur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);

  // effect

  // render
  return (
    <Block block maxWidth={`${actualPercentWidth}%`} alignSelf={'flex-start'}>
      <FormInput<FormInformationProfileType>
        name={name}
        labelT18n={labelT18n}
        placeholder="sdsdfsd"
        placeholderT18n={placeholder_T18n}
        maxLength={maxLength}
        colorLabel={'white'}
        isShowMsgError={false}
        rightChildren={rightChildren}
        requiredLabelT18n={requiredLabelT18n}
        disabled={true}
        defaultValue={field.value}
      />
    </Block>
  );
};
