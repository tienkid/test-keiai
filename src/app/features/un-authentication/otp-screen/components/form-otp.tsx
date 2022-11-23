import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { Block, Button, Divider, FormInput, Spacer, Text } from '@components';
import { rxNotNumber } from '@config/regex';
import { yupResolver } from '@hookform/resolvers/yup';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { useRoute } from '@react-navigation/native';
import { registerOTPValidation } from '@validate/register';

import {
  FormRegisterOTPProps,
  FormRegisterOTPType,
  OTPScreenProps,
} from '../type';

export const FormOTP = ({ onSubmit }: FormRegisterOTPProps) => {
  // state
  const route = useRoute<OTPScreenProps['route']>();
  const { type } = route.params;

  const formMethod = useForm<FormRegisterOTPType>({
    mode: 'all',
    resolver: yupResolver(registerOTPValidation),
    defaultValues: {
      code: __DEV__ ? '888888' : '',
    },
  });

  // function
  const onSubmitKey = () => {
    formMethod.handleSubmit(onSubmit)();
  };

  const handleResendOTP = () => {
    console.log('resend');
  };

  const handleToEdit = () => {
    if (type) {
      navigate(APP_SCREEN.INFORMATION_PROFILE);
    } else {
      navigate(APP_SCREEN.LOGIN);
    }
  };
  // render
  return (
    <FormProvider {...formMethod}>
      <Block paddingHorizontal={15}>
        <Block alignItems={'center'} paddingBottom={50}>
          <Text
            preset="textNormal12"
            colorTheme="base1"
            t18n="register:sms_send"
          />
        </Block>
        <FormInput<FormRegisterOTPType>
          name={'code'}
          labelT18n={'register:enter_otp'}
          placeholderT18n={'login:phoneNumberPlaceholder'}
          rxRemove={rxNotNumber}
          isShowMsgError={false}
          inputStyle={{ height: 50 }}
        />
        {!formMethod.formState.isValid && (
          <Block paddingTop={10} alignItems="center">
            <Text
              t18n="register:error_send_otp"
              preset="textNormal12"
              colorTheme="error"
            />
          </Block>
        )}
        <Spacer height={50} />
        <Block middle>
          <Button.Primary
            t18n={type ? 'login:login' : 'register:complete_register'}
            onPress={onSubmitKey}
            disabled={formMethod.formState.isValid ? false : true}
          />
        </Block>
      </Block>
      <Spacer height={45} />
      <Divider colorTheme="base3" height={6} />
      <Spacer height={20} />
      <Block alignItems={'center'}>
        <Text
          preset="textNormal"
          colorTheme="base5"
          t18n="register:footer_text"
        />
        <Spacer height={16} />
        <Text
          preset="textXSmall"
          colorTheme="base5"
          t18n="register:footer_des"
          fontWeight={'200'}
        />
      </Block>
      <Spacer height={30} />
      <Block alignSelf={'center'}>
        <Text
          onPress={handleResendOTP}
          t18n="register:button_resend"
          preset="textNormal12"
          colorTheme="text_2"
        />
      </Block>
      <Spacer height={20} />
      <Block alignSelf={'center'}>
        <Text
          onPress={handleToEdit}
          t18n="register:change_phone"
          preset="textNormal12"
          colorTheme="text_2"
        />
      </Block>
      <Spacer height={55} />
    </FormProvider>
  );
};
