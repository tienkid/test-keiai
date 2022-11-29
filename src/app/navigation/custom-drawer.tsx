import React, { useCallback } from 'react';
import { FlatList, Linking } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Block, Button, Icon, LocalImage, Spacer, Text } from '@components';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useTheme } from '@theme';

import { dataMenu } from './data';
import { navigate } from './navigation-service';
import { BOTTOM_TAB, HOME_STACK } from './screen-types';
import { ItemDrawer, ListRenderDrawer } from './type';

import { dispatch } from '../common/redux';
import { appActions } from '../redux/action-slice/app';

const CustomDrawer = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { bottom, top } = useSafeAreaInsets();

  const handleRouteDrawer = (item: ItemDrawer) => {
    switch (item.id) {
      case 0:
        navigate(BOTTOM_TAB.TAB_HOME);
        break;
      case 3:
        navigate(HOME_STACK.NOTIFY);
        break;
      case 8:
        navigate(HOME_STACK.DELETE_USER);
        break;
      case 9:
        dispatch(appActions.logout());
        break;
      default:
        Linking.openURL(item.url);
        break;
    }
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const keyExtractor = useCallback(item => item.id, []);
  const renderItem = ({ item }: ListRenderDrawer) => {
    return (
      <Button.Default onPress={() => handleRouteDrawer(item)}>
        <Block direction={'row'} middle>
          <Icon icon={item.icon} />
          <Spacer width={5} />
          <Text
            preset="linkSmall"
            colorTheme="base5"
            textAlign={'left'}
            fontWeight={'400'}
            text={item.content}
          />
        </Block>
        <Spacer height={item.id === 0 || item.id === 6 ? 20 : 0} />
      </Button.Default>
    );
  };
  const itemSeparator = () => {
    return <Spacer height={20} />;
  };
  // render
  return (
    <Block block>
      <Block
        block
        paddingTop={top}
        paddingBottom={bottom * 2 + 30}
        color={colors.white}
        alignItems={'flex-start'}>
        <Block paddingLeft={50}>
          <Spacer height={70} />
          <FlatList
            data={dataMenu}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={itemSeparator}
          />
        </Block>
        <Block paddingTop={10} alignSelf={'center'}>
          <LocalImage
            source="logo"
            style={{ height: 24 }}
            resizeMode="contain"
          />
          <Text
            preset="linkXXXSmall"
            colorTheme="border"
            text={'バージョン 1.5.2'}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default CustomDrawer;
