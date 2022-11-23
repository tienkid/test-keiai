import React, { useMemo } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

import { useTheme } from '@theme';

import { stylesText, stylesView } from './preset';
import { ButtonProps } from './type';

import { Text } from '../text';

export const ButtonPrimary = (props: ButtonProps) => {
  // state
  const {
    text,
    t18n,
    children,
    disabled,
    buttonColor,
    textColorTheme,
    style: styleOverride = {},
    textStyle: textStyleOverride = {},
    preset = 'primary',
    textColor = 'white',
    buttonColorTheme = 'primary',
    width = 250,
    ...rest
  } = props;
  const theme = useTheme();

  // style
  const viewStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        backgroundColor: buttonColorTheme
          ? theme.colors[buttonColorTheme]
          : buttonColor,
        width: width,
      },
      disabled && {
        backgroundColor: theme.colors.border,
      },
    ],
    [buttonColor, buttonColorTheme, disabled, theme.colors, width],
  );

  // render
  return (
    <TouchableOpacity
      style={[stylesView[preset], viewStyle, styleOverride]}
      disabled={disabled}
      {...rest}>
      {children || (
        <Text
          t18n={t18n}
          text={text}
          style={[stylesText[preset], textStyleOverride]}
          color={textColor}
          colorTheme={textColorTheme}
        />
      )}
    </TouchableOpacity>
  );
};
