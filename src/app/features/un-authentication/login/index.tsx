import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { WrapperBackground } from '@components';
import {
  handleHideModalLoading,
  handleShowModalLoading,
  ModalLoading,
} from '@components/modal-loading';

import { FormLogin } from './components/form-login';

const LoginComponent = () => {
  // function
  const onSubmit = () => {
    handleShowModalLoading();
    setTimeout(() => {
      handleHideModalLoading();
    }, 5000);
  };

  // render
  return (
    <WrapperBackground titleT18n="login:title">
      <FormLogin onSubmit={onSubmit} />

      <ModalLoading />
    </WrapperBackground>
  );
};
export const Login = memo(LoginComponent, isEqual);
