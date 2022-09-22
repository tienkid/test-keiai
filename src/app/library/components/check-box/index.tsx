import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { useMix, useSharedTransition } from '@animated';
import { execFunc } from '@common';
import { Icon } from '@components/icon';
import { useTheme } from '@theme';

import { useCheckBoxStyle } from './styles';
import { CheckboxProps } from './type';

import { Text } from '../text';

export const CheckBox = ({
  text,
  t18n,
  value,
  style,
  fillStyle,
  outlineStyle: outlineStyleOverwrite,
  onToggle,
  disable = false,
  sizeIcon = 14.44,
  initialValue = false,
}: CheckboxProps) => {
  // state
  const theme = useTheme();
  const styles = useCheckBoxStyle();
  const [localValue, setLocalValue] = useState<boolean>(initialValue);
  const progress = useSharedTransition(value ?? localValue);
  const scale = useMix(progress, 0, 1);
  const opacity = useMix(progress, 0, 1);

  // function
  const onPress = useCallback(() => {
    if (typeof value === 'boolean') {
      execFunc(onToggle, !value);
    } else {
      execFunc(onToggle, !localValue);
      setLocalValue(v => !v);
    }
  }, [localValue, onToggle, value]);

  // reanimated style
  const styleAnimated = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  // render
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disable}
      onPress={onPress}
      style={[styles.root, style]}>
      <>
        <View style={[styles.outline, outlineStyleOverwrite]}>
          <Animated.View style={[styles.fill, fillStyle, styleAnimated]}>
            <Icon icon="check" color={theme.colors.white_bg} size={sizeIcon} />
          </Animated.View>
        </View>
        <Text text={text} t18n={t18n} style={styles.label} />
      </>
    </TouchableOpacity>
  );
};
