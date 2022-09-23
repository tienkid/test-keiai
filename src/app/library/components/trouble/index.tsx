import React from 'react';

import { useTranslation } from 'react-i18next';

import { Block, ParsedText } from '@components';
import { renderItemWithPattern } from '@components/parsed-text/utils';

import { useTroubleStyle } from './style';

export const Trouble = () => {
  // state
  const [t] = useTranslation();
  const styles = useTroubleStyle();

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
            renderText: renderItemWithPattern,
          },
          {
            pattern: /\[([^:]+):2\]/i,
            onPress: () => null,
            renderText: renderItemWithPattern,
            style: styles.linkText,
          },
        ]}>
        {t('welcome:troubling')}
      </ParsedText>
    </Block>
  );
};
