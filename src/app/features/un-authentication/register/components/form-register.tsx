import React from 'react';

import { Block, Button, Spacer, Text } from '@components';
import { LabelOutline } from '@components/text-field/components/out-line/label-outline';
import { useSelector } from '@hooks';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';

import { FormRegisterProps } from '../type';

export const FormRegister = ({ onSubmit }: FormRegisterProps) => {
  // state
  const register = useSelector(x => x.app.registerData);
  const profile = useSelector(x => x.app.profile);
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
    navigate(APP_SCREEN.LOGIN);
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
        <LabelOutline labelT18n="information_profile:phone_number" />
        <Block marginTop={11}>
          <Text
            text={register?.phoneNumber ?? profile?.phone_number}
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
