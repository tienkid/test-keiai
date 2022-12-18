import React, { useMemo } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { execFunc } from '@common';
import { Button } from '@components/button';
import { Icon } from '@components/icon';
import { Screen } from '@components/screen';
import { Spacer } from '@components/spacer';
import { Text } from '@components/text';
import { goBack } from '@navigation/navigation-service';
import { useTheme } from '@theme';

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
  canBack,
  scroll = true,
  isHiddenLogo,
  headerTitleT18n,
  titlePreset = 'textNormal15',
  onBack,
}: WrapperBackgroundTypes) => {
  // state
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const haveHeader = useMemo(() => {
    return canBack || headerTitleT18n;
  }, [canBack, headerTitleT18n]);

  //func
  const handlePressBack = () => {
    goBack();
    execFunc(onBack);
  };
  // render
  return (
    <Block
      block
      colorTheme="white"
      paddingTop={paddingTop !== undefined ? paddingTop : insets.top}>
      {haveHeader ? (
        <Block
          zIndex={999}
          height={44}
          colorTheme="white"
          justifyContent={'center'}
          alignItems="center"
          shadow>
          <Block paddingHorizontal={7} direction={'row'} block middle>
            <Block flex={1}>
              {canBack ? (
                <Button.Default onPress={handlePressBack}>
                  <Icon icon="left_back" color={theme.colors.base1} size={28} />
                </Button.Default>
              ) : (
                <Spacer width={28} />
              )}
            </Block>
            <Block flex={8} middle>
              <Text
                t18n={headerTitleT18n}
                preset={'textNormal'}
                colorTheme="base7"
                textAlign={'center'}
              />
            </Block>
            <Block flex={1}>
              <Spacer width={28} />
            </Block>
          </Block>
          {/* <Spacer height={8} /> */}
        </Block>
      ) : (
        <Spacer height={60} />
      )}
      <Screen scroll={scroll} unsafe>
        <FocusedStatusBarStyle barStyle={barStyle || 'dark-content'} />
        {!isHiddenLogo && (
          <Block>
            <Spacer height={15} />
            <Block
              alignSelf={'center'}
              width={haveHeader ? 100 : 120}
              height={haveHeader ? 41.6 : 50}>
              <LocalImage source="logo" resizeMode="contain" />
            </Block>
          </Block>
        )}
        {(title || titleT18n) && (
          <Block alignSelf={'center'}>
            <Spacer height={25} />
            <Text
              text={title}
              t18n={titleT18n}
              preset={titlePreset}
              colorTheme="base5"
            />
          </Block>
        )}

        <Spacer height={30} />
        {children}
      </Screen>
    </Block>
  );
};
