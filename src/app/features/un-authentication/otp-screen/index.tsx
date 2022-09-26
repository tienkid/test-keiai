import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch } from '@common';
import { Block, WrapperBackground } from '@components';
import { CopyRight } from '@components/copy-right';
import {
  handleHideModalLoading,
  handleShowModalLoading,
} from '@components/modal-loading';
// import { navigate } from '@navigation/navigation-service';
// import { APP_SCREEN } from '@navigation/screen-types';
import { appActions } from '@redux-slice';

import { FormOTP } from './components/form-otp';

const OTPComponent = () => {
  // render
  const handleSubmit = () => {
    // navigate(APP_SCREEN.INFORMATION_PROFILE);
    handleShowModalLoading();
    setTimeout(() => {
      handleHideModalLoading();
      dispatch(appActions.setToken('token'));
    }, 2000);
  };
  return (
    <Block block>
      <WrapperBackground titleT18n="register:title">
        <FormOTP onSubmit={handleSubmit} />
      </WrapperBackground>
      <CopyRight />
    </Block>
  );
};
export const OTPScreen = memo(OTPComponent, isEqual);
