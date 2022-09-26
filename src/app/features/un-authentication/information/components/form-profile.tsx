import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MODAL_SELECTED_COUNTRY_TYPE, sizeScale } from '@common';
import {
  Block,
  Button,
  CheckBox,
  FormInput,
  ParsedText,
  Spacer,
  Text,
  Trouble,
} from '@components';
import { renderItemWithPattern } from '@components/parsed-text/utils';
import { LabelOutline } from '@components/text-field/components/out-line/label-outline';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormLoginType } from '@model/authentication';
import { FormInformationProfileType } from '@model/information';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { useTheme } from '@theme';
import { loginValidation } from '@validate/login';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { InputHaft } from './input-half';
import { TwoHalfInput } from './two-half-input';

import { styles } from '../style';
import { FormInformationProfileProps } from '../type';

export const FormInformationProfile = ({
  onSubmit,
}: FormInformationProfileProps) => {
  // state
  const [t] = useTranslation();
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const formMethod = useForm<FormInformationProfileType>({
    mode: 'all',
    resolver: yupResolver(loginValidation),
  });

  // function
  const onSubmitKey = () => {
    formMethod.handleSubmit(onSubmit)();
  };

  const handleToLogin = () => {
    navigate(APP_SCREEN.LOGIN);
  };

  const handleSelectedCountry = (type: MODAL_SELECTED_COUNTRY_TYPE) => () => {
    navigate(APP_SCREEN.MODAL_SELECTED_COUNTY, { type });
  };

  // render
  return (
    <FormProvider {...formMethod}>
      <Block
        paddingHorizontal={10}
        marginTop={31}
        paddingBottom={insets.bottom}>
        <FormInput<FormLoginType>
          name={'phoneNumber'}
          labelT18n={'information_profile:contact'}
          placeholderT18n={'information_profile:contact_placeholder'}
          requiredLabelT18n={'common:indispensable'}
          containerStyle={{
            borderRadius: 8,
          }}
          inputStyle={{ paddingVertical: sizeScale(12) }}
          wrapLabelStyle={{ paddingLeft: 0 }}
        />
        <Spacer height={16} />
        <FormInput<FormLoginType>
          name={'password'}
          placeholderT18n={'information_profile:password_placeholder'}
          labelT18n={'information_profile:password'}
          requiredLabelT18n={'common:indispensable'}
          containerStyle={{
            borderRadius: 8,
          }}
          inputStyle={{ paddingVertical: sizeScale(12) }}
          wrapLabelStyle={{ paddingLeft: 0 }}
        />
        <Spacer height={16} />
        <FormInput<FormLoginType>
          name={'password'}
          labelT18n={'information_profile:confirm_password'}
          requiredLabelT18n={'common:indispensable'}
          containerStyle={{
            borderRadius: 8,
          }}
          inputStyle={{ paddingVertical: sizeScale(12) }}
          wrapLabelStyle={{ paddingLeft: 0 }}
        />
        <Spacer height={16} />
        <TwoHalfInput
          labelT18n="information_profile:your_name"
          placeholder_1_T18n="information_profile:your_name_placeholder_1"
          placeholder_2_T18n="information_profile:your_name_placeholder_2"
          requiredLabelT18n="common:indispensable"
        />
        <Spacer height={16} />
        <TwoHalfInput
          labelT18n="information_profile:furigana"
          placeholder_1_T18n="information_profile:furigana_placeholder_1"
          placeholder_2_T18n="information_profile:furigana_placeholder_2"
          requiredLabelT18n="common:indispensable"
        />
        <Spacer height={16} />
        <InputHaft
          labelT18n="information_profile:zip_code"
          placeholderT18n="information_profile:zip_code_placeholder"
          name={''}
          containerStyle={{
            borderRadius: 8,
          }}
          inputStyle={{ paddingVertical: sizeScale(12) }}
          requiredLabelT18n="common:indispensable"
          wrapLabelStyle={{ paddingLeft: 0 }}
        />
        <Spacer height={16} />
        <TwoHalfInput
          labelT18n="information_profile:address"
          placeholder_1_T18n="information_profile:country"
          placeholder_2_T18n="information_profile:city"
          requiredLabelT18n="common:indispensable"
          rightChildren_1={
            <Button.Default
              onPress={handleSelectedCountry(
                MODAL_SELECTED_COUNTRY_TYPE.COUNTRY,
              )}>
              <Icon
                name="keyboard-arrow-down"
                size={sizeScale(26)}
                color={theme.colors.base2}
              />
            </Button.Default>
          }
          rightChildren_2={
            <Button.Default
              onPress={handleSelectedCountry(MODAL_SELECTED_COUNTRY_TYPE.CITY)}>
              <Icon
                name="keyboard-arrow-down"
                size={sizeScale(26)}
                color={theme.colors.base2}
              />
            </Button.Default>
          }
          disabled
        />
        <FormInput<FormLoginType>
          name={'phoneNumber'}
          placeholderT18n={'information_profile:name_address'}
          requiredLabelT18n={'common:indispensable'}
          containerStyle={{
            borderRadius: 8,
          }}
          inputStyle={{ paddingVertical: sizeScale(12) }}
        />
        <FormInput<FormLoginType>
          name={'phoneNumber'}
          placeholderT18n={'information_profile:building_name'}
          requiredLabelT18n={'common:indispensable'}
          containerStyle={{
            borderRadius: 8,
          }}
          inputStyle={{ paddingVertical: sizeScale(12) }}
        />
        <Block marginTop={21}>
          <LabelOutline
            labelT18n="information_profile:phone_number"
            wrapLabelStyle={{ paddingLeft: 0 }}
          />
          <Block marginTop={14} paddingLeft={5}>
            <Text text="09666666666" preset="linkMedium" colorTheme="base1" />
          </Block>
        </Block>
        <Spacer height={16} />
        <FormInput<FormLoginType>
          name={'phoneNumber'}
          labelT18n={'information_profile:phone_home'}
          placeholderT18n={'information_profile:phone_home_placeholder'}
          containerStyle={{
            borderRadius: 8,
          }}
          inputStyle={{ paddingVertical: sizeScale(12) }}
          wrapLabelStyle={{ paddingLeft: 0 }}
        />
        <Spacer height={16} />
        <FormInput<FormLoginType>
          name={'phoneNumber'}
          labelT18n={'information_profile:email'}
          placeholderT18n={'information_profile:email_placeholder'}
          containerStyle={{
            borderRadius: 8,
          }}
          inputStyle={{ paddingVertical: sizeScale(12) }}
          wrapLabelStyle={{ paddingLeft: 0 }}
          requiredLabelT18n={'common:indispensable'}
        />
        <Spacer height={36} />
        <Block direction={'row'} paddingLeft={8} alignItems="center">
          <CheckBox />
          <ParsedText
            preset="textXXSmall"
            parse={[
              {
                pattern: /\[([^:]+):1\]/i,
                renderText: renderItemWithPattern,
                onPress: () => null,
                style: styles.linkText,
              },
              {
                pattern: /\[([^:]+):2\]/i,
                onPress: () => null,
                renderText: renderItemWithPattern,
                style: styles.linkText,
              },
            ]}>
            {t('information_profile:term_policy')}
          </ParsedText>
        </Block>
        <Spacer height={28} />
        <Button.Primary
          t18n="information_profile:btn_step"
          onPress={onSubmitKey}
          disabled={!formMethod.formState.isValid}
          style={{ borderRadius: 8 }}
        />
        <Spacer height={25} />
        <Button.Default onPress={handleToLogin}>
          <Text
            t18n="information_profile:back_home"
            center
            colorTheme="border"
          />
        </Button.Default>
      </Block>
      <Trouble />
    </FormProvider>
  );
};
