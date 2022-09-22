import React, { useState } from 'react';

import { handleShowModalLoading } from '@components/modal-loading';

import { FormInformationProfile } from './components/form-profile';
import { WrapperSteps } from './components/wrapper-steps';
import { STEP_REGISTER_PROFILE } from './contain';

export const InformationProfile = () => {
  // state
  const [currentStep, setCurrentStep] = useState(1);

  // func
  const handleSubmit = () => {
    setCurrentStep(currentStep + 1);

    if (currentStep === STEP_REGISTER_PROFILE) {
      handleShowModalLoading({ title: 'information_profile:registration' });
    }
  };

  // render
  return (
    <WrapperSteps
      title="information_profile:step_1_title"
      currentStep={currentStep}>
      <FormInformationProfile onSubmit={handleSubmit} />
    </WrapperSteps>
  );
};
