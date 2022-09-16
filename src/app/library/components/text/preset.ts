import { StyleSheet } from 'react-native';

import { sizeScale } from '@common';
import { FontDefault } from '@theme/typography';
export const textPresets = StyleSheet.create({
  linkTitle: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(20),
    color: '#000000',
    fontWeight: '400',
  },
  linkSubtitle: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(20),
    color: '#000000',
  },
  linkLarge: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(18),
    color: '#000000',
  },
  linkMedium: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(16),
    color: '#000000',
  },
  linkSmall: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(14),
    color: '#000000',
  },
  linkXSmall: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(11),
    color: '#000000',
  },
  linkXXSmall: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(9),
    color: '#000000',
  },
  textMedium: {
    fontFamily: FontDefault.secondary,
    fontSize: sizeScale(16),
    color: '#000000',
  },
  textSmall: {
    fontFamily: FontDefault.secondary,
    fontSize: sizeScale(14),
    color: '#000000',
  },
  textXSmall: {
    fontFamily: FontDefault.secondary,
    fontSize: sizeScale(11),
    color: '#000000',
  },
  textXXSmall: {
    fontFamily: FontDefault.secondary,
    fontSize: sizeScale(9),
    color: '#000000',
  },
  textNormal: {
    fontFamily: FontDefault.secondary,
    fontSize: sizeScale(16),
    lineHeight: 20,
    color: '#FFFFFF',
  },
  textBold16: {
    fontFamily: FontDefault.secondary,
    fontSize: sizeScale(16),
    // lineHeight: 20,
    color: '#FFFFFF',
  },
  textBold14: {
    fontFamily: FontDefault.secondary,
    fontSize: sizeScale(14),
    lineHeight: 20,
    color: '#FFFFFF',
  },
  default: {},
});

export type TextPresetNames = keyof typeof textPresets;
