import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch } from '@common';
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
  // const checkVerify = loadString(CHECK_VERIFY);

  // function
  const onSubmit = async (data: FormLoginType) => {
    // if (checkVerify) {
    //   handleShowModalLoading();

    //   try {
    //     const res = await Auth.signIn(data.phoneNumber, data.password);
    //     dispatch(
    //       appActions.setToken({
    //         token: res.signInUserSession.accessToken.jwtToken,
    //         refreshToken: res.signInUserSession.refreshToken.token,
    //       }),
    //     );
    //     dispatch(appActions.setAppProfile(res.attributes));
    //     console.log(res.attributes);
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   handleHideModalLoading();
    // } else {
    //   navigate(APP_SCREEN.REGISTER);
    // }

    handleShowModalLoading();

    try {
      const res = await Auth.signIn(data.phoneNumber, data.password);
      dispatch(
        appActions.setToken({
          token: res.signInUserSession.accessToken.jwtToken,
          refreshToken: res.signInUserSession.refreshToken.token,
        }),
      );
      dispatch(appActions.setAppProfile(res.attributes));
      // console.log(res.attributes);
    } catch (error) {
      console.log(error);
    }
    handleHideModalLoading();
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
