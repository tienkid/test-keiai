import React from 'react';

import { ContentDetail } from '@features/authentication/content-tab/content-detail';
import { ContentTab } from '@features/authentication/content-tab/content-screen';
import { ConfirmDeleteUser } from '@features/authentication/delete-user/confirm-delete';
import { DeleteUser } from '@features/authentication/delete-user/delete-user-screen';
import { DeleteUserSuccess } from '@features/authentication/delete-user/delete_success';
import { NotificationScreen } from '@features/authentication/home-tab/notification';
import { SettingTab } from '@features/authentication/setting-tab';
import { ContentService } from '@features/authentication/setting-tab/service-detail';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { BottomTabScreen } from './bottom-tab';
import CustomDrawer from './custom-drawer';
import { CONTENT_STACK, HOME_STACK, SETTING_STACK } from './screen-types';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'transparent',
        },
        drawerPosition: 'right',
        drawerStatusBarAnimation: 'slide',
      }}
      drawerContent={() => <CustomDrawer />}>
      <Drawer.Screen name="Home" component={BottomTabScreen} />
      <Drawer.Screen name={CONTENT_STACK.CONTENT} component={ContentTab} />
      <Drawer.Screen name={SETTING_STACK.SETTING} component={SettingTab} />
      <Drawer.Screen name={HOME_STACK.NOTIFY} component={NotificationScreen} />
      <Drawer.Screen name={HOME_STACK.DELETE_USER} component={DeleteUser} />
      <Drawer.Screen
        name={HOME_STACK.DELETE_SUCCESS}
        component={DeleteUserSuccess}
      />
      <Drawer.Screen
        name={HOME_STACK.CONFIRM_DELETE}
        component={ConfirmDeleteUser}
      />
      <Drawer.Screen
        name={SETTING_STACK.SERVICE_DETAIL}
        component={ContentService}
      />
      <Drawer.Screen
        name={CONTENT_STACK.CONTENT_DETAIL}
        component={ContentDetail}
      />
    </Drawer.Navigator>
  );
};
