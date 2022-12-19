import React, { memo, useState } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch, numberToCountryCode } from '@common';
import { Block, Spacer, Text, WrapperBackground } from '@components';
import { DataValid } from '@model/delete-user';
import { navigate } from '@navigation/navigation-service';
import { HOME_STACK } from '@navigation/screen-types';
import { deleteUserActions } from '@redux-slice';
import { I18nKeys } from '@utils/i18n/locales';

import { FormDelete } from './components/form-delete';

const DeleteUserComponent = () => {
  //state
  const [errorLogin, setErrorLogin] = useState<I18nKeys | undefined>();

  // function
  const onSucceeded = () => {
    navigate(HOME_STACK.CONFIRM_DELETE);
  };
  const onError = () => {
    setErrorLogin('login:error_login');
  };
  const onSubmit = async (data: DataValid) => {
    setErrorLogin(undefined);
    const phoneNumber = numberToCountryCode(data.phone);
    dispatch(
      deleteUserActions.validDeleteUser(
        {
          password: data.password,
          phone: phoneNumber,
        },
        onSucceeded,
        onError,
      ),
    );
  };
  const removeError = () => {
    setErrorLogin(undefined);
  };

  // render
  return (
    <Block block colorTheme="white">
      <WrapperBackground
        canBack
        headerTitleT18n="delete_user:header"
        onBack={removeError}>
        <Block alignItems={'center'}>
          <Text
            preset="textNormal12"
            t18n="delete_user:title"
            colorTheme="base5"
            lineHeight={18}
          />
          <Text
            preset="textNormal12"
            t18n="delete_user:title2"
            colorTheme="base5"
            lineHeight={18}
          />
        </Block>
        <Spacer height={50} />
        <FormDelete
          onSubmit={onSubmit}
          errorLogin={errorLogin}
          setErrorLogin={setErrorLogin}
        />
      </WrapperBackground>
    </Block>
  );
};
export const DeleteUser = memo(DeleteUserComponent, isEqual);
