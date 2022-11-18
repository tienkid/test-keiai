import React, { memo, useCallback } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch, numberToCountryCode } from '@common';
import { Block, WrapperBackground } from '@components';
// import { navigate } from '@navigation/navigation-service';
// import { APP_SCREEN } from '@navigation/screen-types';
import { useSelector } from '@hooks';
import { FormSetCodeType } from '@model/authentication';
import { appActions, loginActions, registerActions } from '@redux-slice';
import { mapsDataRequest } from '@validate/information';
import { Auth } from 'aws-amplify';

import { FormOTP } from './components/form-otp';
import { FormRegisterOTPType } from './type';

const OTPComponent = () => {
  const dataProfile = useSelector(x => x.app.registerData);
  const sessionID = useSelector(x => x.app.sessionID);
  // const checkRefresh = loadString(NON_REFRESH);

  const profile = useSelector(x => x.app.profile);

  //function
  const onSubmitSucceeded = useCallback(async () => {
    try {
      const res = await Auth.signIn(
        numberToCountryCode(dataProfile?.phoneNumber ?? ''),
        dataProfile?.password,
      );
      if (res) {
        dispatch(
          appActions.setToken({
            token: res.signInUserSession.accessToken.jwtToken,
            refreshToken: '',
          }),
        );
        dispatch(appActions.setAppProfile(res.attributes));
      }
    } catch (error) {}
  }, [dataProfile?.password, dataProfile?.phoneNumber]);

  const handleSubmit = useCallback(
    (data: FormRegisterOTPType) => {
      if (!dataProfile) {
        const dataPush: FormSetCodeType = {
          code: data.code,
          phone: profile.phone_number,
          session: sessionID,
        };
        dispatch(loginActions.OTPCodeLogin(dataPush));
      } else {
        const dataMaps = mapsDataRequest(dataProfile);
        dispatch(
          registerActions.confirm(
            { ...dataMaps, code: data.code },
            onSubmitSucceeded,
          ),
        );
      }
    },
    [dataProfile, onSubmitSucceeded, profile.phone_number, sessionID],
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
