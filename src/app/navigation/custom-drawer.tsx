import React, { useCallback } from 'react';
import { FlatList, Linking, Platform, Pressable } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Block, Button, Icon, LocalImage, Spacer, Text } from '@components';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useTheme } from '@theme';
import IconVector from 'react-native-vector-icons/MaterialIcons';

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
      case 7:
        if (Platform.OS === 'ios') {
          Linking.openURL(
            'App-Prefs:NOTIFICATIONS_ID&path=com.keiai.mobile.production',
          );
        } else {
          Linking.openSettings();
        }
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
          <Icon icon={item.icon} size={24} />
          <Spacer width={5} />
          <Text
            preset="linkSmall"
            colorTheme="base5"
            textAlign={'left'}
            fontWeight={'400'}
            text={item.content}
          />
        </Block>
        <Spacer height={item.id === 0 || item.id === 5 ? 40 : 20} />
        {/* <Spacer height={item.id === 0 || item.id === 6 ? 20 : 0} /> */}
      </Button.Default>
    );
  };

  const onCloseDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  // const itemSeparator = item => {
  //   return <Spacer height={item.id === 0 || item.id === 5 ? 40 : 20} />;
  // };
  // render
  return (
    <Block block direction={'row'} style={{ backgroundColor: 'transparent' }}>
      <Pressable
        onPress={onCloseDrawer}
        style={{ backgroundColor: '#00000099', width: 95, paddingTop: top }}>
        <Block paddingLeft={15} paddingTop={15}>
          <Button.Default onPress={onCloseDrawer}>
            <IconVector name="close" size={30} color={colors.white} />
          </Button.Default>
        </Block>
      </Pressable>
      <Block
        block
        color={colors.white}
        paddingTop={top}
        flex={1}
        paddingBottom={bottom + 30}
        alignItems={'flex-start'}>
        <Block paddingLeft={50} flex={1}>
          <Spacer height={70} />
          <FlatList
            data={dataMenu}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
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
            fontWeight={'300'}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default CustomDrawer;
