import React from 'react';

import { ContentTab } from '@features/authentication/content-tab';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { BottomTabScreen } from './bottom-tab';
import CustomDrawer from './custom-drawer';
import { CONTENT_STACK } from './screen-types';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'transparent',
          width: 260,
          height: 500,
        },
        drawerPosition: 'right',
        drawerStatusBarAnimation: 'slide',
      }}
      drawerContent={() => <CustomDrawer />}>
      <Drawer.Screen name="Home" component={BottomTabScreen} />
      <Drawer.Screen name={CONTENT_STACK.CONTENT} component={ContentTab} />
    </Drawer.Navigator>
  );
};
