import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Block, Button, LocalImage } from '@components';
import { FocusedStatusBarStyle } from '@components/focused-status-bar';
import { Icon } from '@components/icon';
import { Spacer } from '@components/spacer';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const Header = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  // state
  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

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
        {/* {navigation.canGoBack() && (
          <Button.Default
            style={{ position: 'absolute', left: 0 }}
            onPress={goBack}>
            <Icon name="arrow-back-ios" size={22} color={colors.white} />
          </Button.Default>
        )} */}

        <LocalImage
          source={'ic_logo'}
          resizeMode={'contain'}
          containerStyle={{
            height: 16,
            width: 74,
          }}
        />
        <Block
          direction={'row'}
          alignItems="center"
          position={'absolute'}
          right={0}>
          <Button.Default onPress={handleOpenDrawer}>
            <Icon icon="notify" size={40} />
          </Button.Default>
          <Spacer width={8} />
          <Button.Default onPress={handleOpenDrawer}>
            <Icon icon="menu" size={30} />
          </Button.Default>
        </Block>
      </Block>
    </Block>
  );
};
