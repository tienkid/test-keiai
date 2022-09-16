import { StyleSheet } from 'react-native';

import { sizeScale } from '@common';
import { ColorDefault } from '@theme/color';
import { FontDefault } from '@theme/typography';

export const stylesView = StyleSheet.create({
  primary: {
    borderRadius: sizeScale(30),
    paddingVertical: sizeScale(18),
    backgroundColor: ColorDefault.primary,
    alignItems: 'center',
  },

  outline: {
    borderRadius: sizeScale(30),
    paddingVertical: sizeScale(18),
    backgroundColor: ColorDefault.primary,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: ColorDefault.primary,
  },
  default: {},
});

export const stylesText = StyleSheet.create({
  primary: {
    fontSize: sizeScale(16),
    fontFamily: FontDefault.primary,
  },

  outline: {
    fontSize: sizeScale(16),
    fontFamily: FontDefault.primary,
  },
  default: {},
});

export type ButtonPresetNames = keyof typeof stylesView;
