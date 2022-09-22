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
          borderRadius: 30,
          borderColor: theme.colors.border,
          justifyContent: 'center',
        },
        input: {
          color: theme.colors.text,
          borderBottomColor: 'transparent',
          paddingVertical: sizeScale(17),
          paddingHorizontal: sizeScale(18),
          flex: 1,
        },
        text: {
          alignSelf: 'flex-start',
          zIndex: 4,
          left: 5,
        },
        wrapLabel: {
          paddingLeft: sizeScale(16),
        },
        content: {
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        },
        wrapPlaceHolder: {
          position: 'absolute',
          alignSelf: 'center',
          paddingHorizontal: sizeScale(18),
        },
        flex: {
          flex: 1,
          height: '100%',
        },
        required: {
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: sizeScale(4),
          backgroundColor: theme.colors.statusError,
          paddingHorizontal: sizeScale(8),
          paddingVertical: sizeScale(4),
        },
        labelContainer: {
          flexDirection: 'row',
          alignItems: 'center',
        },
      }),
    [theme.colors.border, theme.colors.statusError, theme.colors.text],
  );
};
