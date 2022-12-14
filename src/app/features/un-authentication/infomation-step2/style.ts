import { StyleSheet } from 'react-native';

import { sizeScale } from '@common';
import { ColorDefault } from '@theme/color';

export const styles = StyleSheet.create({
  container: {
    borderRadius: sizeScale(8),
  },
  buttonEdit: {
    minWidth: sizeScale(65),
    maxHeight: sizeScale(30),
  },
  inputHaftStyle: {
    width: '50%',
  },
  leftIcon: {
    transform: [{ rotate: '180deg' }],
  },
  linkText: {
    color: ColorDefault.primary,
  },
});
