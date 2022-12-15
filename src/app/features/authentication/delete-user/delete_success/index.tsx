import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { logout } from '@common';
import { Block, Button, LocalImage, Spacer, Text } from '@components';
import { HeaderWithOutBack } from '@components/header-without-back';

const DeleteUserSuccessComponent = () => {
  // function
  const onSubmit = async () => {
    logout();
  };

  // render
  return (
    <Block block colorTheme="white" middle>
      <HeaderWithOutBack headerText="delete_user:header" />
      <Spacer height={70} />
      <Block width={100} height={42}>
        <LocalImage source="logo" resizeMode="contain" />
      </Block>
      <Spacer height={35} />
      <Block alignItems={'center'}>
        <Text
          preset="textNormal15"
          t18n="delete_user:confirm_title"
          colorTheme="base5"
          lineHeight={20}
        />
        <Text
          preset="textNormal15"
          t18n="delete_user:confirm_title2"
          colorTheme="base5"
          lineHeight={20}
        />
      </Block>
      <Block alignSelf={'center'} paddingTop={60}>
        <Button.Primary t18n="delete_user:ok" onPress={onSubmit} />
      </Block>
    </Block>
  );
};
export const DeleteUserSuccess = memo(DeleteUserSuccessComponent, isEqual);
