import React from 'react';

import { useTranslation } from 'react-i18next';

import { Block, ParsedText } from '@components';

import { useTroubleStyle } from './style';

export const Trouble = () => {
  // state
  const [t] = useTranslation();
  const styles = useTroubleStyle();

  // func
  const renderTerm = (matchingString: any) => {
    const pattern = /\[([^:]+):([^\]]+)\]/i;
    const match = matchingString.match(pattern);
    return `${match[1]}`;
  };

  // render
  return (
    <Block
      colorTheme="base3"
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
  );
};
