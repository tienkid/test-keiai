import React, { useState } from 'react';
import { Linking } from 'react-native';

import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { execFunc, LINK_INQUIRY, logActionEvent } from '@common';
import {
  Block,
  Button,
  FormInput,
  Icon,
  ParsedText,
  Spacer,
  Text,
} from '@components';
import { renderItemWithPattern } from '@components/parsed-text/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormLoginType } from '@model/authentication';
import { loginValidation } from '@validate/login';

import { useLoginStyle } from '../style';
import { FormLoginProps } from '../type';

export const FormLogin = ({
  onSubmit,
  errorLogin,
  setErrorLogin,
}: FormLoginProps) => {
  // state
  const [t] = useTranslation();
  const styles = useLoginStyle();
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const formMethod = useForm<FormLoginType>({
    mode: 'all',
    resolver: yupResolver(loginValidation),
    defaultValues: {
      phoneNumber: __DEV__ ? '0965371099' : '',
      password: __DEV__ ? '12341234' : '',
    },
  });

  // function
  const onSubmitKey = () => {
    formMethod.handleSubmit(onSubmit)();
    logActionEvent('login', { data: formMethod.getValues() });
  };
  const onTogglePassword = () => {
    setPasswordShown(e => !e);
  };
  const handleGoToRegister = () => {
    Linking.openURL(LINK_INQUIRY);
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
        <FormInput<FormLoginType>
          name={'phoneNumber'}
          keyboardType="numeric"
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
          onFocus={handleFocusPassword}
          secureTextEntry={!passwordShown}
          keyboardType="ascii-capable"
          textContentType={'oneTimeCode'}
          rightChildren={
            <Button.Default onPress={onTogglePassword}>
              <Block direction="row">
                <Icon icon={passwordShown ? 'eye' : 'eye_close'} />
                <Spacer width={10} />
              </Block>
            </Button.Default>
          }
        />
        <Spacer height={10} />
        <Block middle>
          <Text t18n={errorLogin} preset="textNormal12" colorTheme="primary" />
        </Block>
        <Spacer height={60} />
        <Block alignSelf={'center'}>
          <Button.Primary
            t18n="login:login_title"
            onPress={onSubmitKey}
            disabled={!formMethod.formState.isValid}
          />
        </Block>
        <Spacer height={60} />
        <Block alignSelf={'center'}>
          <ParsedText
            preset="textNormal12"
            parse={[
              {
                pattern: /\[([^:]+):1\]/i,
                renderText: renderItemWithPattern,
                style: styles.text,
              },
              {
                pattern: /\[([^:]+):2\]/i,
                onPress: () => handleGoToRegister(),
                renderText: renderItemWithPattern,
                style: styles.linkText,
              },
            ]}>
            {t('login:troubling')}
          </ParsedText>
        </Block>
      </Block>
    </FormProvider>
  );
};
