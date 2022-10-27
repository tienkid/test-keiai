import { StyleSheet } from 'react-native';

import { sizeScale } from '@common';

export const styles = StyleSheet.create({
  loading: {
    width: sizeScale(64),
    height: sizeScale(64),
    borderRadius: sizeScale(32),
  },
});
