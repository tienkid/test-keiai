import React, { memo } from 'react';
import { Alert } from 'react-native';

import isEqual from 'react-fast-compare';

import { dispatch } from '@common';
import { Block, Screen } from '@components';
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
    <Block block paddingTop={0} paddingHorizontal={15}>
      <Screen
        bottomInsetColor="transparent"
        scroll
        style={{ paddingVertical: 0, paddingHorizontal: 10 }}
        backgroundColor={'transparent'}>
        <FormLogin onSubmit={onSubmit} />
      </Screen>
    </Block>
  );
};
export const Login = memo(LoginComponent, isEqual);
