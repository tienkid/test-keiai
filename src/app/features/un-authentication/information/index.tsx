import React, { useCallback, useMemo, useState } from 'react';

import {
  handleShowModalLoading,
  ModalLoading,
} from '@components/modal-loading';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';

import { FormInformationProfile } from './components/form-profile';
import { ListPreview } from './components/list-preview';
import { WrapperSteps } from './components/wrapper-steps';
import { STEP_REGISTER_PROFILE } from './contain';

import { handleHideModalLoading } from '../../../library/components/modal-loading/index';

export const InformationProfile = () => {
  // state
  const [currentStep, setCurrentStep] = useState(1);

  // func
  const handleSubmit = useCallback(() => {
    if (currentStep === STEP_REGISTER_PROFILE - 1) {
      setCurrentStep(currentStep + 1);
    }
    handleShowModalLoading({ title: 'information_profile:registration' });
    setTimeout(() => {
      if (currentStep !== STEP_REGISTER_PROFILE - 1) {
        setCurrentStep(currentStep + 1);
      }
      handleHideModalLoading();
      if (currentStep === STEP_REGISTER_PROFILE - 1) {
        navigate(APP_SCREEN.LOGIN);
      }
    }, 2000);
  }, [currentStep]);

  const handleBackStep = useCallback(() => {
    setCurrentStep(current => (current - 1 >= 1 ? current - 1 : 1));
  }, []);

  const renderSteps = useMemo(() => {
    switch (currentStep) {
      case 1:
        return <FormInformationProfile onSubmit={handleSubmit} />;
      default:
        return (
          <ListPreview onBackStep={handleBackStep} onSubmit={handleSubmit} />
        );
    }
  }, [currentStep, handleBackStep, handleSubmit]);

  // render
  return (
    <WrapperSteps
      title="information_profile:step_1_title"
      currentStep={currentStep}>
      {renderSteps}
      <ModalLoading />
    </WrapperSteps>
  );
};
