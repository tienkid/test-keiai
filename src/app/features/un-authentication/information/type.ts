import React from 'react';

import { InputProps } from '@components/form-input/type';
import { TextProps } from '@components/text/type';
import { FormInformationProfileType } from '@model/information';
import { I18nKeys } from '@utils/i18n/locales';

export interface WrapperStepsProps {
  title: I18nKeys;
  children?: React.ReactNode;
  currentStep: number;
}

export interface FormInformationProfileProps {
  onSubmit: (data: FormInformationProfileType) => void;
}

export type InputHaftProps<T extends Record<string, any>> = InputProps<T>;

export interface TwoHalfInputProps {
  disabled?: boolean;
  labelT18n: TextProps['t18n'];
  placeholder_1_T18n: TextProps['t18n'];
  placeholder_2_T18n: TextProps['t18n'];
  requiredLabelT18n?: TextProps['t18n'];
  rightChildren_1?: React.ReactNode;
  rightChildren_2?: React.ReactNode;
}
