import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { execFunc, logActionEvent } from '@common';
import { Block, Button, FormInput, Spacer, Text } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { DataValid } from '@model/delete-user';
import { deleteValidation } from '@validate/delete-user';

import { FormLoginProps } from '../type';

export const FormDelete = ({
  onSubmit,
  errorLogin,
  setErrorLogin,
}: FormLoginProps) => {
  // state

  const formMethod = useForm<DataValid>({
    mode: 'all',
    resolver: yupResolver(deleteValidation),
    defaultValues: {
      phone: __DEV__ ? '0918077002' : '',
      password: __DEV__ ? '12345678' : '',
    },
  });

  // function
  const onSubmitKey = () => {
    formMethod.handleSubmit(onSubmit)();
    logActionEvent('delete-user', { data: formMethod.getValues() });
  };
  const handleFocusPassword = () => {
    if (errorLogin) {
      execFunc(setErrorLogin, undefined);
    }
  };

  // render
  return (
    <FormProvider {...formMethod}>
      <Block paddingHorizontal={15}>
        <FormInput<DataValid>
          name={'phone'}
          labelT18n={'login:phoneNumber'}
          keyboardType="numeric"
          placeholderT18n={'login:phoneNumberPlaceholder'}
          inputStyle={{ height: 50 }}
        />
        <Spacer height={35} />
        <FormInput<DataValid>
          name={'password'}
          placeholderT18n={'login:passwordPlaceholder'}
          labelT18n={'login:password'}
          inputStyle={{ height: 50 }}
          secureTextEntry
          onFocus={handleFocusPassword}
        />
        {errorLogin && (
          <Block middle>
            <Spacer height={10} />
            <Text
              t18n={errorLogin}
              preset="textNormal12"
              colorTheme="primary"
            />
          </Block>
        )}
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
