import React from 'react';
import { Linking } from 'react-native';

import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { LINK_INQUIRY, logActionEvent } from '@common';
import { Block, Button, FormInput, ParsedText, Spacer } from '@components';
import { renderItemWithPattern } from '@components/parsed-text/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormLoginType } from '@model/authentication';
import { loginValidation } from '@validate/login';

import { useLoginStyle } from '../style';
import { FormLoginProps } from '../type';

export const FormLogin = ({ onSubmit }: FormLoginProps) => {
  // state
  const [t] = useTranslation();
  const styles = useLoginStyle();
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
    logActionEvent('login', { data: formMethod.getValues() });
  };

  const handleGoToRegister = () => {
    Linking.openURL(LINK_INQUIRY);
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
