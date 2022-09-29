import React, { useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import {
  Block,
  Button,
  CopyRight,
  Divider,
  FormInput,
  Spacer,
  Text,
} from '@components';
import { CheckBox } from '@components/check-box';
import { rxNotNumber } from '@config/regex';
import { yupResolver } from '@hookform/resolvers/yup';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { registerOTPValidation } from '@validate/register';

import { FormRegisterOTPProps, FormRegisterOTPType } from '../type';

export const FormOTP = ({ onSubmit }: FormRegisterOTPProps) => {
  // state
  const formMethod = useForm<FormRegisterOTPType>({
    mode: 'all',
    resolver: yupResolver(registerOTPValidation),
    defaultValues: {
      code: __DEV__ ? '888888' : '',
    },
  });

  const [checkBox, setCheckBox] = useState<boolean>(false);

  // function
  const onSubmitKey = () => {
    formMethod.handleSubmit(onSubmit)();
  };

  const handleResendOTP = () => {
    console.log('resend');
  };

  const handleToEdit = () => {
    navigate(APP_SCREEN.INFORMATION_PROFILE);
  };
  // render
  return (
    <FormProvider {...formMethod}>
      <Block paddingHorizontal={20}>
        <Block alignItems={'center'} paddingBottom={25}>
          <Text
            preset="linkMedium"
            colorTheme="base9"
            t18n="register:header_text"
          />
        </Block>
        <FormInput<FormRegisterOTPType>
          name={'code'}
          labelT18n={'login:phoneNumber'}
          placeholderT18n={'login:phoneNumberPlaceholder'}
          rxRemove={rxNotNumber}
          isShowMsgError={false}
        />
        <Block paddingVertical={5} alignItems="center">
          <Text
            t18n="register:sms_send"
            preset="textMedium"
            colorTheme="error"
          />
        </Block>
        <Block direction={'row'} paddingTop={20}>
          <CheckBox value={checkBox} onToggle={setCheckBox} />
          <Text
            preset="textNormal12"
            colorTheme="base5"
            t18n="register:checkbox_policy"
          />
        </Block>
        <Block
          direction={'row'}
          justifyContent="space-around"
          paddingVertical={30}
          paddingHorizontal={40}>
          <Text preset="textNormal12" colorTheme="base5" t18n="register:term" />
          <Text
            preset="textNormal12"
            colorTheme="base5"
            t18n="register:policy"
          />
        </Block>
        <Button.Primary
          t18n="register:button_otp"
          onPress={onSubmitKey}
          disabled={checkBox && formMethod.formState.isValid ? false : true}
        />
        <Spacer height={30} />
        <Divider />
        <Block alignItems={'center'} paddingVertical={25}>
          <Text
            preset="linkMedium"
            colorTheme="base9"
            t18n="register:footer_text"
          />
          <Spacer height={10} />
          <Text
            preset="linkMedium"
            colorTheme="base9"
            t18n="register:footer_des"
            fontWeight={'200'}
          />
        </Block>
        <Button.Outline
          t18n="register:button_resend"
          onPress={handleResendOTP}
          disabled={!formMethod.formState.isValid}
        />
        <Spacer height={25} />
        <Button.Outline
          t18n="register:button_resend"
          onPress={handleToEdit}
          disabled={!formMethod.formState.isValid}
        />
        <Spacer height={40} />
      </Block>
      <CopyRight />
    </FormProvider>
  );
};
