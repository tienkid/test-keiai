import { StyleSheet } from 'react-native';

import { sizeScale } from '@common';
import { ColorDefault } from '@theme/color';
import { FontDefault } from '@theme/typography';

export const stylesView = StyleSheet.create({
  primary: {
    borderRadius: sizeScale(30),
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorDefault.primary,
  },

  outline: {
    borderRadius: sizeScale(30),
    // paddingVertical: sizeScale(15),
    height: 40,
    backgroundColor: ColorDefault.primary,
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: ColorDefault.primary,
  },
  default: {},
});

export const stylesText = StyleSheet.create({
  primary: {
    fontSize: sizeScale(15),
    fontWeight: '400',
    fontFamily: FontDefault.primary,
  },
  outline: {
    fontSize: sizeScale(15),
    fontWeight: '400',
    fontFamily: FontDefault.primary,
  },
  default: {},
});

export type ButtonPresetNames = keyof typeof stylesView;
