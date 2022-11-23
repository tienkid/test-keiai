import { StyleSheet } from 'react-native';

import { sizeScale } from '@common';
import { FontDefault } from '@theme/typography';
export const textPresets = StyleSheet.create({
  linkTitle: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(24),
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
    fontSize: sizeScale(12),
    color: '#000000',
  },
  linkXXXSmall: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(10),
    color: '#000000',
  },
  textMedium: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(16),
    color: '#000000',
  },
  textSmall: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(14),
    color: '#000000',
  },
  textXSmall: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(11),
    color: '#000000',
  },
  textXXSmall: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(9),
    color: '#000000',
  },
  textNormal: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(14),
    fontWeight: '400',
  },
  textNormal12: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(12),
    color: '#FFFFFF',
  },
  textNormal15: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(15),
    color: '#FFFFFF',
    fontWeight: '400',
  },
  textBold16: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(16),
    color: '#FFFFFF',
    fontWeight: '700',
  },
  textBold14: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(14),
    lineHeight: 20,
    color: '#FFFFFF',
  },
  textBold40: {
    fontFamily: FontDefault.primary,
    fontSize: sizeScale(40),
    color: '#FFFFFF',
    fontWeight: '700',
  },
  default: {},
});

export type TextPresetNames = keyof typeof textPresets;
