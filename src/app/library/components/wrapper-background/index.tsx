import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@components/button';
import { Screen } from '@components/screen';
import { Text } from '@components/text';
import { goBack } from '@navigation/navigation-service';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { WrapperBackgroundTypes } from './type';

import { Block } from '../block';
import { FocusedStatusBarStyle } from '../focused-status-bar';
import { LocalImage } from '../local-image';

export const WrapperBackground = ({
  title,
  barStyle,
  children,
  titleT18n,
  paddingTop,
  titlePreset = 'linkSubtitle',
}: WrapperBackgroundTypes) => {
  // state
  const theme = useTheme();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  // render
  return (
    <Block block colorTheme="white">
      <Screen
        scroll
        style={{
          paddingTop: paddingTop !== undefined ? paddingTop : insets.top + 20,
          backgroundColor: theme.colors.white,
        }}
        hiddenStatusBar
        unsafe={true}
        bottomInsetColor={theme.colors.white}>
        <FocusedStatusBarStyle barStyle={barStyle || 'light-content'} />
        {navigation.canGoBack() && (
          <Block paddingLeft={24}>
            <Button.Default onPress={goBack}>
              <Icon
                name="keyboard-backspace"
                size={30}
                color={theme.colors.base1}
              />
            </Button.Default>
          </Block>
        )}
        <Block alignSelf={'center'} width={190} height={80}>
          <LocalImage source="logo" />
        </Block>
        <Block marginTop={25} marginBottom={25} alignSelf={'center'}>
          <Text text={title} t18n={titleT18n} preset={titlePreset} />
        </Block>
        {children}
      </Screen>
    </Block>
  );
};
