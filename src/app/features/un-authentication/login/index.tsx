import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch } from '@common';
import { Block, Trouble, WrapperBackground } from '@components';
import {
  handleHideModalLoading,
  handleShowModalLoading,
} from '@components/modal-loading';
import { appActions } from '@redux-slice';

import { FormLogin } from './components/form-login';

const LoginComponent = () => {
  // function
  const onSubmit = () => {
    handleShowModalLoading();
    setTimeout(() => {
      handleHideModalLoading();
      dispatch(appActions.setToken('token'));
    }, 2000);
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
