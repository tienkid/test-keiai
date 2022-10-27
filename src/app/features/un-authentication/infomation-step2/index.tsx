// import { handleShowModalLoading } from '@components/modal-loading';
import React from 'react';

import { useSelector } from '@hooks';
import { FormInformationProfileType } from '@model/information';
import { goBack, navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';

import { ListPreview } from '../information/components/list-preview';
import { WrapperSteps } from '../information/components/wrapper-steps';

export const InformationProfileStep2 = () => {
  // state
  const dataProfile = useSelector(x => x.app.registerData);

  //function
  const handleSubmit = () => {
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
