import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch, numberToCountryCode } from '@common';
import { Block, WrapperBackground } from '@components';
import { CopyRight } from '@components/copy-right';
import { useSelector } from '@hooks';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { registerActions } from '@redux-slice';

import { FormRegister } from './components/form-register';

const RegisterComponent = () => {
  //state
  const register = useSelector(x => x.app.registerData);
  const profile = useSelector(x => x.app.profile);
  console.log(profile?.phone_number, 'profile');
  //function
  const handleSubmit = () => {
    if (register) {
      dispatch(
        registerActions.register(
          {
            email: register?.email ?? '',
            phone_number: numberToCountryCode(register?.phoneNumber ?? ''),
          },
          onSubmitSucceeded,
        ),
      );
    } else {
      // onSubmitSucceeded();
    }
  };
  const onSubmitSucceeded = () => {
    navigate(APP_SCREEN.OTP_SCREEN);
  };
  // render
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
