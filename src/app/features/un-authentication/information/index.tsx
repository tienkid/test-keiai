import React, { useCallback } from 'react';

import { dispatch } from '@common';
// import { handleShowModalLoading } from '@components/modal-loading';
import { FormInformationProfileType } from '@model/information';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { appActions } from '@redux-slice';

import { FormInformationProfile } from './components/form-profile';
import { WrapperSteps } from './components/wrapper-steps';

export const InformationProfile = () => {
  // state

  // func

  const handleSubmit = useCallback((data?: FormInformationProfileType) => {
    dispatch(appActions.setRegisterData(data));
    navigate(APP_SCREEN.INFORMATION_PROFILE_STEP2);
  }, []);

  // effect

  // render
  return (
    <WrapperSteps title={'information_profile:step_1_title'}>
      <FormInformationProfile onSubmit={handleSubmit} />
    </WrapperSteps>
  );
};
