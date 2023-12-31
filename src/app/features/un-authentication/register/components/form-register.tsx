import React from 'react';
import { Linking } from 'react-native';

import { Block, Button, Spacer, Text } from '@components';
import { useSelector } from '@hooks';

import { FormRegisterProps } from '../type';

export const FormRegister = ({ onSubmit, type }: FormRegisterProps) => {
  // state
  const register = useSelector(x => x.app.registerData);
  const profile = useSelector(x => x.app.profileWrap);
  // const formMethod = useForm<FormRegisterType>({
  //   mode: 'all',
  //   resolver: yupResolver(registerValidation),
  // });

  // function
  const onSubmitKey = () => {
    // formMethod.handleSubmit(onSubmit)();
    onSubmit();
  };
  const onPressChangePhone = () => {
    // navigate(APP_SCREEN.LOGIN);
    Linking.openURL('https://ki-group.co.jp/owners/app/inquiry/');
  };
  // render
  return (
    <Block paddingHorizontal={15}>
      <Block alignItems={'center'}>
        <Text
          preset="textNormal12"
          colorTheme="base1"
          t18n="register:warning_register"
        />
      </Block>
      <Block paddingTop={50} middle>
        {/* <LabelOutline labelT18n="information_profile:phone_number" /> */}
        <Text
          t18n="information_profile:phone_number"
          preset="textNormal12"
          colorTheme="base5"
        />
        <Block marginTop={11}>
          <Text
            text={type ? profile?.phone_number : register?.phoneNumber}
            preset="linkMedium"
            colorTheme="base5"
            fontWeight={'400'}
          />
        </Block>
      </Block>
      {/* <FormInput<FormRegisterType>
          name={'phoneNumber'}
          labelT18n={'login:phoneNumber'}
          placeholderT18n={'login:phoneNumberPlaceholder'}
          rxRemove={rxNotNumber}
          isShowMsgError={false}
        />
        <Block paddingVertical={5} paddingHorizontal={10}>
          <Text t18n="msg:MSG_003" preset="textBold16" colorTheme="error" />
        </Block> */}
      <Spacer height={60} />
      <Block alignSelf={'center'}>
        <Button.Primary t18n="register:button_phone" onPress={onSubmitKey} />
      </Block>
      <Spacer height={35} />
      <Block alignSelf={'center'}>
        <Text
          onPress={onPressChangePhone}
          t18n="register:change_phone"
          preset="textNormal12"
          colorTheme="text_2"
        />
      </Block>
    </Block>
  );
};
