import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Block, Button, LocalImage } from '@components';
import { goBack } from '@navigation/navigation-service';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useTheme } from '@theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Header = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  // state
  const { colors } = useTheme();
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
      colorTheme={'primary'}
      paddingHorizontal={15}
      alignItems="center">
      <Block flex={1} justifyContent={'center'} alignItems={'center'}>
        {navigation.canGoBack() && (
          <Button.Default
            style={{ position: 'absolute', left: 0 }}
            onPress={goBack}>
            <Icon name="arrow-back-ios" size={22} color={colors.white} />
          </Button.Default>
        )}

        <Block height={50} width={100}>
          <LocalImage source={'headerLogo'} resizeMode={'contain'} />
        </Block>
        <Button.Default
          style={{ position: 'absolute', right: 0 }}
          onPress={handleOpenDrawer}>
          <Icon name="settings" size={30} color={colors.white} />
        </Button.Default>
      </Block>
    </Block>
  );
};
