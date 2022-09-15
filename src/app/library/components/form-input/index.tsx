/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { useController, useFormContext } from 'react-hook-form';

import { onCheckType } from '@common';
import { useMessageYupTranslation } from '@hooks';

import { InputProps } from './type';

import { TextField } from '..';

export const FormInput = <T extends Record<string, any>>({
  name,
  labelT18n,
  nameTrigger,
  placeholderT18n,
  rightChildren,
  onSubmit,
  defaultValue = '',
  isShowMsgError = true,
  ...rest
}: InputProps<T>) => {
  // state
  const { trigger, getValues } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name: name as string,
    defaultValue,
  });
  const msgError = useMessageYupTranslation(error?.message);

  // render
  return (
    <TextField
      ref={field.ref}
      value={
        onCheckType(field.value, 'string') ? field.value : field.value?.value
      }
      error={msgError}
      isShowMsgError={isShowMsgError}
      trigger={trigger}
      labelT18n={labelT18n}
      onSubmit={onSubmit}
      onBlur={field.onBlur}
      typeInput="outline"
      nameTrigger={nameTrigger}
      onChangeText={field.onChange}
      defaultValue={(getValues() as any)[name] as string}
      placeholderT18n={placeholderT18n}
      rightChildren={rightChildren}
      {...rest}
    />
  );
};
