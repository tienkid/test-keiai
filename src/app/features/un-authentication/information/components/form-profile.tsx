import React, { useState } from 'react';
import { TextInput } from 'react-native';

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
} from '@components';
import { renderItemWithPattern } from '@components/parsed-text/utils';
// import { LabelOutline } from '@components/text-field/components/out-line/label-outline';
import {
  EMAIL_LENGTH,
  MAX_PHONE_NUMBER_LENGTH,
  NAME_LENGTH,
} from '@config/field-length';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInformationProfileType } from '@model/information';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { useTheme } from '@theme';
import { informationValidation } from '@validate/information';
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
    resolver: yupResolver(informationValidation),
  });
  const [isCheck, setIsCheck] = useState(false);

  // function
  const onSubmitKey = () => {
    formMethod.handleSubmit(onSubmit)();
  };

  const handleSelectedCountry = (type: MODAL_SELECTED_COUNTRY_TYPE) => () => {
    navigate(APP_SCREEN.MODAL_SELECTED_COUNTY, { type });
  };

  const handleCheck = () => {
    setIsCheck(is => !is);
  };

  console.log({ isCheck, tt: formMethod.formState.isValid });
  //effect

  // render
  return (
    <FormProvider {...formMethod}>
      <Block paddingBottom={insets.bottom} paddingHorizontal={15}>
        <Text
          preset="textXSmall"
          colorTheme="primary"
          t18n="common:indispensable_description"
        />
        <Spacer height={15} />
        <FormInput<FormInformationProfileType>
          name={'contact'}
          labelT18n={'information_profile:contact'}
          placeholderT18n={'information_profile:contact_placeholder'}
          requiredLabelT18n={'common:indispensable'}
        />
        <Spacer height={20} />
        <FormInput<FormInformationProfileType>
          name={'password'}
          placeholderT18n={'information_profile:password_placeholder'}
          labelT18n={'information_profile:password'}
          requiredLabelT18n={'common:indispensable'}
          secureTextEntry
          textContentType="none"
        />
        <TextInput />
        <Spacer height={10} />
        <FormInput<FormInformationProfileType>
          name={'confirm_password'}
          labelT18n={'information_profile:confirm_password'}
          requiredLabelT18n={'common:indispensable'}
          placeholderT18n={'information_profile:confirm_password_placeholder'}
          secureTextEntry
          textContentType={'none'}
        />
        <Spacer height={20} />
        <TwoHalfInput
          name_1="first_name"
          name_2="last_name"
          maxLength_1={NAME_LENGTH}
          maxLength_2={NAME_LENGTH}
          labelT18n="information_profile:your_name"
          placeholder_1_T18n="information_profile:your_name_placeholder_1"
          placeholder_2_T18n="information_profile:your_name_placeholder_2"
          requiredLabelT18n="common:indispensable"
        />
        <Spacer height={20} />
        <TwoHalfInput
          name_1="furigana_first_name"
          name_2="furigana_last_name"
          maxLength_1={NAME_LENGTH}
          maxLength_2={NAME_LENGTH}
          labelT18n="information_profile:furigana"
          placeholder_1_T18n="information_profile:furigana_placeholder_1"
          placeholder_2_T18n="information_profile:furigana_placeholder_2"
          requiredLabelT18n="common:indispensable"
        />
        <Spacer height={20} />
        <InputHaft
          labelT18n="information_profile:zip_code"
          placeholderT18n="information_profile:zip_code_placeholder"
          name={'zip_code'}
          containerStyle={{
            borderRadius: 8,
          }}
          keyboardType="numeric"
          inputStyle={{ paddingVertical: sizeScale(12) }}
          requiredLabelT18n="common:indispensable"
          wrapLabelStyle={{ paddingLeft: 0 }}
        />
        <Spacer height={10} />
        <TwoHalfInput
          name_1="country"
          name_2="city"
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
        />
        <FormInput<FormInformationProfileType>
          name={'name_address'}
          placeholderT18n={'information_profile:name_address'}
          requiredLabelT18n={'common:indispensable'}
        />
        <FormInput<FormInformationProfileType>
          name={'building_name'}
          placeholderT18n={'information_profile:building_name'}
          requiredLabelT18n={'common:indispensable'}
        />
        <Spacer height={20} />
        <FormInput<FormInformationProfileType>
          name={'phoneNumber'}
          labelT18n={'information_profile:phone_number'}
          placeholderT18n={'information_profile:phone_home_placeholder'}
          keyboardType="numeric"
          maxLength={MAX_PHONE_NUMBER_LENGTH}
          requiredLabelT18n={'common:indispensable'}
        />
        <Spacer height={20} />
        <FormInput<FormInformationProfileType>
          name={'email'}
          maxLength={EMAIL_LENGTH}
          labelT18n={'information_profile:email'}
          placeholderT18n={'information_profile:email_placeholder'}
          requiredLabelT18n={'common:indispensable'}
        />
        <Spacer height={35} />
        <Block direction={'row'} alignItems="center">
          <CheckBox value={isCheck} onToggle={handleCheck} />
          <ParsedText
            preset="linkXXXSmall"
            colorTheme="base1"
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
        <Spacer height={35} />
        <Block middle>
          <Button.Primary
            width={270}
            t18n="information_profile:btn_step"
            onPress={onSubmitKey}
            disabled={!(formMethod.formState.isValid && isCheck)}
          />
        </Block>
        <Spacer height={60} />
        {/* <Button.Default onPress={handleToLogin}>
          <Text
            t18n="information_profile:back_home"
            center
            colorTheme="border"
          />
        </Button.Default> */}
      </Block>
    </FormProvider>
  );
};
