import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Block,
  Button,
  LocalImage,
  ParsedText,
  Spacer,
  Text,
} from '@components';
import { renderItemWithPattern } from '@components/parsed-text/utils';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';

import { useWelcomeStyle } from './style';

export const WelcomeScreen = () => {
  // state
  const [t] = useTranslation();
  const styles = useWelcomeStyle();
  const insets = useSafeAreaInsets();

  // func

  const handleToLogin = () => {
    navigate(APP_SCREEN.LOGIN);
  };
  const handleToRegister = () => {
    navigate(APP_SCREEN.INFORMATION_PROFILE);
  };
  // render
  return (
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
        <Button.Primary t18n="welcome:new_member" onPress={handleToRegister} />
        <Spacer height={25} />
        <Block alignSelf={'center'}>
          <ParsedText
            preset="textNormal15"
            parse={[
              {
                pattern: /\[([^:]+):1\]/i,
                renderText: renderItemWithPattern,
                style: styles.linkText,
              },
              {
                pattern: /\[([^:]+):2\]/i,
                onPress: () => handleToLogin(),
                renderText: renderItemWithPattern,
                style: styles.linkText,
              },
            ]}>
            {t('welcome:login')}
          </ParsedText>
        </Block>
      </Block>
    </Block>
  );
};
