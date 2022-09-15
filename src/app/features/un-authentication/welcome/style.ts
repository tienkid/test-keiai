import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@theme';

export const useWelcomeStyle = () => {
  // state
  const theme = useTheme();

  return useMemo(
    () =>
      StyleSheet.create({
        linkText: {
          color: theme.colors.text_2,
        },
        highlineText: {
          color: theme.colors.primary,
        },
      }),
    [theme.colors.primary, theme.colors.text_2],
  );
};
