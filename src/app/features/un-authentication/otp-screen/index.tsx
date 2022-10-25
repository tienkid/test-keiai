import React, { memo, useCallback, useMemo } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch, numberToCountryCode } from '@common';
import { Block, WrapperBackground } from '@components';
// import { navigate } from '@navigation/navigation-service';
// import { APP_SCREEN } from '@navigation/screen-types';
import { useSelector } from '@hooks';
import { ValidateRequest } from '@model/register';
import { appActions, registerActions } from '@redux-slice';

import { FormOTP } from './components/form-otp';
import { FormRegisterOTPType } from './type';

const OTPComponent = () => {
  const dataProfile = useSelector(x => x.app.registerData);
  const mapsDataRequest: ValidateRequest = useMemo(() => {
    return {
      phone_number: numberToCountryCode(dataProfile?.phoneNumber ?? ''),
      email: dataProfile?.email,
      attributes: {
        property_management_number: dataProfile?.contact,
        family_name: dataProfile?.first_name,
        given_name: dataProfile?.last_name,
        phonetic_family_name: dataProfile?.furigana_first_name,
        phonetic_given_name: dataProfile?.furigana_last_name,
        address: dataProfile?.name_address,
        building: dataProfile?.building_name,
        postal: dataProfile?.zip_code,
        prefecture: dataProfile?.city,
      },
      password: dataProfile?.password ?? '',
    } as ValidateRequest;
  }, [dataProfile]);

  //function
  const handleSubmit = useCallback(
    (data: FormRegisterOTPType) => {
      dispatch(
        registerActions.confirm(
          { ...mapsDataRequest, code: data.code },
          onSubmitSucceeded,
        ),
      );
    },
    [mapsDataRequest],
  );

  const onSubmitSucceeded = () => {
    dispatch(appActions.setToken('token'));
  };

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
