import React, { useState } from 'react';
import { Linking } from 'react-native';

import { FormProvider, useForm } from 'react-hook-form';

import { dispatch, numberToCountryCode } from '@common';
import { Block, Button, Divider, FormInput, Spacer, Text } from '@components';
import { rxNotNumber } from '@config/regex';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from '@hooks';
import { FormGetCodeType } from '@model/authentication';
import { loginActions, registerActions } from '@redux-slice';
import { registerOTPValidation } from '@validate/register';

import { FormRegisterOTPProps, FormRegisterOTPType } from '../type';

export const FormOTP = ({ onSubmit, type }: FormRegisterOTPProps) => {
  // state

  const profile = useSelector(x => x.app.profileWrap);
  const dataProfile = useSelector(x => x.app.registerData);
  const formMethod = useForm<FormRegisterOTPType>({
    mode: 'all',
    resolver: yupResolver(registerOTPValidation),
    defaultValues: {
      code: __DEV__ ? '' : '',
    },
  });
  const [checkResend, setCheckResend] = useState(false);
  // function
  const onSubmitKey = () => {
    formMethod.handleSubmit(onSubmit)();
  };

  const handleSuccess = () => {
    setCheckResend(true);
  };

  const handleResendOTP = () => {
    if (!dataProfile) {
      const data: FormGetCodeType = {
        mode: 'background_refresh',
        phone: profile?.phone_number,
      };
      dispatch(loginActions.getCodeLogin(data, handleSuccess));
    } else {
      dispatch(
        registerActions.reSendOTP(
          { phone: numberToCountryCode(dataProfile.phoneNumber) },
          handleSuccess,
        ),
      );
      // handleSuccess();
    }
  };
  const handleToEdit = () => {
    Linking.openURL('https://ki-group.co.jp/owners/app/inquiry/');
  };
  const handleFocusOTP = () => {
    if (checkResend) {
      setCheckResend(false);
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
          rxRemove={rxNotNumber}
          onFocus={handleFocusOTP}
          isShowMsgError={!checkResend}
          errorPreset="textNormal12"
          inputStyle={{ height: 50 }}
          autoComplete="sms-otp"
          textContentType="oneTimeCode"
        />
        {/* {!formMethod.formState.isValid && (
          <Block paddingTop={10} alignItems="center">
            <Text
              t18n="register:error_send_otp"
              preset="textNormal12"
              colorTheme="error"
            />
          </Block>
        )} */}
        {checkResend && (
          <Block paddingTop={10} alignItems="center">
            <Text
              t18n="register:resent_otp"
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
