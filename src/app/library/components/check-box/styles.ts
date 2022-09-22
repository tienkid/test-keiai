import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { sizeScale } from '@common';
import { useTheme } from '@theme';

const DIMENSIONS = { width: 24, height: 24 };
const BORDER_WIDTH = sizeScale(1.5);

export const useCheckBoxStyle = () => {
  // state
  const theme = useTheme();

  // result
  return useMemo(() => {
    return StyleSheet.create({
      root: {
        flexDirection: 'row',
        paddingVertical: 4,
        alignSelf: 'flex-start',
      },
      outline: {
        ...DIMENSIONS,
        marginTop: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: BORDER_WIDTH,
        borderColor: theme.colors.baseCheckBox,
        borderRadius: 4,
      },
      fill: {
        width: DIMENSIONS.width,
        height: DIMENSIONS.height,
        backgroundColor: theme.colors.secondary,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
      },
      label: {
        paddingLeft: 8,
      },
    });
  }, [theme.colors.baseCheckBox, theme.colors.secondary]);
};
