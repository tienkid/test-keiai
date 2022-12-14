import React, { memo, useCallback } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch, NON_REFRESH, numberToCountryCode } from '@common';
import { Block, WrapperBackground } from '@components';
// import { navigate } from '@navigation/navigation-service';
// import { APP_SCREEN } from '@navigation/screen-types';
import { useSelector } from '@hooks';
import { FormSetCodeType } from '@model/authentication';
import { useRoute } from '@react-navigation/native';
import { appActions, loginActions, registerActions } from '@redux-slice';
import { remove } from '@utils/storage';
import { mapsDataRequest } from '@validate/information';
import { Auth } from 'aws-amplify';

import { FormOTP } from './components/form-otp';
import { FormRegisterOTPType, OTPScreenProps } from './type';

const OTPComponent = () => {
  const route = useRoute<OTPScreenProps['route']>();
  const { type } = route.params;

  const dataProfile = useSelector(x => x.app.registerData);
  const profileWrap = useSelector(x => x.app.profileWrap);
  const sessionID = useSelector(x => x.app.sessionID);
  // const checkRefresh = loadString(NON_REFRESH);

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
        dispatch(appActions.setRegisterData(undefined));
        dispatch(appActions.setAppProfile(res.attributes));
      }
    } catch (error) {}
  }, [dataProfile?.password, dataProfile?.phoneNumber]);

  const onSucceeded = useCallback(() => {
    remove(NON_REFRESH);
    dispatch(appActions.setAppProfile(profileWrap));
  }, [profileWrap]);
  const handleSubmit = useCallback(
    (data: FormRegisterOTPType) => {
      if (!dataProfile) {
        const dataPush: FormSetCodeType = {
          code: data.code,
          phone: profileWrap.phone_number,
          session: sessionID,
        };
        dispatch(loginActions.OTPCodeLogin(dataPush, onSucceeded));
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
    [
      dataProfile,
      profileWrap.phone_number,
      sessionID,
      onSucceeded,
      onSubmitSucceeded,
    ],
  );

  // render
  return (
    <Block block>
      <WrapperBackground
        titleT18n="register:header_text"
        headerTitleT18n="login:register_member">
        <FormOTP onSubmit={handleSubmit} type={type} />
      </WrapperBackground>
    </Block>
  );
};
export const OTPScreen = memo(OTPComponent, isEqual);
