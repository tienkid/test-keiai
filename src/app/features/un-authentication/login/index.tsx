import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { Block, Trouble, WrapperBackground } from '@components';
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
    <Block block colorTheme="white">
      <WrapperBackground titleT18n="login:title">
        <FormLogin onSubmit={onSubmit} />

        <ModalLoading />
      </WrapperBackground>
      <Trouble />
    </Block>
  );
};
export const Login = memo(LoginComponent, isEqual);
