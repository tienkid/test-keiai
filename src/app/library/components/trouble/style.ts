import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@theme';

export const useTroubleStyle = () => {
  // state
  const theme = useTheme();

  // result
  return useMemo(
    () =>
      StyleSheet.create({
        linkText: {
          color: theme.colors.text_2,
        },
      }),
    [theme.colors.text_2],
  );
};
