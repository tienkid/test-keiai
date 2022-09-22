import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { Block, Button, FormInput, Spacer, Text, Trouble } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormLoginType } from '@model/authentication';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { loginValidation } from '@validate/login';

import { FormLoginProps } from '../type';

export const FormLogin = ({ onSubmit }: FormLoginProps) => {
  // state

  const formMethod = useForm<FormLoginType>({
    mode: 'all',
    resolver: yupResolver(loginValidation),
    defaultValues: {
      phoneNumber: __DEV__ ? '096688888' : '',
      password: __DEV__ ? 'passsword' : '',
    },
  });

  // function
  const onSubmitKey = () => {
    formMethod.handleSubmit(onSubmit)();
  };

  const handleGoToRegister = () => {
    navigate(APP_SCREEN.REGISTER);
  };
  // render
  return (
    <FormProvider {...formMethod}>
      <Block paddingHorizontal={20}>
        <FormInput<FormLoginType>
          name={'phoneNumber'}
          labelT18n={'login:phoneNumber'}
          placeholderT18n={'login:phoneNumberPlaceholder'}
        />
        <Spacer height={20} />
        <FormInput<FormLoginType>
          name={'password'}
          placeholderT18n={'login:passwordPlaceholder'}
          labelT18n={'login:password'}
          secureTextEntry
        />
        <Spacer height={40} />
        <Button.Primary
          t18n="login:title"
          onPress={onSubmitKey}
          disabled={!formMethod.formState.isValid}
        />
        <Spacer height={33} />
        <Block width={'100%'} height={1} colorTheme="base_2" />
        <Spacer height={24} />
        <Text
          center
          t18n="login:register_member"
          preset="linkLarge"
          colorTheme="text"
        />
        <Spacer height={6} />
        <Text
          center
          t18n="login:register"
          preset="linkSmall"
          colorTheme="text"
        />
        <Spacer height={15} />
        <Button.Primary
          t18n="login:new_member"
          onPress={handleGoToRegister}
          disabled={!formMethod.formState.isValid}
        />
      </Block>
      <Trouble />
    </FormProvider>
  );
};
