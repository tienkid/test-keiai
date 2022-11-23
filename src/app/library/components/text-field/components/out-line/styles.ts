import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { sizeScale } from '@common';
import { useTheme } from '@theme';

export const useTextOutlineStyle = () => {
  // state
  const theme = useTheme();

  // result
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          borderWidth: 1,
          borderRadius: 8,
          borderColor: theme.colors.border,
          justifyContent: 'center',
          alignItems: 'center',
        },
        input: {
          color: theme.colors.base5,
          borderBottomColor: 'transparent',
          paddingHorizontal: sizeScale(10),
          flex: 1,
          height: 40,
        },
        text: {
          alignSelf: 'flex-start',
          zIndex: 4,
          left: 5,
        },
        wrapLabel: {
          // paddingLeft: sizeScale(16),
        },
        content: {
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        },
        wrapPlaceHolder: {
          position: 'absolute',
          alignSelf: 'center',
          paddingHorizontal: sizeScale(10),
        },
        flex: {
          flex: 1,
          height: '100%',
        },
        required: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        labelContainer: {
          flexDirection: 'row',
          alignItems: 'center',
        },
      }),
    [theme.colors.base5, theme.colors.border],
  );
};
