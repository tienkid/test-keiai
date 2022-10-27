import React, { memo, useCallback } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch, numberToCountryCode } from '@common';
import { Block, WrapperBackground } from '@components';
// import { navigate } from '@navigation/navigation-service';
// import { APP_SCREEN } from '@navigation/screen-types';
import { useSelector } from '@hooks';
import { appActions, registerActions } from '@redux-slice';
import { mapsDataRequest } from '@validate/information';
import { Auth } from 'aws-amplify';

import { FormOTP } from './components/form-otp';
import { FormRegisterOTPType } from './type';

const OTPComponent = () => {
  const dataProfile = useSelector(x => x.app.registerData);

  //function
  const onSubmitSucceeded = useCallback(async () => {
    const res = await Auth.signIn(
      numberToCountryCode(dataProfile?.phoneNumber ?? ''),
      dataProfile?.password,
    );
    if (res) {
      dispatch(appActions.setToken(res.signInUserSession.accessToken.jwtToken));
    }
  }, [dataProfile?.password, dataProfile?.phoneNumber]);

  const handleSubmit = useCallback(
    (data: FormRegisterOTPType) => {
      const dataMaps = mapsDataRequest(dataProfile);
      dispatch(
        registerActions.confirm(
          { ...dataMaps, code: data.code },
          onSubmitSucceeded,
        ),
      );
    },
    [dataProfile, onSubmitSucceeded],
  );

  // render
  return (
    <Block block>
      <WrapperBackground titleT18n="register:title">
        <FormOTP onSubmit={handleSubmit} />
      </WrapperBackground>
    </Block>
  );
};
export const OTPScreen = memo(OTPComponent, isEqual);
