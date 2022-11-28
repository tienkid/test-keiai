import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Block, Button } from '@components';
import { FocusedStatusBarStyle } from '@components/focused-status-bar';
import { Icon } from '@components/icon';
import { goBack } from '@navigation/navigation-service';
export type HeaderProps = {
  isBack?: boolean;
};
export const HeaderBack = () => {
  const insets = useSafeAreaInsets();
  // state

  // render
  return (
    <Block
      direction={'row'}
      middle
      height={90}
      paddingTop={insets.top}
      colorTheme={'white'}
      paddingHorizontal={15}
      shadow
      alignItems="center">
      <FocusedStatusBarStyle barStyle={'dark-content'} />
      <Block flex={1} justifyContent={'center'} alignItems={'flex-start'}>
        <Button.Default
          style={{ position: 'absolute', left: 0 }}
          onPress={goBack}>
          <Icon icon="left_back" size={30} />
        </Button.Default>
      </Block>
    </Block>
  );
};
