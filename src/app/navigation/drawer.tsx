import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { BottomTabScreen } from './bottom-tab';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 260,
          height: 600,
        },
        drawerPosition: 'right',
        drawerStatusBarAnimation: 'slide',
      }}>
      <Drawer.Screen name="Home" component={BottomTabScreen} />
    </Drawer.Navigator>
  );
};
