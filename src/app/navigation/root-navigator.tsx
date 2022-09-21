// import { Home } from '@features/authentication/home';
// import { Login } from '@features/un-authentication/login';
// import { WelcomeScreen } from '@features/un-authentication/welcome';
import React, { useEffect } from 'react';

import BootSplash from 'react-native-bootsplash';

import { Login } from '@features/un-authentication/login';
import { WelcomeScreen } from '@features/un-authentication/welcome';
import { useSelector } from '@hooks';
import { AppModule } from '@native-module';
import { APP_SCREEN, RootStackParamList } from '@navigation/screen-types';
import { createStackNavigator } from '@react-navigation/stack';

import { BottomTabScreen } from './bottom-tab';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  // state
  const token = useSelector(x => x.app.token);

  // effect
  useEffect(() => {
    const id = setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!token) {
      // clean cache when logout
      AppModule.clearCache();
    }
  }, [token]);

  // render
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {token === undefined ? (
        <RootStack.Group
          screenOptions={{
            animationTypeForReplace: 'pop',
            gestureEnabled: false,
          }}>
          {/* <RootStack.Screen
            name={APP_SCREEN.AUTHORIZE}
            component={DrawerNavigator}
          /> */}
          <RootStack.Screen
            name={APP_SCREEN.WELCOME}
            component={WelcomeScreen}
          />
          <RootStack.Screen name={APP_SCREEN.LOGIN} component={Login} />
        </RootStack.Group>
      ) : (
        <RootStack.Group
          screenOptions={{
            gestureEnabled: false,
          }}>
          <RootStack.Screen
            name={APP_SCREEN.AUTHORIZE}
            component={BottomTabScreen}
          />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};
