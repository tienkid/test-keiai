import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { Block, Button, Spacer, Text, WrapperBackground } from '@components';
import { navigate } from '@navigation/navigation-service';
import { HOME_STACK } from '@navigation/screen-types';

const ConfirmDeleteUserComponent = () => {
  // function
  const onSubmit = async () => {
    navigate(HOME_STACK.DELETE_SUCCESS);
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
          <Text
            preset="textNormal12"
            t18n="delete_user:continue"
            colorTheme="text_2"
          />
        </Block>
      </WrapperBackground>
    </Block>
  );
};
export const ConfirmDeleteUser = memo(ConfirmDeleteUserComponent, isEqual);
