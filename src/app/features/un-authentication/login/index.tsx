import React, { memo } from 'react';
import { Alert } from 'react-native';

import isEqual from 'react-fast-compare';

import { dispatch, sizeScale } from '@common';
import { Screen, WrapperBackground } from '@components';
import { FormLoginType } from '@model/authentication';
import { appActions } from '@redux-slice';

import { FormLogin } from './components/form-login';

const LoginComponent = () => {
  // state

  // function
  const onSubmit = (data: FormLoginType) => {
    dispatch(appActions.setAppTheme('dark'));
    Alert.alert(JSON.stringify(data));
  };

  // render
  return (
    <WrapperBackground titleT18n="login:title">
      <Screen
        bottomInsetColor="transparent"
        scroll
        style={{ paddingHorizontal: sizeScale(20) }}
        backgroundColor={'transparent'}>
        <FormLogin onSubmit={onSubmit} />
      </Screen>
    </WrapperBackground>
  );
};
export const Login = memo(LoginComponent, isEqual);
