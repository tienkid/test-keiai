import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Block, Button, Text } from '@components';
import { FocusedStatusBarStyle } from '@components/focused-status-bar';
// import { Icon } from '@components/icon';
import { Spacer } from '@components/spacer';
import { goBack } from '@navigation/navigation-service';
import { ColorDefault } from '@theme/color';
import { I18nKeys } from '@utils/i18n/locales';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type HeaderBackLeftProps = {
  headerText?: I18nKeys;
  headerTextNonTranslate?: string;
};
export const HeaderBackLeft = ({
  headerText,
  headerTextNonTranslate,
}: HeaderBackLeftProps) => {
  const insets = useSafeAreaInsets();
  // state

  // render
  return (
    <Block
      direction={'row'}
      middle
      height={44 + insets.top}
      paddingTop={insets.top}
      colorTheme={'white'}
      paddingHorizontal={15}
      shadow
      alignItems="center">
      <FocusedStatusBarStyle barStyle={'dark-content'} />
      <Block alignItems="center" direction="row" block>
        <Button.Default onPress={goBack}>
          <Icon name="arrow-back-ios" size={20} color={ColorDefault.base5} />
        </Button.Default>
        <Spacer width={5} />
        <Block
          justifyContent="center"
          alignItems={headerTextNonTranslate ? 'flex-start' : 'center'}>
          <Text
            preset="textNormal12"
            text={headerTextNonTranslate}
            t18n={headerText}
            colorTheme="base5"
            numberOfLines={1}
          />
        </Block>
      </Block>
    </Block>
  );
};
