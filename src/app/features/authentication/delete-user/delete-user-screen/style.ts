import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@theme';

export const useLoginStyle = () => {
  // state
  const theme = useTheme();

  // result
  return useMemo(
    () =>
      StyleSheet.create({
        text: {
          color: theme.colors.base5,
        },
        linkText: {
          color: theme.colors.text_2,
        },
      }),
    [theme.colors.base5, theme.colors.text_2],
  );
};
