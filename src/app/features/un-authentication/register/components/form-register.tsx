import React from 'react';

import { Block, Button, Spacer, Text } from '@components';
import { LabelOutline } from '@components/text-field/components/out-line/label-outline';
import { useSelector } from '@hooks';

import { FormRegisterProps } from '../type';

export const FormRegister = ({ onSubmit }: FormRegisterProps) => {
  // state
  const register = useSelector(x => x.app.registerData);
  const profile = useSelector(x => x.app.profile);
  console.log(profile?.phone_number, 'profile');
  // const formMethod = useForm<FormRegisterType>({
  //   mode: 'all',
  //   resolver: yupResolver(registerValidation),
  // });

  // function
  const onSubmitKey = () => {
    // formMethod.handleSubmit(onSubmit)();
    onSubmit();
  };

  // render
  return (
    <Block paddingHorizontal={20}>
      <Block alignItems={'center'}>
        <Text
          preset="linkMedium"
          colorTheme="base9"
          t18n="register:header_text"
        />
        <Spacer height={25} />
        <Text
          preset="linkMedium"
          colorTheme="primary"
          t18n="register:warning_register"
        />
      </Block>
      <Block paddingTop={25}>
        <LabelOutline
          labelT18n="information_profile:phone_number"
          wrapLabelStyle={{ paddingLeft: 0 }}
        />
        <Block marginTop={14} paddingLeft={5}>
          <Text
            text={register?.phoneNumber ?? profile?.phone_number}
            preset="linkMedium"
            colorTheme="base7"
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
      <Spacer height={40} />
      <Button.Primary
        t18n="register:button_phone"
        onPress={onSubmitKey}
        // disabled={!formMethod.formState.isValid}
      />
    </Block>
  );
};
