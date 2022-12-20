import React from 'react';

import { dispatch } from '@common';
// import { handleShowModalLoading } from '@components/modal-loading';
import { handleShowModalError, WrapperBackground } from '@components';
import { FormInformationProfileType } from '@model/information';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { appActions, registerActions } from '@redux-slice';
import { mapsDataRequest } from '@validate/information';

import { FormInformationProfile } from './components/form-profile';

export const InformationProfile = () => {
  // state

  // func
  const handleSubmit = (data?: FormInformationProfileType) => {
    dispatch(
      registerActions.checkContract(
        data?.contact ?? '',
        () => checkContractSucceeded(data),
        checkContractError,
      ),
    );
  };
  const checkContractSucceeded = (data?: FormInformationProfileType) => {
    const dataMaps = mapsDataRequest(data);
    dispatch(registerActions.validate(dataMaps, () => submitSucceeded(data)));
  };
  const checkContractError = () => {
    handleShowModalError({
      content: 'msg:MSG_012',
      title: 'dialog:error',
    });
  };
  const submitSucceeded = (data?: FormInformationProfileType) => {
    dispatch(appActions.setRegisterData(data));
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
