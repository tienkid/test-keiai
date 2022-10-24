import React, { useCallback } from 'react';
import { FlatList, Linking, TouchableWithoutFeedback } from 'react-native';

import { Block, Button, Divider, Text } from '@components';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useTheme } from '@theme';

import { dataMenu } from './data';
import { navigate } from './navigation-service';
import { HOME_STACK } from './screen-types';
import { ItemDrawer, ListRenderDrawer } from './type';

import { dispatch } from '../common/redux';
import { appActions } from '../redux/action-slice/app';

const CustomDrawer = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const handleRouteDrawer = (item: ItemDrawer) => {
    switch (item.id) {
      case 3:
        navigate(HOME_STACK.NOTIFY);
        break;
      case 7:
        console.log('waiting...');
        break;
      case 8:
        dispatch(appActions.logout());
        break;
      default:
        Linking.openURL(item.url);
        break;
    }
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  const handleHideDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  const keyExtractor = useCallback(item => item.id, []);
  const renderItem = ({ item }: ListRenderDrawer) => {
    return (
      <Button.Default
        style={{ alignItems: 'flex-end', paddingVertical: 7 }}
        onPress={() => handleRouteDrawer(item)}>
        <Text
          preset="textBold16"
          colorTheme="base5"
          fontWeight={'700'}
          text={item.content}
        />
      </Button.Default>
    );
  };
  const itemSeparator = () => {
    return <Divider />;
  };
  // render
  return (
    <Block block>
      <TouchableWithoutFeedback onPress={handleHideDrawer}>
        <Block height={90} />
      </TouchableWithoutFeedback>
      <Block
        flex={1}
        color={colors.white}
        paddingVertical={10}
        paddingHorizontal={10}
        borderRadius={5}>
        <Block>
          <FlatList
            data={dataMenu}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={itemSeparator}
          />
        </Block>
        <Block alignItems={'flex-end'} paddingTop={10}>
          <Text
            preset="textBold16"
            colorTheme="base4"
            text={'バージョン：1.0.0'}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default CustomDrawer;
