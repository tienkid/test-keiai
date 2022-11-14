import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { CHECK_VERIFY, dispatch, numberToCountryCode } from '@common';
import { Block, WrapperBackground } from '@components';
import { CopyRight } from '@components/copy-right';
import { useSelector } from '@hooks';
import { FormGetCodeType } from '@model/authentication';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { loginActions, registerActions } from '@redux-slice';
import { loadString } from '@utils/storage';

import { FormRegister } from './components/form-register';

const RegisterComponent = () => {
  //state
  const register = useSelector(x => x.app.registerData);
  const profile = useSelector(x => x.app.profile);
  console.log(profile, 'profile');

  const checkVerify = loadString(CHECK_VERIFY);

  //function
  const handleSubmit = () => {
    if (checkVerify) {
      const data: FormGetCodeType = {
        mode: 'background_refesh',
        phone: profile?.phone_number,
      };
      dispatch(loginActions.getCodeLogin(data));
    } else {
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
