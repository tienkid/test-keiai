import React from 'react';

import { Icon, Spacer } from '@components';
import { Block } from '@components/block';
import { Text } from '@components/text';
import { I18nKeys } from '@utils/i18n/locales';

type ItemRowProps = {
  t18n: I18nKeys;
};
export const ItemRow = ({ t18n }: ItemRowProps) => {
  return (
    <Block direction={'row'} alignItems="center">
      <Text t18n={t18n} preset="textNormal12" colorTheme="base5" />
      <Spacer width={5} />
      <Icon icon="open_new" size={18} resizeMode="contain" />
    </Block>
  );
};
