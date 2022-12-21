/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';

import { useTranslation } from 'react-i18next';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import { enhance, onCheckType } from '@common';
import { Spacer } from '@components/spacer';
import { textPresets } from '@components/text/preset';
import { useTheme } from '@theme';

import { ErrorOutline } from './error-outline';
import { LabelOutline } from './label-outline';
import { useTextOutlineStyle } from './styles';
import { InputOutlineProps } from './type';

import { Text } from '../../../text';

export const InputOutline = forwardRef<any, InputOutlineProps>((props, ref) => {
  // state
  const [t] = useTranslation();
  const theme = useTheme();
  const [localDefaultValue, setLocalDefaultValue] = useState('');
  const [value, setValue] = useState('');
  const styles = useTextOutlineStyle();

  // props
  const {
    label,
    labelT18n,
    rxRemove,
    placeholder,
    nameTrigger,
    defaultValue,
    rightChildren,
    placeholderT18n,
    trigger,
    onBlur,
    onFocus,
    onSubmit,
    onChangeText,
    error = undefined,
    disabled = false,
    isSuccess = false,
    isShowMsgError = true,
    requiredLabel,
    requiredLabelT18n,
    colorLabel,
    errorPreset,
    inputStyle: inputStyleOverwrite = {},
    wrapLabelStyle: wrapLabelStyleOverwrite = {},
    containerStyle: containerStyleOverwrite = {},
    placeholderColor = theme.colors.border,
    errorBorderColor = theme.colors.statusError,
    successBorderColor = theme.colors.statusSuccess,
    disabledBorderColor = theme.colors.border,
    ...rest
  } = props;

  // reanimated
  const borderColor = useDerivedValue(() => {
    switch (true) {
      case disabled:
        return disabledBorderColor;
      case !isShowMsgError && error:
        return errorBorderColor;
      case !!error:
        return errorBorderColor;
      case isSuccess:
        return successBorderColor;
      default:
        return disabledBorderColor;
    }
  });

  // function
  const _onFocus = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (onCheckType(onFocus, 'function')) {
      onFocus(e);
    }
  };

  const _onBlur = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (onCheckType(onBlur, 'function')) {
      onBlur(e);
    }
  };

  const _onChangeText = (text: string) => {
    const actualText =
      rxRemove !== undefined ? text.replace(rxRemove, '') : text;
    setValue(actualText);
    if (onCheckType(onChangeText, 'function')) {
      onChangeText(actualText);
    }
    if (
      onCheckType(trigger, 'function') &&
      onCheckType(nameTrigger, 'string')
    ) {
      setTimeout(() => {
        trigger(nameTrigger);
      }, 0);
    }
  };

  // effect
  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
      setLocalDefaultValue(String(defaultValue));
    }
  }, [defaultValue]);

  // string
  const placeHolder = useMemo(
    () => (placeholderT18n && t(placeholderT18n)) || placeholder || '',
    [placeholder, placeholderT18n, t],
  );

  const wrapInput = useMemo(
    () => enhance([styles.input, textPresets.textNormal, inputStyleOverwrite]),
    [inputStyleOverwrite, styles.input],
  );

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    borderColor: borderColor.value,
  }));

  // render
  return (
    <React.Fragment>
      <LabelOutline
        disabled={disabled}
        label={label}
        labelT18n={labelT18n}
        colorLabel={colorLabel}
        requiredLabel={requiredLabel}
        requiredLabelT18n={requiredLabelT18n}
        wrapLabelStyle={wrapLabelStyleOverwrite}
      />
      <Spacer height={8} />
      <Animated.View
        style={[
          styles.container,
          containerStyleOverwrite,
          containerAnimatedStyle,
        ]}>
        <View style={[styles.content]}>
          {(placeholderT18n || placeholder) &&
            (value.length === 0 || rest.value?.length === 0) && (
              <View style={[styles.wrapPlaceHolder]} pointerEvents={'none'}>
                <Text
                  t18n={placeholderT18n}
                  text={placeHolder}
                  color={placeholderColor}
                  preset={'textNormal15'}
                />
              </View>
            )}
          <View style={[styles.flex]}>
            <TextInput
              defaultValue={localDefaultValue}
              autoCorrect={false}
              editable={!disabled}
              clearButtonMode={'never'}
              style={[wrapInput]}
              ref={ref}
              onSubmitEditing={onSubmit}
              {...rest}
              onChangeText={_onChangeText}
              onFocus={_onFocus}
              onBlur={_onBlur}
            />
          </View>
          {rightChildren}
        </View>
      </Animated.View>
      <ErrorOutline
        error={isShowMsgError ? error : ''}
        errorPreset={errorPreset}
      />
    </React.Fragment>
  );
});
