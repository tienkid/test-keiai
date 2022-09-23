import React from 'react';

import { useTranslation } from 'react-i18next';

import {
  Block,
  Button,
  ParsedText,
  Spacer,
  Text,
  Trouble,
  WrapperBackground,
} from '@components';
import { renderItemWithPattern } from '@components/parsed-text/utils';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';

import { useWelcomeStyle } from './style';

export const WelcomeScreen = () => {
  // state
  const [t] = useTranslation();
  const styles = useWelcomeStyle();

  // func

  const handleToLogin = () => {
    navigate(APP_SCREEN.LOGIN);
  };

  // render
  return (
    <WrapperBackground titleT18n="welcome:registered_members">
      <Block paddingHorizontal={24}>
        <Button.Primary t18n="welcome:sms_authenticate" />
        <Block alignSelf={'center'}>
          <Spacer height={16} />
          <Text center t18n="common:or" />
          <Spacer height={17} />
          <ParsedText
            preset="textSmall"
            parse={[
              {
                pattern: /\[([^:]+):1\]/i,
                renderText: renderItemWithPattern,
              },
              {
                pattern: /\[([^:]+):2\]/i,
                onPress: () => null,
                renderText: renderItemWithPattern,
                style: styles.linkText,
              },
            ]}>
            {t('welcome:login')}
          </ParsedText>
        </Block>
        <Spacer height={39} />
        <Block height={1} colorTheme={'base1'} />
        <Spacer height={39} />
        <Text center t18n="welcome:not_has_account" preset="linkSubtitle" />
        <Spacer height={32} />
        <ParsedText
          center
          preset="linkSmall"
          parse={[
            {
              pattern: /\[([^:]+):1\]/i,
              renderText: renderItemWithPattern,
            },
            {
              pattern: /\[([^:]+):2\]/i,
              renderText: renderItemWithPattern,
            },
            {
              pattern: /\[([^:]+):3\]/i,
              renderText: renderItemWithPattern,
              style: styles.highlineText,
            },
          ]}>
          {t('welcome:use_KEIAI_Plus')}
        </ParsedText>
        <Spacer height={30} />
        <Button.Outline t18n="welcome:my_KEIAI_Plus" onPress={handleToLogin} />
        <Spacer height={6} />
        <Text center t18n="welcome:myKEIAI_member" />
      </Block>
      <Trouble />
    </WrapperBackground>
  );
};
