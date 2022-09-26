import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { Block, WrapperBackground } from '@components';
import { CopyRight } from '@components/copy-right';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';

import { FormRegister } from './components/form-register';

const RegisterComponent = () => {
  // render
  // const { height, width } = useWindowDimensions();
  const handleSubmit = () => {
    navigate(APP_SCREEN.OTP_SCREEN);
  };
  return (
    <Block block>
      <WrapperBackground titleT18n="register:title">
        <FormRegister onSubmit={handleSubmit} />
      </WrapperBackground>
      <CopyRight />
    </Block>
  );
};
export const Register = memo(RegisterComponent, isEqual);
