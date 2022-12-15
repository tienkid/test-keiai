import React from 'react';

import { InputProps } from '@components/form-input/type';
import { TextProps } from '@components/text/type';
import { FormInformationProfileType } from '@model/information';
import { APP_SCREEN, UnAuthorizeParamsList } from '@navigation/screen-types';
import { StackScreenProps } from '@react-navigation/stack';
import { I18nKeys } from '@utils/i18n/locales';
export interface WrapperStepsProps {
  title?: I18nKeys | null;
  children?: React.ReactNode;
  // currentStep: number;
  HeaderTitleComponent?: React.ReactNode;
}

export type SelectCountryProps = StackScreenProps<
  UnAuthorizeParamsList,
  APP_SCREEN.MODAL_SELECTED_COUNTY
>;

export interface FormInformationProfileProps {
  onSubmit: (data: FormInformationProfileType) => void;
}

export type InputHaftProps<T extends Record<string, any>> = InputProps<T>;

export interface TwoHalfInputProps {
  labelT18n: TextProps['t18n'];
  name_1: any;
  name_2: any;
  maxLength_1?: number;
  maxLength_2?: number;
  placeholder_1_T18n: TextProps['t18n'];
  placeholder_2_T18n: TextProps['t18n'];
  requiredLabelT18n?: TextProps['t18n'];
  disabled?: boolean;
  rightChildren_1?: React.ReactNode;
  rightChildren_2?: React.ReactNode;
  labelT18n_2?: TextProps['t18n'];
  initZip?: string;
  handleShowCity?: () => void;
  handleShowCountry?: () => void;
}

export interface CountryInputProps {
  labelT18n: TextProps['t18n'];
  name: any;
  maxLength?: number;
  placeholder_T18n: TextProps['t18n'];
  requiredLabelT18n?: TextProps['t18n'];
  disabled?: boolean;
  rightChildren?: React.ReactNode;
  type: string;
  initZip?: string;
  handleShowCity?: () => void;
  handleShowCountry?: () => void;
}

export interface ListPreviewProps {
  informationPreview: FormInformationProfileType;
  // currentHeight: number | null;
  // onBackStep: () => void;
  onSubmit: (data?: FormInformationProfileType) => void;
  // onGetHeight: (height: number, step: StepType) => void;
}

export interface ProvinceType {
  pref_id: number;
  pref_code: number;
  pref_name: string;
  area_code: number;
  area_name: string;
  area_id: number;
  city_name: string;
}
export interface CityType {
  city_code: number;
  city_name: string;
  city_id: number;
  pref_code: number;
  pref_name: string;
  pref_id: number;
  area_code: number;
  area_name: string;
}
export interface PostalCodeChoice {
  pref_code: number;
  pref_name: string;
  pref_id: number;
  city: City[];
}

export interface City {
  city_code: number;
  city_name: string;
  city_id: number;
  town: Town[];
}

export interface Town {
  town_code: number;
  town_name: string;
  town_id: number;
  streets: any[];
}
export type StepType = '1' | '2';
