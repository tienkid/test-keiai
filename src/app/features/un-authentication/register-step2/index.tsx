import React, { useCallback } from 'react';

import { useSelector } from '@hooks';
import { FormInformationProfileType } from '@model/information';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';

import { ListPreview } from '../infomation-step2/components/list-preview';
import { WrapperSteps } from '../information/components/wrapper-steps';

export const InformationProfileStep2 = () => {
  // state
  const dataProfile = useSelector(x => x.app.registerData);

  const handleSubmit = useCallback(() => {
    navigate(APP_SCREEN.REGISTER, {});
  }, []);

  // render
  return (
    <WrapperSteps title={'information_profile:step_1_title'}>
      <ListPreview
        informationPreview={dataProfile as FormInformationProfileType}
        onSubmit={handleSubmit}
      />
    </WrapperSteps>
  );
};
