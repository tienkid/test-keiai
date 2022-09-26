import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { Block, Button, FormInput, Spacer, Text } from '@components';
import { rxNotNumber } from '@config/regex';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerValidation } from '@validate/register';

import { FormRegisterProps, FormRegisterType } from '../type';

export const FormRegister = ({ onSubmit }: FormRegisterProps) => {
  // state

  const formMethod = useForm<FormRegisterType>({
    mode: 'all',
    resolver: yupResolver(registerValidation),
    defaultValues: {
      phoneNumber: __DEV__ ? '096688888' : '',
    },
  });

  // function
  const onSubmitKey = () => {
    formMethod.handleSubmit(onSubmit)();
  };

  // render
  return (
    <FormProvider {...formMethod}>
      <Block paddingHorizontal={20}>
        <FormInput<FormRegisterType>
          name={'phoneNumber'}
          labelT18n={'login:phoneNumber'}
          placeholderT18n={'login:phoneNumberPlaceholder'}
          rxRemove={rxNotNumber}
          isShowMsgError={false}
        />
        <Block paddingVertical={5} paddingHorizontal={10}>
          <Text t18n="msg:MSG_003" preset="textBold16" colorTheme="error" />
        </Block>
        <Spacer height={80} />
        <Button.Primary
          t18n="register:button_phone"
          onPress={onSubmitKey}
          disabled={!formMethod.formState.isValid}
        />
      </Block>
    </FormProvider>
  );
};
