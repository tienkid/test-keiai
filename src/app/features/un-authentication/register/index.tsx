import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch, numberToCountryCode } from '@common';
import { Block, WrapperBackground } from '@components';
import { useSelector } from '@hooks';
import { FormGetCodeType } from '@model/authentication';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { useRoute } from '@react-navigation/native';
import { loginActions, registerActions } from '@redux-slice';

import { FormRegister } from './components/form-register';
import { RegisterProps } from './type';

const RegisterComponent = () => {
  //state
  const register = useSelector(x => x.app.registerData);
  const profile = useSelector(x => x.app.profileWrap);
  console.log(profile, 'profile');

  const route = useRoute<RegisterProps['route']>();
  const { type } = route.params;

  //function
  const handleSubmit = () => {
    if (type) {
      const data: FormGetCodeType = {
        mode: 'background_refresh',
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
    navigate(APP_SCREEN.OTP_SCREEN, { type });
  };
  // render
  return (
    <Block block>
      <WrapperBackground
        titleT18n="register:header_text"
        headerTitleT18n="login:SMS_code">
        <FormRegister onSubmit={handleSubmit} type={type} />
      </WrapperBackground>
    </Block>
  );
};
export const Register = memo(RegisterComponent, isEqual);
