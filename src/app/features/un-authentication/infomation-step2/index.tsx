// import { handleShowModalLoading } from '@components/modal-loading';
import React from 'react';

import { WrapperBackground } from '@components';
import { useSelector } from '@hooks';
import { FormInformationProfileType } from '@model/information';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';

import { ListPreview } from './components/list-preview';

export const InformationProfileStep2 = () => {
  // state
  const dataProfile = useSelector(x => x.app.registerData);

  //function
  const handleSubmit = () => {
    navigate(APP_SCREEN.REGISTER, {});
  };

  // render
  return (
    <WrapperBackground
      canBack
      headerTitleT18n="login:register_member"
      isHiddenLogo>
      <ListPreview
        informationPreview={dataProfile as FormInformationProfileType}
        onSubmit={handleSubmit}
      />
    </WrapperBackground>
  );
};
