import React, { useCallback, useEffect, useState } from 'react';
import { Linking } from 'react-native';

import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { dispatch, formatZipCode, sizeScale } from '@common';
import {
  Block,
  Button,
  CheckBox,
  FormInput,
  Icon as IconCustom,
  ParsedText,
  Spacer,
  Text,
} from '@components';
import { renderItemWithPattern } from '@components/parsed-text/utils';
// import { LabelOutline } from '@components/text-field/components/out-line/label-outline';
import {
  EMAIL_LENGTH,
  MAX_PHONE_NUMBER_LENGTH,
  MAX_ZIP_CODE,
  NAME_LENGTH,
} from '@config/field-length';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from '@hooks';
import { FormInformationProfileType } from '@model/information';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { useRoute } from '@react-navigation/native';
import { appActions, registerActions } from '@redux-slice';
import { useTheme } from '@theme';
import { informationValidation } from '@validate/information';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { FormCountry } from './form-country';
import { InputHaft } from './input-half';
import { TwoHalfInput } from './two-half-input';

import { styles } from '../style';
import {
  CityType,
  FormInformationProfileProps,
  PostalCodeChoice,
  ProvinceType,
} from '../type';

export const FormInformationProfile = ({
  onSubmit,
}: FormInformationProfileProps) => {
  // state
  const route = useRoute();
  const [t] = useTranslation();
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const formMethod = useForm<FormInformationProfileType>({
    mode: 'all',
    resolver: yupResolver(informationValidation),
  });
  const zipCode = useSelector(x => x.app.zipCode);
  const provinceChoice = useSelector(x => x.app.provinceChoice);
  const dataProvince = useSelector(x => x.app.dataProvince);
  const dataCity = useSelector(x => x.app.dataCity);
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [passwordConfirmShown, setPasswordConfirmShown] =
    useState<boolean>(false);

  const [isCheck, setIsCheck] = useState(false);
  // function
  const onTogglePassword = () => {
    setPasswordShown(e => !e);
  };
  const onTogglePasswordConfirm = () => {
    setPasswordConfirmShown(e => !e);
  };
  const onSubmitKey = () => {
    formMethod.handleSubmit(onSubmit)();
  };

  // const handleSelectedCountry = (type: MODAL_SELECTED_COUNTRY_TYPE) => () => {
  //   if (type === MODAL_SELECTED_COUNTRY_TYPE.COUNTRY) {
  //     navigate(APP_SCREEN.MODAL_SELECTED_COUNTY, {
  //       type: 'country',
  //       data: dataProvince,
  //       screenPrevious: route.name,
  //     });
  //   } else {
  //     navigate(APP_SCREEN.MODAL_SELECTED_COUNTY, {
  //       type: 'city',
  //       data: dataCity,
  //       screenPrevious: route.name,
  //     });
  //   }
  // };

  const handleShowCountry = () => {
    navigate(APP_SCREEN.MODAL_SELECTED_COUNTY, {
      type: 'country',
      data: dataProvince,
      screenPrevious: route.name,
    });
  };
  const handleShowCity = () => {
    navigate(APP_SCREEN.MODAL_SELECTED_COUNTY, {
      type: 'city',
      data: dataCity,
      screenPrevious: route.name,
    });
  };
  const handleCheck = () => {
    setIsCheck(is => !is);
  };
  const handleGetProvinceSuccess = (data: ProvinceType[]) => {
    dispatch(appActions.setProvinceData(data));
  };
  const zip_code = formMethod.watch('zip_code');
  useEffect(() => {
    if (zip_code && zip_code.length === 7) {
      const code = formatZipCode(zip_code);
      dispatch(registerActions.getPostalCode(code));
    } else {
      if (zipCode?.city) {
        dispatch(appActions.setZipCode(undefined));
      }
    }
  }, [zip_code]);

  useEffect(() => {
    if (zipCode?.city && zipCode.city[0].town[0].town_name) {
      formMethod.setValue('name_address', zipCode.city[0].town[0].town_name);
    }
  }, [zipCode]);
  // const handleSetZipCode = () => {
  //   dispatch(appActions.setZipCode(formMethod.getValues('zip_code')));
  //   console.log(formMethod.getValues('zip_code'), 'formMethod.getValues()');
  // };

  useEffect(() => {
    return () => {
      dispatch(appActions.setZipCode({} as PostalCodeChoice));
    };
  }, []);
  const getProvince = useCallback(() => {
    dispatch(registerActions.getProvince(handleGetProvinceSuccess));
  }, []);

  const handleGetCitySuccess = (data: CityType[]) => {
    dispatch(appActions.setCityData(data));
  };
  const getCity = useCallback(() => {
    if (provinceChoice.pref_id) {
      dispatch(
        registerActions.getCity(
          `pref_code=${provinceChoice.pref_code}`,
          handleGetCitySuccess,
        ),
      );
    }
  }, [provinceChoice]);
  useEffect(() => {
    getCity();
  }, [getCity]);

  //effect
  useEffect(() => {
    getProvince();
  }, [getProvince]);

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
          secureTextEntry={!passwordShown}
          textContentType="none"
          nameTrigger={
            formMethod.formState.dirtyFields.confirm_password
              ? 'confirmPassword'
              : undefined
          }
          keyboardType="ascii-capable"
          rightChildren={
            <Button.Default onPress={onTogglePassword}>
              <Block direction="row">
                <IconCustom icon={passwordShown ? 'eye' : 'eye_close'} />
                <Spacer width={10} />
              </Block>
            </Button.Default>
          }
        />
        <Spacer height={10} />
        <FormInput<FormInformationProfileType>
          name={'confirm_password'}
          nameTrigger={'password'}
          labelT18n={'information_profile:confirm_password'}
          requiredLabelT18n={'common:indispensable'}
          placeholderT18n={'information_profile:confirm_password_placeholder'}
          secureTextEntry={!passwordConfirmShown}
          textContentType={'none'}
          keyboardType="ascii-capable"
          rightChildren={
            <Button.Default onPress={onTogglePasswordConfirm}>
              <Block direction="row">
                <IconCustom icon={passwordConfirmShown ? 'eye' : 'eye_close'} />
                <Spacer width={10} />
              </Block>
            </Button.Default>
          }
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
          // onEndEditing={handleSetZipCode}
          placeholderT18n="information_profile:zip_code_placeholder"
          name={'zip_code'}
          containerStyle={{
            borderRadius: 8,
          }}
          maxLength={MAX_ZIP_CODE}
          keyboardType="numeric"
          requiredLabelT18n="common:indispensable"
        />
        <Spacer height={10} />
        <FormCountry
          name_1="country"
          name_2="city"
          labelT18n="information_profile:address"
          placeholder_1_T18n="information_profile:country"
          placeholder_2_T18n="information_profile:city"
          requiredLabelT18n="common:indispensable"
          labelT18n_2="information_profile:address"
          handleShowCity={handleShowCity}
          handleShowCountry={handleShowCountry}
          rightChildren_1={
            <Icon
              name="keyboard-arrow-down"
              size={sizeScale(26)}
              color={theme.colors.base2}
            />
          }
          rightChildren_2={
            <Icon
              name="keyboard-arrow-down"
              size={sizeScale(26)}
              color={theme.colors.base2}
            />
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
                onPress: () =>
                  Linking.openURL('https://ki-group.co.jp/policy/privacy/'),
                style: styles.linkText,
              },
              {
                pattern: /\[([^:]+):2\]/i,
                onPress: () =>
                  Linking.openURL('https://ki-group.co.jp/member/agreement'),
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
