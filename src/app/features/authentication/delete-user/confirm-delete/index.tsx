import React, { memo } from 'react';

import isEqual from 'react-fast-compare';

import { dispatch } from '@common';
import { Block, Button, Spacer, Text, WrapperBackground } from '@components';
import { useSelector } from '@hooks';
import { navigate } from '@navigation/navigation-service';
import { BOTTOM_TAB } from '@navigation/screen-types';
import { deleteUserActions } from '@redux-slice';

const ConfirmDeleteUserComponent = () => {
  const point = useSelector(x => x.app.point);
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
            t18n="delete_user:confirm_delete_title"
            colorTheme="primary"
            lineHeight={18}
          />
          <Text
            preset="textNormal12"
            t18n="delete_user:confirm_delete_title2"
            colorTheme="primary"
            lineHeight={18}
          />
        </Block>
        <Spacer height={25} />
        <Block justifyContent={'center'} direction="row" alignItems={'center'}>
          <Text
            t18n="delete_user:point"
            preset="textBold16"
            colorTheme="base5"
            fontWeight={'bold'}
          />
          <Text
            preset="textBold16"
            colorTheme="base5"
            text={`${point}P`}
            fontWeight={'bold'}
          />
        </Block>
        <Spacer height={60} />
        <Block alignItems={'center'}>
          <Text
            preset="textNormal12"
            t18n="delete_user:description"
            colorTheme="primary"
            lineHeight={18}
          />
          <Text
            preset="textNormal12"
            t18n="delete_user:description2"
            colorTheme="primary"
            lineHeight={18}
          />
        </Block>
        <Block alignSelf={'center'} paddingVertical={25}>
          <Button.Primary t18n="delete_user:button_title" onPress={onSubmit} />
        </Block>
        <Spacer height={5} />
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
