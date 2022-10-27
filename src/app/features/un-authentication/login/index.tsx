import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch, numberToCountryCode } from '@common';
import { Block, Trouble, WrapperBackground } from '@components';
import {
  handleHideModalLoading,
  handleShowModalLoading,
} from '@components/modal-loading';
import { FormLoginType } from '@model/authentication';
import { appActions } from '@redux-slice';
import { Auth } from 'aws-amplify';

import { FormLogin } from './components/form-login';

const LoginComponent = () => {
  // function
  const onSubmit = async (data: FormLoginType) => {
    // dispatch(loginActions.login(data));
    handleShowModalLoading();

    try {
      const res = await Auth.signIn(
        numberToCountryCode(data.phoneNumber),
        data.password,
      );
      dispatch(appActions.setAppProfile({ username: res.username }));
      dispatch(appActions.setToken(res.signInUserSession.accessToken.jwtToken));
    } catch (error) {
      console.log(error);
    }

    // handleShowModalLoading();
    // setTimeout(() => {
    handleHideModalLoading();
    //   dispatch(appActions.setToken('token'));
    // }, 2000);
    //mqpz-fxqm-wuhv-sauj
  };

  // render
  return (
    <Block block colorTheme="white">
      <WrapperBackground titleT18n="login:title">
        <FormLogin onSubmit={onSubmit} />
      </WrapperBackground>
      <Trouble />
    </Block>
  );
};
export const Login = memo(LoginComponent, isEqual);
