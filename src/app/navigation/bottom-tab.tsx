import React from 'react';
import { Platform } from 'react-native';

import { useTranslation } from 'react-i18next';

import { Icon } from '@components';
import { ContentDetail } from '@features/authentication/content-tab/content-detail';
import { ContentTab } from '@features/authentication/content-tab/content-screen';
import { ConfirmDeleteUser } from '@features/authentication/delete-user/confirm-delete';
import { DeleteUser } from '@features/authentication/delete-user/delete-user-screen';
import { DeleteUserSuccess } from '@features/authentication/delete-user/delete_success';
import { HomeTab } from '@features/authentication/home-tab/home';
import { NotificationScreen } from '@features/authentication/home-tab/notification';
import { NotifyDetail } from '@features/authentication/home-tab/notification-detail';
import { PointTab } from '@features/authentication/point-tab';
import { SettingTab } from '@features/authentication/setting-tab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@theme';

import {
  BOTTOM_TAB,
  CONTENT_STACK,
  HOME_STACK,
  POINT_STACK,
  SETTING_STACK,
} from './screen-types';

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  // render
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={HOME_STACK.HOME} component={HomeTab} />
      <HomeStack.Screen
        name={HOME_STACK.NOTIFY}
        component={NotificationScreen}
      />
      <HomeStack.Screen
        name={HOME_STACK.NOTIFY_DETAIL}
        component={NotifyDetail}
      />
      <HomeStack.Screen name={HOME_STACK.DELETE_USER} component={DeleteUser} />
      <HomeStack.Screen
        name={HOME_STACK.DELETE_SUCCESS}
        component={DeleteUserSuccess}
      />
      <HomeStack.Screen
        name={HOME_STACK.CONFIRM_DELETE}
        component={ConfirmDeleteUser}
      />
    </HomeStack.Navigator>
  );
};

const PointStack = createStackNavigator();

export const PointStackScreen = () => {
  // render
  return (
    <PointStack.Navigator screenOptions={{ headerShown: false }}>
      <PointStack.Screen name={POINT_STACK.POINT} component={PointTab} />
    </PointStack.Navigator>
  );
};

const ContentStack = createStackNavigator();

export const ContentStackScreen = () => {
  // render
  return (
    <ContentStack.Navigator screenOptions={{ headerShown: false }}>
      <ContentStack.Screen
        name={CONTENT_STACK.CONTENT}
        component={ContentTab}
      />
      <ContentStack.Screen
        name={CONTENT_STACK.CONTENT_DETAIL}
        component={ContentDetail}
      />
    </ContentStack.Navigator>
  );
};

const SettingStack = createStackNavigator();

export const SettingStackScreen = () => {
  // render
  return (
    <SettingStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingStack.Screen
        name={SETTING_STACK.SETTING}
        component={SettingTab}
      />
    </SettingStack.Navigator>
  );
};

export const BottomTabScreen = () => {
  // state
  const { colors } = useTheme();
  const [t] = useTranslation();
  // func

  // render
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#CCCCCC',
        tabBarStyle:
          Platform.OS === 'android'
            ? {
                borderTopWidth: 2,
                borderTopColor: '#e9e8e9',
              }
            : {
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              },
        tabBarLabelStyle: { paddingBottom: 5 },
      }}>
      <BottomTab.Screen
        // options={{
        //   title: t('bottom_tab:home'),
        //   tabBarIcon: props => (
        //     <Icon icon={'home'} color={props.color} size={24} />
        //   ),
        //   tabBarStyle: { display: 'none' },
        // }}
        options={({ route }) => ({
          title: t('bottom_tab:home'),
          tabBarIcon: props => (
            <Icon icon={'home'} color={props.color} size={24} />
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === HOME_STACK.DELETE_SUCCESS) {
              return { display: 'none' };
            }
          })(route),
        })}
        name={BOTTOM_TAB.TAB_HOME}
        component={HomeStackScreen}
      />
      <BottomTab.Screen
        options={{
          title: t('bottom_tab:content'),
          tabBarIcon: props => (
            <Icon icon={'content'} color={props.color} size={24} />
          ),
        }}
        name={BOTTOM_TAB.TAB_CONTENT}
        component={ContentStackScreen}
      />
      {/* <BottomTab.Screen
        options={{
          title: '',
          tabBarIcon: props => (
            <Block
              width={66}
              height={66}
              colorTheme="white"
              shadow
              borderRadius={33}
              borderColor={colors.border}
              borderWidth={0.5}
              justifyContent="center"
              zIndex={3}
              middle>
              <Block
                width={56}
                height={56}
                colorTheme={props.focused ? 'primary' : 'border'}
                justifyContent="center"
                middle
                zIndex={1}
                borderRadius={28}>
                <Icon
                  icon={'home_search'}
                  color={props.color}
                  size={24}
                  colorTheme="white"
                />
                <Text
                  t18n="bottom_tab:my_home"
                  preset="textXXSmall"
                  colorTheme="white"
                />
              </Block>
              <Block
                position={'absolute'}
                colorTheme="white"
                width={80}
                height={56}
                bottom={-6}
              />
            </Block>
          ),
        }}
        name={BOTTOM_TAB.TAB_MY_HOME}
        component={ContentStackScreen}
      /> */}
      <BottomTab.Screen
        options={{
          title: t('bottom_tab:setting'),
          tabBarIcon: props => (
            <Icon icon={'service'} color={props.color} size={24} />
          ),
        }}
        name={BOTTOM_TAB.TAB_SETTING}
        component={SettingStackScreen}
      />
      <BottomTab.Screen
        options={{
          title: t('bottom_tab:point'),
          tabBarIcon: props => (
            <Icon icon={'point'} color={props.color} size={24} />
          ),
        }}
        name={BOTTOM_TAB.TAB_POINT}
        component={PointStackScreen}
      />
    </BottomTab.Navigator>
  );
};
