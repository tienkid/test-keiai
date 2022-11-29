import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { Block, Spacer, Text, WrapperBackground } from '@components';
import { FormLoginType } from '@model/authentication';
import { navigate } from '@navigation/navigation-service';
import { HOME_STACK } from '@navigation/screen-types';

import { FormDelete } from './components/form-delete';

const DeleteUserComponent = () => {
  // function
  const onSubmit = async (data: FormLoginType) => {
    console.log(data, 'data');
    navigate(HOME_STACK.CONFIRM_DELETE);
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
