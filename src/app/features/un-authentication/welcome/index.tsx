import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Block, Button, LocalImage, Screen, Spacer, Text } from '@components';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { useTheme } from '@theme';

export const WelcomeScreen = () => {
  // state
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  // func

  const handleToLogin = () => {
    navigate(APP_SCREEN.LOGIN);
  };
  const handleToRegister = () => {
    navigate(APP_SCREEN.INFORMATION_PROFILE);
  };
  // render
  return (
    <Screen scroll backgroundColor={colors.white} unsafe>
      <Block block colorTheme="white" paddingTop={insets.top}>
        <Block middle paddingHorizontal={15}>
          <Spacer height={50} />
          <Block width={'100%'} height={385}>
            <LocalImage source="welcome" resizeMode="contain" />
          </Block>
          <Spacer height={60} />
          <Text
            preset="textNormal12"
            t18n="welcome:description"
            colorTheme="base5"
          />
          <Spacer height={5} />
          <Button.Primary
            t18n="welcome:new_member"
            onPress={handleToRegister}
          />
          <Spacer height={25} />
          <Block alignSelf={'center'}>
            <Text
              onPress={handleToLogin}
              preset="textNormal15"
              t18n="welcome:login"
              colorTheme="text_2"
            />
          </Block>
          <Spacer height={60} />
        </Block>
      </Block>
    </Screen>
  );
};
