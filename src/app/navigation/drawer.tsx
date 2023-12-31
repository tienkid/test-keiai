import React from 'react';
import { Dimensions } from 'react-native';

import { ContentDetail } from '@features/authentication/content-tab/content-detail';
import { ContentTab } from '@features/authentication/content-tab/content-screen';
import { DeleteUserSuccess } from '@features/authentication/delete-user/delete_success';
import { NotificationScreen } from '@features/authentication/home-tab/notification';
import { SettingTab } from '@features/authentication/setting-tab';
import { ContentService } from '@features/authentication/setting-tab/service-detail';
import { createDrawerNavigator } from '@react-navigation/drawer';
const { width } = Dimensions.get('screen');

import { BottomTabScreen } from './bottom-tab';
import CustomDrawer from './custom-drawer';
import {
  APP_SCREEN,
  CONTENT_STACK,
  HOME_STACK,
  SETTING_STACK,
} from './screen-types';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
        drawerStyle: {
          width: width - 95,
          backgroundColor: 'transparent',
        },
        overlayColor: '"rgba(0, 0, 0, 0.85)"',
        drawerPosition: 'right',
        drawerStatusBarAnimation: 'fade',
      }}
      drawerContent={() => <CustomDrawer />}>
      <Drawer.Screen name={APP_SCREEN.HOME} component={BottomTabScreen} />
      <Drawer.Screen name={CONTENT_STACK.CONTENT} component={ContentTab} />
      <Drawer.Screen name={SETTING_STACK.SETTING} component={SettingTab} />
      <Drawer.Screen name={HOME_STACK.NOTIFY} component={NotificationScreen} />

      <Drawer.Screen
        name={SETTING_STACK.SERVICE_DETAIL}
        component={ContentService}
      />
      <Drawer.Screen
        name={CONTENT_STACK.CONTENT_DETAIL}
        component={ContentDetail}
      />
      <Drawer.Screen
        name={HOME_STACK.DELETE_SUCCESS}
        component={DeleteUserSuccess}
      />
    </Drawer.Navigator>
  );
};
