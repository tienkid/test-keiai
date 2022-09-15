import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { Block, Button, FormInput, Spacer, Text } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormLoginType } from '@model/authentication';
import { loginValidation } from '@validate/login';

import { FormLoginProps } from '../type';

export const FormLogin = ({ onSubmit }: FormLoginProps) => {
  // state
  const formMethod = useForm<FormLoginType>({
    mode: 'all',
    resolver: yupResolver(loginValidation),
  });

  // function
  const onSubmitKey = () => {
    formMethod.handleSubmit(onSubmit)();
  };

  // render
  return (
    <FormProvider {...formMethod}>
      <FormInput<FormLoginType>
        name={'email'}
        labelT18n={'login:email'}
        placeholderT18n={'login:emailPlaceholder'}
      />
      <Spacer height={40} />
      <FormInput<FormLoginType>
        name={'phoneNumber'}
        labelT18n={'login:phoneNumber'}
        placeholderT18n={'login:phoneNumberPlaceholder'}
      />
      <Spacer height={10} />
      <Block paddingLeft={16}>
        <Text
          t18n="login:without_hyphens"
          preset="linkMedium"
          colorTheme="primary"
        />
      </Block>
      <Spacer height={60} />
      <Button.Primary
        t18n="login:title"
        onPress={onSubmitKey}
        disabled={!formMethod.formState.isValid}
      />
      <Spacer height={40} />
      <Button.Default>
        <Text
          center
          t18n="login:register"
          preset="linkMedium"
          colorTheme="border"
        />
      </Button.Default>
    </FormProvider>
  );
};
