import React, { useCallback } from 'react';

import { dispatch } from '@common';
// import { handleShowModalLoading } from '@components/modal-loading';
import { WrapperBackground } from '@components';
import { FormInformationProfileType } from '@model/information';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { appActions, registerActions } from '@redux-slice';
import { mapsDataRequest } from '@validate/information';

import { FormInformationProfile } from './components/form-profile';

export const InformationProfile = () => {
  // state

  // func
  const handleSubmit = useCallback((data?: FormInformationProfileType) => {
    const dataMaps = mapsDataRequest(data);
    dispatch(registerActions.validate(dataMaps, submitSucceeded));
    dispatch(appActions.setRegisterData(data));
  }, []);

  const submitSucceeded = () => {
    navigate(APP_SCREEN.INFORMATION_PROFILE_STEP2);
  };

  // effect

  // render
  return (
    <WrapperBackground headerTitleT18n={'login:register_member'} canBack>
      <FormInformationProfile onSubmit={handleSubmit} />
    </WrapperBackground>
  );
};
