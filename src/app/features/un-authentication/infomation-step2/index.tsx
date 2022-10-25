// import { handleShowModalLoading } from '@components/modal-loading';
import React, { useCallback, useMemo } from 'react';

import { dispatch, numberToCountryCode } from '@common';
import { useSelector } from '@hooks';
import { FormInformationProfileType } from '@model/information';
import { ValidateRequest } from '@model/register';
import { goBack, navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { registerActions } from '@redux-slice';

import { ListPreview } from '../information/components/list-preview';
import { WrapperSteps } from '../information/components/wrapper-steps';

export const InformationProfileStep2 = () => {
  // state
  const dataProfile = useSelector(x => x.app.registerData);
  //function
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
      password: dataProfile?.password,
    } as ValidateRequest;
  }, [dataProfile]);
  console.log(4444444, mapsDataRequest);

  const handleSubmit = useCallback(() => {
    dispatch(registerActions.validate(mapsDataRequest, submitSucceeded));
  }, [mapsDataRequest]);

  const submitSucceeded = () => {
    navigate(APP_SCREEN.REGISTER);
  };
  const handleBackStep = () => {
    goBack();
  };
  // render
  return (
    <WrapperSteps title={'information_profile:step_1_title'}>
      <ListPreview
        informationPreview={dataProfile as FormInformationProfileType}
        onBackStep={handleBackStep}
        onSubmit={handleSubmit}
      />
    </WrapperSteps>
  );
};
