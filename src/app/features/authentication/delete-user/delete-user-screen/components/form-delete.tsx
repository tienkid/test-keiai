import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { logActionEvent } from '@common';
import { Block, Button, FormInput, Spacer } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormLoginType } from '@model/authentication';
import { loginValidation } from '@validate/login';

import { FormLoginProps } from '../type';

export const FormDelete = ({ onSubmit }: FormLoginProps) => {
  // state

  const formMethod = useForm<FormLoginType>({
    mode: 'all',
    resolver: yupResolver(loginValidation),
    defaultValues: {
      phoneNumber: __DEV__ ? '0397802881' : '',
      password: __DEV__ ? 'Hanoi123' : '',
    },
  });

  // function
  const onSubmitKey = () => {
    formMethod.handleSubmit(onSubmit)();
    logActionEvent('delete-user', { data: formMethod.getValues() });
  };

  // render
  return (
    <FormProvider {...formMethod}>
      <Block paddingHorizontal={15}>
        <FormInput<FormLoginType>
          name={'phoneNumber'}
          labelT18n={'login:phoneNumber'}
          placeholderT18n={'login:phoneNumberPlaceholder'}
          inputStyle={{ height: 50 }}
        />
        <Spacer height={35} />
        <FormInput<FormLoginType>
          name={'password'}
          placeholderT18n={'login:passwordPlaceholder'}
          labelT18n={'login:password'}
          inputStyle={{ height: 50 }}
          secureTextEntry
        />
        <Spacer height={60} />
        <Block alignSelf={'center'}>
          <Button.Primary
            t18n="login:title"
            onPress={onSubmitKey}
            disabled={!formMethod.formState.isValid}
          />
        </Block>
        <Spacer height={60} />
      </Block>
    </FormProvider>
  );
};
