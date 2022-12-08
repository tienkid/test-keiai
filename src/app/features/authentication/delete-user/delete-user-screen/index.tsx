import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch, numberToCountryCode } from '@common';
import { Block, Spacer, Text, WrapperBackground } from '@components';
import { DataValid } from '@model/delete-user';
import { deleteUserActions } from '@redux-slice';

import { FormDelete } from './components/form-delete';

const DeleteUserComponent = () => {
  // function
  const onSubmit = async (data: DataValid) => {
    console.log(data, 'data');
    const phoneNumber = numberToCountryCode(data.phone);
    dispatch(
      deleteUserActions.validDeleteUser({
        password: data.password,
        phone: phoneNumber,
      }),
    );
    //
  };
  // render
  return (
    <Block block colorTheme="white">
      <WrapperBackground canBack headerTitleT18n="delete_user:header">
        <Block alignItems={'center'}>
          <Text
            preset="textNormal12"
            t18n="delete_user:title"
            colorTheme="base5"
          />
          <Text
            preset="textNormal12"
            t18n="delete_user:title2"
            colorTheme="base5"
          />
        </Block>
        <Spacer height={35} />
        <FormDelete onSubmit={onSubmit} />
      </WrapperBackground>
    </Block>
  );
};
export const DeleteUser = memo(DeleteUserComponent, isEqual);
