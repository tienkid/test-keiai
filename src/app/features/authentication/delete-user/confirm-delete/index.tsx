import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch } from '@common';
import { Block, Button, Spacer, Text, WrapperBackground } from '@components';
import { navigate } from '@navigation/navigation-service';
import { BOTTOM_TAB } from '@navigation/screen-types';
import { deleteUserActions } from '@redux-slice';

const ConfirmDeleteUserComponent = () => {
  // function
  const onSubmit = async () => {
    dispatch(deleteUserActions.deleteUser());
  };

  const handleGoToHome = () => {
    navigate(BOTTOM_TAB.TAB_HOME);
  };
  // render
  return (
    <Block block colorTheme="white">
      <WrapperBackground canBack headerTitleT18n="delete_user:header">
        <Block alignItems={'center'}>
          <Text
            preset="textNormal12"
            t18n="delete_user:confirm_title"
            colorTheme="primary"
          />
          <Text
            preset="textNormal12"
            t18n="delete_user:confirm_title2"
            colorTheme="primary"
          />
        </Block>
        <Spacer height={20} />
        <Block justifyContent={'center'} direction="row" alignItems={'center'}>
          <Text
            t18n="delete_user:point"
            preset="textBold16"
            colorTheme="base5"
          />
          <Text preset="textBold16" colorTheme="base5" text="0P" />
        </Block>
        <Spacer height={50} />
        <Block alignItems={'center'}>
          <Text
            preset="textNormal12"
            t18n="delete_user:description"
            colorTheme="primary"
          />
          <Text
            preset="textNormal12"
            t18n="delete_user:description2"
            colorTheme="primary"
          />
        </Block>
        <Block alignSelf={'center'} paddingVertical={25}>
          <Button.Primary t18n="delete_user:button_title" onPress={onSubmit} />
        </Block>
        <Block alignItems={'center'}>
          <Button.Default onPress={handleGoToHome}>
            <Text
              preset="textNormal12"
              t18n="delete_user:continue"
              colorTheme="text_2"
            />
          </Button.Default>
        </Block>
      </WrapperBackground>
    </Block>
  );
};
export const ConfirmDeleteUser = memo(ConfirmDeleteUserComponent, isEqual);
