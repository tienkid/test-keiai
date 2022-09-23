import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { Block, WrapperBackground } from '@components';
import { CopyRight } from '@components/copy-right';
import { ModalLoading } from '@components/modal-loading';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';

import { FormOTP } from './components/form-otp';

const OTPComponent = () => {
  // render
  // const { height, width } = useWindowDimensions();
  const handleSubmit = () => {
    navigate(APP_SCREEN.INFORMATION_PROFILE);
  };
  return (
    <Block block>
      <WrapperBackground titleT18n="register:title">
        <FormOTP onSubmit={handleSubmit} />
        <ModalLoading />
      </WrapperBackground>
      <CopyRight />
    </Block>
  );
};
export const OTPScreen = memo(OTPComponent, isEqual);
