import React from 'react';

import { useTranslation } from 'react-i18next';

import {
  Block,
  Button,
  ParsedText,
  Spacer,
  Text,
  WrapperBackground,
} from '@components';
import { renderItemWithPattern } from '@components/parsed-text/utils';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { useTheme } from '@theme';

import { useWelcomeStyle } from './style';

export const WelcomeScreen = () => {
  // state
  const [t] = useTranslation();
  const styles = useWelcomeStyle();
  const theme = useTheme();
  // func

  const handleToLogin = () => {
    navigate(APP_SCREEN.LOGIN);
  };
  const handleToRegister = () => {
    navigate(APP_SCREEN.INFORMATION_PROFILE);
  };
  // render
  return (
    <WrapperBackground scroll={false}>
      <Block middle>
        <Block
          width={250}
          height={250}
          borderColor={theme.colors.border}
          borderWidth={1}
          borderRadius={125}
          middle
          justifyContent={'center'}>
          <Text
            center
            lineHeight={50}
            t18n="welcome:description"
            preset="textNormal15"
            colorTheme="base5"
          />
        </Block>
        <Spacer height={38} />
        <Button.Primary t18n="welcome:new_member" onPress={handleToRegister} />
        <Spacer height={30} />
        <Block alignSelf={'center'}>
          <ParsedText
            preset="linkXXSmall"
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
    </WrapperBackground>
  );
};
