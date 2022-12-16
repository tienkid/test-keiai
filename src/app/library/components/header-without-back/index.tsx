import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Block, Text } from '@components';
import { FocusedStatusBarStyle } from '@components/focused-status-bar';
import { I18nKeys } from '@utils/i18n/locales';
export type HeaderProps = {
  headerText?: I18nKeys;
};
export const HeaderWithOutBack = ({ headerText }: HeaderProps) => {
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
      <Block
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        direction="row">
        {/* <Button.Default
          style={{ position: 'absolute', left: 0 }}
          onPress={goBack}>
          <Icon icon="left_back" size={30} />
        </Button.Default> */}
        <Text
          preset="textNormal14"
          t18n={headerText}
          colorTheme="base5"
          numberOfLines={2}
        />
      </Block>
    </Block>
  );
};
