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

import { useWelcomeStyle } from './style';

export const WelcomeScreen = () => {
  // state
  const [t] = useTranslation();
  const styles = useWelcomeStyle();

  // func
  const renderTerm = (matchingString: any) => {
    const pattern = /\[([^:]+):([^\]]+)\]/i;
    const match = matchingString.match(pattern);
    return `${match[1]}`;
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
                renderText: renderTerm,
              },
              {
                pattern: /\[([^:]+):2\]/i,
                onPress: () => null,
                renderText: renderTerm,
                style: styles.linkText,
              },
            ]}>
            {t('welcome:login')}
          </ParsedText>
        </Block>
        <Spacer height={39} />
        <Block height={1} colorTheme={'base_1'} />
        <Spacer height={39} />
        <Text center t18n="welcome:not_has_account" preset="linkSubtitle" />
        <Spacer height={32} />
        <ParsedText
          center
          preset="linkSmall"
          parse={[
            {
              pattern: /\[([^:]+):1\]/i,
              renderText: renderTerm,
            },
            {
              pattern: /\[([^:]+):2\]/i,
              renderText: renderTerm,
            },
            {
              pattern: /\[([^:]+):3\]/i,
              renderText: renderTerm,
              style: styles.highlineText,
            },
          ]}>
          {t('welcome:use_KEIAI_Plus')}
        </ParsedText>
        <Spacer height={30} />
        <Button.Outline t18n="welcome:my_KEIAI_Plus" />
        <Spacer height={6} />
        <Text center t18n="welcome:myKEIAI_member" />
      </Block>
      <Block
        marginTop={33}
        colorTheme="base_3"
        width={'100%'}
        height={55}
        alignItems="center"
        justifyContent={'center'}>
        <ParsedText
          preset="textSmall"
          parse={[
            {
              pattern: /\[([^:]+):1\]/i,
              renderText: renderTerm,
            },
            {
              pattern: /\[([^:]+):2\]/i,
              onPress: () => null,
              renderText: renderTerm,
              style: styles.linkText,
            },
          ]}>
          {t('welcome:troubling')}
        </ParsedText>
      </Block>
    </WrapperBackground>
  );
};
