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
          color: theme.colors.text,
        },
        linkText: {
          color: theme.colors.text_2,
        },
      }),
    [theme.colors.text, theme.colors.text_2],
  );
};
