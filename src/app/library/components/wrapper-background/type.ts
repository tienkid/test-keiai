import React from 'react';
import { StatusBarStyle } from 'react-native';

import { TextPresetNames } from '@components/text/preset';
import { I18nKeys } from '@utils/i18n/locales';

export interface WrapperBackgroundTypes {
  /**
   * Text which is string.
   * @default undefined
   */
  title?: string;

  /**
   * Text which is looked up via i18n.
   * @default undefined
   */
  titleT18n?: I18nKeys;

  paddingTop?: number;

  barStyle?: StatusBarStyle;

  titlePreset?: TextPresetNames;

  canBack?: boolean;

  isHiddenLogo?: boolean;

  scroll?: boolean;

  headerTitleT18n?: I18nKeys;
  /**
   * Children of text
   * @default undefined
   */
  children?: React.ReactNode;
}
