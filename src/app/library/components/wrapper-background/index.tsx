import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@components/button';
import { Icon } from '@components/icon';
import { Text } from '@components/text';
import { goBack } from '@navigation/navigation-service';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  // render
  return (
    <Block
      block
      colorTheme="white"
      paddingTop={paddingTop !== undefined ? paddingTop : insets.top + 20}>
      <FocusedStatusBarStyle barStyle={barStyle || 'light-content'} />
      {navigation.canGoBack() && (
        <Block paddingLeft={24}>
          <Button.Default onPress={goBack}>
            <Icon icon="arrow_left" colorTheme="base_1" />
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
    </Block>
  );
};
